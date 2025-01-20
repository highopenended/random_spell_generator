import { spellsData } from './data/spellsData.js';
import traitsData from './data/traitsData.js';
import './styles/base.css';
import './styles/SpellCard.css';
import './styles/Controls.css';
import './styles/FilterGroups.css';
import './styles/Traits.css';
import './styles/SearchCriteria.css';

// Convert traitsData array to lookup object
const traitsLookup = Object.fromEntries(
    traitsData.map(item => [item.Trait, item.Description])
);

// Get a random spell from the entire collection
function getRandomSpell() {
    const randomIndex = Math.floor(Math.random() * spellsData.length);
    return spellsData[randomIndex];
}

function canCastAtRank(spell, targetRank, includeHeightened) {
    // Convert targetRank to number (removing any non-digits)
    const targetRankNum = parseInt(targetRank.toString().replace(/\D/g, ''));
    
    // Get base rank number
    const baseRankNum = parseInt(spell.rank.replace(/\D/g, ''));
    
    // If the base rank matches target rank, it can always be cast at that level
    if (baseRankNum === targetRankNum) return true;

    if (!includeHeightened || !spell.heighten) return false;
    
    // If heighten is a number, it's an increment pattern
    if (typeof spell.heighten === 'number') {
        const increment = spell.heighten;
        const diff = targetRankNum - baseRankNum;
        return diff > 0 && diff % increment === 0;
    }
    
    // If heighten starts with "+", it's an increment pattern
    if (typeof spell.heighten === 'string' && spell.heighten.startsWith('+')) {
        const increment = parseInt(spell.heighten.substring(1));
        const diff = targetRankNum - baseRankNum;
        return diff > 0 && diff % increment === 0;
    }

    // Otherwise, it's a list of specific ranks
    const heightenLevels = spell.heighten.toString().split(',').map(h => 
        parseInt(h.trim().replace(/\D/g, ''))
    );

    return heightenLevels.includes(targetRankNum);
}


// Get a random spell filtered by specific criteria
function getRandomSpellByFilter() {
    const selectedRanks = getSelectedValues('spellLevels');
    const selectedTraditions = getSelectedValues('traditions');
    const selectedSpellTypes = getSelectedValues('spellTypes');
    const includeHeightened = document.getElementById('includeHeightened_spells')?.checked || false;
    const traditionLogic = document.querySelector('input[name="traditionLogic"]:checked')?.value || 'OR';
    
    // console.log('Filter criteria:', { 
    //     selectedRanks, 
    //     selectedTraditions, 
    //     traditionLogic, 
    //     includeHeightened
    // });

    let filteredSpells = spellsData.filter(spell => {
        // FILTER BY RANK
        if (selectedRanks.length > 0) {           
            if (!includeHeightened) {
                const baseRankNumber = spell.rank.replace(/[^\d]/g, '');
                if (!selectedRanks.includes(baseRankNumber)) return false;
            } else {     
                const canCastAtAnySelectedRank = selectedRanks.some(rank => 
                    canCastAtRank(spell, rank, includeHeightened)
                );
                if (!canCastAtAnySelectedRank) return false;
            }
        } 

        // FILTER BY TRADITIONS
        if (selectedTraditions.length > 0) {
            // If tradition is empty or just whitespace, pass the tradition check
            if (!spell.tradition || spell.tradition.trim() === '') {
                // Continue with other checks
            } else {
                const spellTraditions = spell.tradition.toLowerCase().split(',').map(t => t.trim().toUpperCase());
                const matchesTraditions = traditionLogic === 'AND' ? 
                    selectedTraditions.every(t => spellTraditions.includes(t.toUpperCase())) :
                    selectedTraditions.some(t => spellTraditions.includes(t.toUpperCase()));
                if (!matchesTraditions) return false;
            }
        }

        // FILTER BY SPELL TYPES
        if (selectedSpellTypes.length > 0) {
            const matchesType = selectedSpellTypes.some(t => 
                spell.spellType.toLowerCase().includes(t.toLowerCase())
            );
            if (!matchesType) return false;
        }

        return true;
    });

    console.log("filteredSpells:", filteredSpells.length);

    if (filteredSpells.length === 0) {
        return null;
    }
    const randomIndex = Math.floor(Math.random() * filteredSpells.length);

    // console.log("Selected spell:", filteredSpells[randomIndex]);
    return filteredSpells[randomIndex];
}


function displaySpell(spell, containerId) {
    const container = document.getElementById(containerId);
    if (!container) {
        console.error('Container not found:', containerId);
        return;
    }

    // console.log('Displaying spell:', spell); // Debug log

    // Function to format heighten value to preserve "+"
    function formatHeighten(heighten) {
        if (!heighten) return '';
        if (typeof heighten === 'number') return `+${heighten}`;
        return heighten.toString();
    }

    // Function to convert action text to number
    function formatActions(actionText) {
        if (!actionText) return '';
        
        // If actionText is an array, take the first element
        if (Array.isArray(actionText)) {
            actionText = actionText[0];
        }
        
        // Convert to string and lowercase for consistency
        actionText = actionText.toString().toLowerCase();
        
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

        Object.entries(wordToNumber).forEach(([word, number]) => {
            actionText = actionText.replace(word, number);
        });

        return actionText;
    }

    // Split traits into array and filter out empty strings
    const traits = spell.trait ? spell.trait.split(',').map(t => t.trim()).filter(t => t) : [];

    try {
        container.innerHTML = `
            <div class="spell-card">
                <div class="spell-header">
                    <div class="spell-title">
                        <h2>${spell.name || 'Unnamed Spell'}</h2>
                        ${spell.actions ? `<span class="spell-actions">[${formatActions(spell.actions)}]</span>` : ''}
                    </div>
                    <span class="spell-rank">${(() => {
                        const rankNumber = spell.rank?.replace(/[^\d]/g, '') || '0';
                        if (spell.spellType === 'Cantrip') {
                            return `Cantrip ${rankNumber}`;
                        } else if (spell.trait?.includes('Focus')) {
                            return `Focus ${rankNumber}`;
                        } else {
                            return `Spell ${rankNumber}`;
                        }
                    })()}</span>
                </div>
                ${traits.length > 0 ? 
                    `<div class="trait-container">
                        ${traits.map(trait => `
                            <span class="trait" data-trait="${trait}" data-tooltip="${traitsLookup[trait] || 'No description available'}">
                                ${trait}
                            </span>
                        `).join('')}
                    </div>` 
                    : ''
                }
                <div class="spell-details">
                    ${spell.heighten ? `<p><strong>Heighten:</strong> ${formatHeighten(spell.heighten)}</p>` : ''}
                    <p><strong>Traditions:</strong> ${spell.tradition || '-'}</p>
                    ${spell.rarity && spell.rarity !== 'Common' ? `<p><strong>Rarity:</strong> ${spell.rarity}</p>` : ''}
                    ${spell.spellType ? `<p><strong>Spell Type:</strong> ${spell.spellType}</p>` : ''}
                    ${spell.trigger ? `<p><strong>Trigger:</strong> ${spell.trigger}</p>` : ''}
                    ${spell.target ? `<p><strong>Target:</strong> ${spell.target}</p>` : ''}
                    ${spell.range ? `<p><strong>Range:</strong> ${spell.range}</p>` : ''}
                    ${spell.area ? `<p><strong>Area:</strong> ${spell.area}</p>` : ''}
                    ${spell.duration ? `<p><strong>Duration:</strong> ${spell.duration}</p>` : ''}
                    ${spell.defense ? `<p><strong>Defense:</strong> ${spell.defense}</p>` : ''}
                    ${spell.summary ? `<p><strong>Summary:</strong> ${spell.summary}</p>` : ''}
                    <p class="spell-link"><a href="${spell.link}" target="_blank">View Full Details ↗</a></p>
                </div>
            </div>
        `;
    } catch (error) {
        console.error('Error displaying spell:', error);
        container.innerHTML = '<p>Error displaying spell. Please try again.</p>';
    }
}

// Helper function to add ordinal suffixes (1st, 2nd, 3rd, etc.)
function getOrdinalSuffix(num) {
    const j = num % 10;
    const k = num % 100;
    if (j == 1 && k != 11) return 'st';
    if (j == 2 && k != 12) return 'nd';
    if (j == 3 && k != 13) return 'rd';
    return 'th';
}


// Simplified theme toggle
function toggleTheme() {
    const body = document.body;
    const themeToggle = document.getElementById('themeToggle');
    const isLightMode = body.classList.contains('light-theme');
    
    if (isLightMode) {
        body.classList.remove('light-theme');
        themeToggle.textContent = '🌞 Light Mode';
        document.documentElement.style.backgroundColor = '#1a1a1a';
        document.documentElement.style.color = '#ffffff';
    } else {
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
    // console.log('Initializing theme:', savedTheme); // Debug log
    
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

function updateSearchCriteria() {
    const selectedRanks = getSelectedValues('spellLevels');
    const selectedTraditions = getSelectedValues('traditions');
    const selectedSpellTypes = getSelectedValues('spellTypes');
    const includeHeightened = document.getElementById('includeHeightened_spells')?.checked || false;
    const traditionLogic = document.querySelector('input[name="traditionLogic"]:checked')?.value || 'OR';
    
    const criteriaText = `
        <div class="search-criteria-box">
            <div class="criteria-header">Current Search Criteria:</div>
            <div class="criteria-details">
                <div class="criteria-row">
                    <strong>Ranks:</strong> ${selectedRanks.length ? selectedRanks.join(', ') : 'Any'}
                </div>
                <div class="criteria-row">
                    <strong>Traditions:</strong> ${selectedTraditions.length ? 
                        `${selectedTraditions.join(', ')} (${traditionLogic})` : 'Any'}
                </div>
                <div class="criteria-row">
                    <strong>Types:</strong> ${selectedSpellTypes.length ? selectedSpellTypes.join(', ') : 'Any'}
                </div>
                ${includeHeightened ? 
                    `<div class="criteria-row">
                        <strong>Including Heightened Spells</strong>
                    </div>` : 
                    ''}
            </div>
        </div>
    `;
    
    // Insert criteria before the spell result
    const resultDiv = document.getElementById('randomSpellResult');
    let criteriaDiv = document.getElementById('searchCriteria');
    
    if (!criteriaDiv) {
        criteriaDiv = document.createElement('div');
        criteriaDiv.id = 'searchCriteria';
        resultDiv.parentNode.insertBefore(criteriaDiv, resultDiv);
    }
    
    criteriaDiv.innerHTML = criteriaText;
}

// Update your DOMContentLoaded event listener
document.addEventListener('DOMContentLoaded', () => {
    // console.log('DOM loaded'); // Debug log
    initializeTheme();
    
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }

    // Add event listener to generate button
    const generateButton = document.getElementById('generateSpell');
    if (generateButton) {
        generateButton.addEventListener('click', () => {
            try {
                const spell = getRandomSpellByFilter();
                console.log('Generated spell:', spell); // Debug log
                if (spell) {
                    displaySpell(spell, 'randomSpellResult');
                } else {
                    document.getElementById('randomSpellResult').innerHTML = 
                        '<p>No spells found matching the selected criteria.</p>';
                }
            } catch (error) {
                console.error('Error generating spell:', error);
                document.getElementById('randomSpellResult').innerHTML = 
                    '<p>Error generating spell. Please try again.</p>';
            }
        });
    } else {
        console.error('Generate button not found');
    }

    // Generate an initial random spell
    try {
        const initialSpell = getRandomSpellByFilter();
        // console.log('Initial spell:', initialSpell); // Debug log
        if (initialSpell) {
            displaySpell(initialSpell, 'randomSpellResult');
        }
    } catch (error) {
        console.error('Error generating initial spell:', error);
    }

    // Add event listeners for all filter changes
    ['spellLevels', 'traditions', 'spellTypes'].forEach(id => {
        const container = document.getElementById(id);
        if (container) {
            container.addEventListener('change', updateSearchCriteria);
        }
    });

    // Add listeners for heightened spells and tradition logic
    document.getElementById('includeHeightened_spells')?.addEventListener('change', updateSearchCriteria);
    document.querySelectorAll('input[name="traditionLogic"]').forEach(radio => {
        radio.addEventListener('change', updateSearchCriteria);
    });

    // Initial criteria display
    updateSearchCriteria();
});
