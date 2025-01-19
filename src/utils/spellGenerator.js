import { spellsData } from '../data/spellsData';

export function generateRandomSpell(filters) {
    console.log('Generating random spell with filters:', filters);
    console.log('Available spells:', spellsData);

    let filteredSpells = [...spellsData];

    // Filter by spell types
    if (filters.spellTypes && filters.spellTypes.length > 0) {
        filteredSpells = filteredSpells.filter(spell => {
            return filters.spellTypes.some(type => {
                switch (type) {
                    case 'cantrips':
                        return spell.spell_type === 'Cantrip';
                    case 'ranked':
                        return spell.spell_type === 'Spell';
                    case 'focus':
                        return spell.spell_type === 'Focus';
                    default:
                        return false;
                }
            });
        });
    }

    // Filter by level if specified
    if (filters.levels && filters.levels.length > 0) {
        filteredSpells = filteredSpells.filter(spell => 
            filters.levels.includes(spell.level.toString())
        );
    }

    // Filter by traditions if specified
    if (filters.traditions && filters.traditions.length > 0) {
        filteredSpells = filteredSpells.filter(spell => {
            if (filters.traditionLogic === 'AND') {
                return filters.traditions.every(tradition => 
                    spell.traditions.includes(tradition.toLowerCase())
                );
            } else {
                return filters.traditions.some(tradition => 
                    spell.traditions.includes(tradition.toLowerCase())
                );
            }
        });
    }

    console.log('Filtered spells:', filteredSpells);

    if (filteredSpells.length === 0) {
        return null;
    }

    const randomIndex = Math.floor(Math.random() * filteredSpells.length);
    return filteredSpells[randomIndex];
} 