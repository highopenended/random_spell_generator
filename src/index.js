import { spellsData } from './data/spellsData.js';
import traitsData from './data/traitsData.js';

// Get a random spell from the entire collection
function getRandomSpell() {
    const randomIndex = Math.floor(Math.random() * spellsData.length);
    return spellsData[randomIndex];
}

function canCastAtRank(spell, targetRank) {
    // Special handling for cantrips
    const isCantrip = spell.spell_type === 'Cantrip';
    const spellBaseRank = isCantrip ? 'cantrip' : 
                         parseInt(spell.rank.replace(/[^\d]/g, ''));
    
    // If targeting cantrip rank, only return true if it's a cantrip
    if (targetRank === 'cantrip') {
        return isCantrip;
    }

    const targetRankNum = parseInt(targetRank);

    // If it's exactly the rank we want (and not a cantrip unless we're including them)
    if (!isCantrip && spellBaseRank === targetRankNum) {
        return true;
    }

    // If we don't want heightened spells or there's no heightening, return false
    if (!spell.heighten || spell.heighten === "") {
        return false;
    }

    // Don't include heightened cantrips unless specifically allowed
    if (isCantrip && !document.getElementById('includeCantrips').checked) {
        return false;
    }

    // Handle "+N" heightening
    if (spell.heighten.includes('+')) {
        const increment = parseInt(spell.heighten.replace(/[^\d]/g, ''));
        // For cantrips, start at 1st rank
        let currentRank = isCantrip ? 1 : spellBaseRank + increment;
        while (currentRank <= 10) {
            if (currentRank === targetRankNum) {
                return true;
            }
            currentRank += increment;
        }
    }
    // Handle specific rank heightening
    else {
        const heightenedRanks = spell.heighten.split(',').map(r => {
            return parseInt(r.trim().replace(/[^\d]/g, ''));
        });
        if (heightenedRanks.includes(targetRankNum)) {
            return true;
        }
    }

    return false;
}

// Get a random spell filtered by specific criteria
function getRandomSpellByFilter() {
    const selectedRanks = getSelectedValues('spellLevels');
    const selectedTraditions = getSelectedValues('traditions');
    const traditionLogic = document.querySelector('input[name="traditionLogic"]:checked')?.value || 'OR';
    const includeHeightened = document.getElementById('includeHeightened')?.checked || false;
    const includeCantrips = document.getElementById('includeCantrips')?.checked || false;
    
    console.log('Filter criteria:', { 
        selectedRanks, 
        selectedTraditions, 
        traditionLogic, 
        includeHeightened,
        includeCantrips 
    });

    let filteredSpells = spellsData.filter(spell => {
        // Filter by rank
        if (selectedRanks.length > 0) {
            const isCantrip = spell.spell_type === 'Cantrip';
            
            // If we're not including heightened spells, just check the base rank
            if (!includeHeightened) {
                if (isCantrip) {
                    return selectedRanks.includes('cantrip');
                } else {
                    const baseRankNumber = spell.rank.replace(/[^\d]/g, '');
                    return selectedRanks.includes(baseRankNumber);
                }
            }
            // If we are including heightened spells, check if it can be cast at any selected rank
            else {
                const canCastAtAnySelectedRank = selectedRanks.some(rank => 
                    canCastAtRank(spell, rank)
                );
                if (!canCastAtAnySelectedRank) {
                    return false;
                }
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

function displaySpell(spell, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    // Function to convert action text to number
    function formatActions(actionText) {
        if (!actionText) return '';
        
        // Convert word numbers to digits
        const wordToNumber = {
            'one': '1',
            'two': '2',
            'three': '3',
            'free': 'Free',
            'reaction': 'Reaction',
            'minute': 'Minute',
            'minutes': 'Minutes',
            'hour': 'Hour',
            'hours': 'Hours'
        };

        let formattedText = actionText.toLowerCase();
        Object.entries(wordToNumber).forEach(([word, number]) => {
            formattedText = formattedText.replace(word, number);
        });

        // Return without brackets
        return formattedText;
    }

    // Split traits into array and filter out empty strings
    const traits = spell.trait ? spell.trait.split(',').map(t => t.trim()).filter(t => t) : [];

    // Find trait descriptions from traitsData
    const traitsWithDescriptions = traits.map(traitName => {
        const traitData = traitsData.find(t => t.Trait.toLowerCase() === traitName.toLowerCase());
        return {
            name: traitName,
            description: traitData?.Description || 'No description available'
        };
    });

    container.innerHTML = `
        <div class="spell-card">
            <div class="spell-header">
                <div class="spell-title">
                    <h2>${spell.name}</h2>
                    ${spell.actions ? `<span class="spell-actions">[${formatActions(spell.actions)}]</span>` : ''}
                </div>
                <span class="spell-rank">${spell.rank}</span>
            </div>
            ${traitsWithDescriptions.length > 0 ? 
                `<div class="trait-container">
                    ${traitsWithDescriptions.map(trait => `
                        <span class="trait" 
                            data-tooltip="${trait.description}"
                            data-trait="${trait.name}">
                            ${trait.name}
                        </span>
                    `).join('')}
                </div>` 
                : ''
            }
            <div class="spell-details">
                ${spell.heighten ? `<p><strong>Heighten:</strong> ${spell.heighten}</p>` : ''}
                <p><strong>Traditions:</strong> ${spell.tradition || '-'}</p>
                ${spell.rarity && spell.rarity !== 'Common' ? `<p><strong>Rarity:</strong> ${spell.rarity}</p>` : ''}
                ${spell.spell_type ? `<p><strong>Spell Type:</strong> ${spell.spell_type}</p>` : ''}
                ${spell.trigger ? `<p><strong>Trigger:</strong> ${spell.trigger}</p>` : ''}
                ${spell.target ? `<p><strong>Target:</strong> ${spell.target}</p>` : ''}
                ${spell.range ? `<p><strong>Range:</strong> ${spell.range}</p>` : ''}
                ${spell.area ? `<p><strong>Area:</strong> ${spell.area}</p>` : ''}
                ${spell.duration ? `<p><strong>Duration:</strong> ${spell.duration}</p>` : ''}
                ${spell.defense ? `<p><strong>Defense:</strong> ${spell.defense}</p>` : ''}
                ${spell.summary ? `<p><strong>Summary:</strong> ${spell.summary}</p>` : ''}
                <p class="spell-link"><a href="${spell.Link}" target="_blank">View Full Details ↗</a></p>
            </div>
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
    const container = document.getElementById(elementId);
    if (!container) return [];
    
    const checkboxes = container.querySelectorAll('input[type="checkbox"]:checked');
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
