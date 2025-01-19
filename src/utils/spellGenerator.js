import { spellsData } from '../data/spellsData';

export function generateRandomSpell(level = 'All Levels', tradition = 'All Traditions') {
    console.log('Generating random spell with:', { level, tradition });
    console.log('Available spells:', spellsData);

    let filteredSpells = [...spellsData];

    // Filter by level if specified
    if (level !== 'All Levels') {
        filteredSpells = filteredSpells.filter(spell => 
            spell.level === parseInt(level)
        );
    }

    // Filter by tradition if specified
    if (tradition !== 'All Traditions') {
        filteredSpells = filteredSpells.filter(spell => 
            spell.traditions.includes(tradition.toLowerCase())
        );
    }

    console.log('Filtered spells:', filteredSpells);

    if (filteredSpells.length === 0) {
        return null;
    }

    const randomIndex = Math.floor(Math.random() * filteredSpells.length);
    return filteredSpells[randomIndex];
} 