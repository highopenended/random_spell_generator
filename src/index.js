import { db } from './firebase-config.js';
import { collection, getDocs } from 'firebase/firestore';

async function getRandomSpell(level = null, tradition = null) {
    try {
        const spellsRef = collection(db, 'spells');
        const snapshot = await getDocs(spellsRef);
        
        let spells = [];
        snapshot.forEach((doc) => {
            const spell = doc.data();
            // Filter by level if specified
            if (level !== null && spell.level !== level) return;
            // Filter by tradition if specified
            if (tradition !== null && !spell.traditions.includes(tradition)) return;
            spells.push(spell);
        });

        if (spells.length === 0) {
            throw new Error('No spells found matching the criteria');
        }

        const randomIndex = Math.floor(Math.random() * spells.length);
        return spells[randomIndex];
    } catch (error) {
        console.error('Error getting random spell:', error);
        throw error;
    }
}

function displaySpell(spell, elementId) {
    console.log('Displaying spell:', spell); // Debug log
    
    const spellDisplay = document.getElementById(elementId);
    if (!spellDisplay) {
        console.error(`Element with id ${elementId} not found`);
        return;
    }

    if (!spell) {
        console.error('No spell data provided to display');
        return;
    }

    spellDisplay.innerHTML = `
        <div class="spell-card random">
            <h2>${spell.name}</h2>
            <p><strong>Level:</strong> ${spell.level}</p>
            <p><strong>Traditions:</strong> ${spell.traditions.join(', ')}</p>
            <p><strong>Traits:</strong> ${spell.traits.join(', ')}</p>
            <p><strong>Summary:</strong> ${spell.summary}</p>
            ${spell.range ? `<p><strong>Range:</strong> ${spell.range}</p>` : ''}
            ${spell.area ? `<p><strong>Area:</strong> ${spell.area}</p>` : ''}
            ${spell.duration ? `<p><strong>Duration:</strong> ${spell.duration}</p>` : ''}
            ${spell.defense ? `<p><strong>Defense:</strong> ${spell.defense}</p>` : ''}
        </div>
    `;
    console.log('Display updated'); // Debug log
}

async function loadSpells() {
    try {
        const spellsRef = collection(db, 'spells');
        const snapshot = await getDocs(spellsRef);
        const spellsList = document.getElementById('spellsList');
        
        // Clear existing content
        spellsList.innerHTML = '';
        
        // Sort spells by level and then name
        const spells = [];
        snapshot.forEach((doc) => {
            spells.push(doc.data());
        });
        
        spells.sort((a, b) => {
            if (a.level === b.level) {
                return a.name.localeCompare(b.name);
            }
            return a.level - b.level;
        });

        // Create spell list
        spells.forEach((spell) => {
            const spellCard = document.createElement('div');
            spellCard.className = 'spell-card';
            spellCard.innerHTML = `
                <h3>${spell.name}</h3>
                <p><strong>Level:</strong> ${spell.level}</p>
                <p><strong>Traditions:</strong> ${spell.traditions.join(', ')}</p>
                <p><strong>Summary:</strong> ${spell.summary}</p>
            `;
            spellsList.appendChild(spellCard);
        });

        // Update count
        document.getElementById('spellCount').textContent = `Total Spells: ${spells.length}`;
    } catch (error) {
        console.error('Error loading spells:', error);
    }
}

async function populateLevelDropdown() {
    try {
        const spellsRef = collection(db, 'spells');
        const snapshot = await getDocs(spellsRef);
        
        // Get unique levels from spells
        const levels = new Set();
        snapshot.forEach((doc) => {
            const spell = doc.data();
            levels.add(spell.level);
        });
        
        // Sort levels numerically
        const sortedLevels = Array.from(levels).sort((a, b) => a - b);
        
        // Get the dropdown
        const levelSelect = document.getElementById('spellLevel');
        levelSelect.innerHTML = '<option value="all">All Levels</option>';
        
        // Add options for each level
        sortedLevels.forEach(level => {
            const option = document.createElement('option');
            option.value = level;
            // Display "Cantrip" for level 0, otherwise show "Level X"
            option.textContent = level === 0 ? 'Cantrip' : `Level ${level}`;
            levelSelect.appendChild(option);
        });
        
        console.log('Populated levels:', sortedLevels);
    } catch (error) {
        console.error('Error populating level dropdown:', error);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Populate dropdowns when page loads
    populateLevelDropdown();
    
    loadSpells();

    // Set up random spell generator
    const generateButton = document.getElementById('generateSpell');
    const levelSelect = document.getElementById('spellLevel');
    const traditionSelect = document.getElementById('tradition');

    generateButton.addEventListener('click', async () => {
        try {
            const level = levelSelect.value === 'all' ? null : parseInt(levelSelect.value);
            const tradition = traditionSelect.value === 'all' ? null : traditionSelect.value;
            
            const randomSpell = await getRandomSpell(level, tradition);
            displaySpell(randomSpell, 'randomSpellResult');
        } catch (error) {
            console.error('Error generating random spell:', error);
            document.getElementById('randomSpellResult').innerHTML = 
                `<div class="error">Error generating spell: ${error.message}</div>`;
        }
    });
});
