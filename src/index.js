import { spellsData } from './data/spellsData.js';

// Get a random spell from the entire collection
function getRandomSpell() {
    const randomIndex = Math.floor(Math.random() * spellsData.length);
    return spellsData[randomIndex];
}

// Get a random spell filtered by specific criteria
function getRandomSpellByFilter() {
    const selectedLevels = getSelectedValues('spellLevels');
    const selectedTraditions = getSelectedValues('traditions');
    const traditionLogic = document.querySelector('input[name="traditionLogic"]:checked').value;
    
    console.log('Filtering with:', { selectedLevels, selectedTraditions, traditionLogic });

    let filteredSpells = spellsData.filter(spell => {
        // Filter by level
        if (selectedLevels.length > 0) {
            const spellLevel = spell.rank.toLowerCase().includes('cantrip') ? '0' : 
                spell.rank.replace(/[^\d]/g, '');
            if (!selectedLevels.includes(spellLevel)) {
                return false;
            }
        }

        // Filter by traditions
        if (selectedTraditions.length > 0) {
            const spellTraditions = spell.tradition.toLowerCase().split(',').map(t => t.trim());
            
            if (traditionLogic === 'AND') {
                // Check if spell has ALL selected traditions
                return selectedTraditions.every(t => spellTraditions.includes(t));
            } else {
                // Check if spell has ANY selected traditions
                return selectedTraditions.some(t => spellTraditions.includes(t));
            }
        }

        return true;
    });

    console.log('Filtered spells count:', filteredSpells.length);

    if (filteredSpells.length === 0) {
        return null;
    }

    const randomIndex = Math.floor(Math.random() * filteredSpells.length);
    return filteredSpells[randomIndex];
}

// Example usage:
// Get any random spell
const randomSpell = getRandomSpell();
console.log('Random spell:', randomSpell.name);

// Get a random arcane cantrip
const randomArcaneCantrip = getRandomSpellByFilter({
    tradition: 'arcane',
    level: '0'
});
console.log('Random arcane cantrip:', randomArcaneCantrip?.name);

// Get a random rare spell
const randomRareSpell = getRandomSpellByFilter({
    level: '1'
});
console.log('Random rare spell:', randomRareSpell?.name);

// Get multiple random spells
function getMultipleRandomSpells(count, filterOptions = {}) {
    const results = [];
    const maxAttempts = count * 2; // Prevent infinite loops
    let attempts = 0;

    while (results.length < count && attempts < maxAttempts) {
        const spell = getRandomSpellByFilter(filterOptions);
        if (spell && !results.find(s => s.name === spell.name)) {
            results.push(spell);
        }
        attempts++;
    }

    return results;
}

// Example: Get 3 random divine spells
const randomDivineSpells = getMultipleRandomSpells(3, { tradition: 'divine' });
console.log('Random divine spells:', randomDivineSpells.map(spell => spell.name));

function displaySpell(spell, elementId) {
    const spellDisplay = document.getElementById(elementId);
    if (!spellDisplay) {
        console.error(`Element with id ${elementId} not found`);
        return;
    }

    spellDisplay.innerHTML = `
        <div class="spell-card">
            <h2>${spell.name}</h2>
            <p><strong>Level:</strong> ${spell.rank}</p>
            <p><strong>Traditions:</strong> ${spell.tradition}</p>
            <p><strong>Traits:</strong> ${spell.trait}</p>
            <p><strong>Summary:</strong> ${spell.summary}</p>
            ${spell.range ? `<p><strong>Range:</strong> ${spell.range}</p>` : ''}
            ${spell.area ? `<p><strong>Area:</strong> ${spell.area}</p>` : ''}
            ${spell.duration ? `<p><strong>Duration:</strong> ${spell.duration}</p>` : ''}
            ${spell.defense ? `<p><strong>Defense:</strong> ${spell.defense}</p>` : ''}
        </div>
    `;
}

function populateLevelDropdown() {
    const levelSelect = document.getElementById('spellLevel');
    if (!levelSelect) return;

    // Get unique levels from spells
    const levels = new Set(spellsData.map(spell => 
        spell.rank.toLowerCase().includes('cantrip') ? '0' : spell.rank.replace(/[^\d]/g, '')
    ));
    
    // Sort levels numerically
    const sortedLevels = Array.from(levels).sort((a, b) => Number(a) - Number(b));
    
    // Add options for each level
    levelSelect.innerHTML = '<option value="all">All Levels</option>';
    sortedLevels.forEach(level => {
        const option = document.createElement('option');
        option.value = level;
        option.textContent = level === '0' ? 'Cantrip' : `Level ${level}`;
        levelSelect.appendChild(option);
    });
}

function populateTraditionDropdown() {
    const traditionSelect = document.getElementById('tradition');
    if (!traditionSelect) return;

    // Get unique traditions from spells
    const traditions = new Set();
    spellsData.forEach(spell => {
        spell.tradition.split(',').forEach(t => {
            const tradition = t.trim();
            if (tradition) traditions.add(tradition);
        });
    });
    
    // Sort traditions alphabetically
    const sortedTraditions = Array.from(traditions).sort();
    
    // Add options for each tradition
    traditionSelect.innerHTML = '<option value="all">All Traditions</option>';
    sortedTraditions.forEach(tradition => {
        const option = document.createElement('option');
        option.value = tradition.toLowerCase();
        option.textContent = tradition;
        traditionSelect.appendChild(option);
    });
}

// Simplified theme toggle
function toggleTheme() {
    console.log('Toggle theme clicked'); // Debug log
    const body = document.body;
    const themeToggle = document.getElementById('themeToggle');
    const isLightMode = body.classList.contains('light-theme');
    
    if (isLightMode) {
        console.log('Switching to dark theme'); // Debug log
        body.classList.remove('light-theme');
        themeToggle.textContent = '🌞 Light Mode';
        document.documentElement.style.backgroundColor = '#1a1a1a';
        document.documentElement.style.color = '#ffffff';
    } else {
        console.log('Switching to light theme'); // Debug log
        body.classList.add('light-theme');
        themeToggle.textContent = '🌑 Dark Mode';
        document.documentElement.style.backgroundColor = '#ffffff';
        document.documentElement.style.color = '#333333';
    }
    
    localStorage.setItem('theme', isLightMode ? 'dark' : 'light');
}

// Initialize theme
function initializeTheme() {
    const savedTheme = localStorage.getItem('theme');
    console.log('Initializing theme:', savedTheme); // Debug log
    
    if (savedTheme === 'light') {
        document.body.classList.add('light-theme');
        document.getElementById('themeToggle').textContent = '🌑 Dark Mode';
        document.documentElement.style.backgroundColor = '#ffffff';
        document.documentElement.style.color = '#333333';
    } else {
        document.body.classList.remove('light-theme');
        document.getElementById('themeToggle').textContent = '🌞 Light Mode';
        document.documentElement.style.backgroundColor = '#1a1a1a';
        document.documentElement.style.color = '#ffffff';
    }
}

function getSelectedValues(elementId) {
    const checkboxes = document.querySelectorAll(`#${elementId} input[type="checkbox"]:checked`);
    return Array.from(checkboxes).map(cb => cb.value);
}

// Update your DOMContentLoaded event listener
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded'); // Debug log
    initializeTheme();
    
    const themeToggle = document.getElementById('themeToggle');
    themeToggle.addEventListener('click', toggleTheme);

    // Populate dropdowns
    populateLevelDropdown();
    populateTraditionDropdown();
    
    // Add event listener to generate button
    const generateButton = document.getElementById('generateSpell');
    if (generateButton) {
        generateButton.addEventListener('click', () => {
            const spell = getRandomSpellByFilter();
            if (spell) {
                displaySpell(spell, 'randomSpellResult');
            } else {
                document.getElementById('randomSpellResult').innerHTML = 
                    '<p>No spells found matching the selected criteria.</p>';
            }
        });
    }

    // Generate an initial random spell
    const initialSpell = getRandomSpellByFilter();
    if (initialSpell) {
        displaySpell(initialSpell, 'randomSpellResult');
    }
});
