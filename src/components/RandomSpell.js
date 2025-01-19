import React, { useState, useEffect } from 'react';
import { spellsData } from '../data/spellsData.js';

function RandomSpell() {
    const [spells, setSpells] = useState([]);
    const [filterOptions, setFilterOptions] = useState({
        tradition: '',
        rarity: '',
        trait: '',
        rank: ''
    });
    const [spellCount, setSpellCount] = useState(1);

    // Debug log to check if spellsData is imported
    useEffect(() => {
        console.log('SpellsData:', spellsData);
        if (!spellsData || !Array.isArray(spellsData)) {
            console.error('SpellsData is not an array or is undefined');
            return;
        }
        console.log('Number of spells available:', spellsData.length);
    }, []);

    const getMultipleRandomSpells = (count, filterOptions = {}) => {
        console.log('Getting random spells with count:', count);
        console.log('Filter options:', filterOptions);
        
        if (!spellsData || !Array.isArray(spellsData)) {
            console.error('No spell data available');
            return [];
        }

        // Simplified version for debugging
        const randomSpells = [];
        for (let i = 0; i < count; i++) {
            const randomIndex = Math.floor(Math.random() * spellsData.length);
            randomSpells.push(spellsData[randomIndex]);
        }
        
        console.log('Selected spells:', randomSpells);
        return randomSpells;
    };

    const handleGenerateSpells = () => {
        console.log('Generate button clicked');
        const randomSpells = getMultipleRandomSpells(spellCount, filterOptions);
        setSpells(randomSpells);
    };

    // Initial spell generation
    useEffect(() => {
        handleGenerateSpells();
    }, []); // Empty dependency array for initial load only

    return (
        <div className="random-spell-container">
            <div className="filter-controls">
                <label>
                    Tradition:
                    <select 
                        value={filterOptions.tradition}
                        onChange={(e) => setFilterOptions({...filterOptions, tradition: e.target.value})}
                    >
                        <option value="">Any Tradition</option>
                        <option value="arcane">Arcane</option>
                        <option value="divine">Divine</option>
                        <option value="primal">Primal</option>
                        <option value="occult">Occult</option>
                    </select>
                </label>

                <label>
                    Rarity:
                    <select 
                        value={filterOptions.rarity}
                        onChange={(e) => setFilterOptions({...filterOptions, rarity: e.target.value})}
                    >
                        <option value="">Any Rarity</option>
                        <option value="common">Common</option>
                        <option value="uncommon">Uncommon</option>
                        <option value="rare">Rare</option>
                    </select>
                </label>

                <label>
                    Number of Spells:
                    <input 
                        type="number" 
                        min="1" 
                        max="10" 
                        value={spellCount}
                        onChange={(e) => setSpellCount(Math.max(1, Math.min(10, parseInt(e.target.value) || 1)))}
                    />
                </label>

                <button onClick={handleGenerateSpells}>Generate New Spells</button>
            </div>

            <div className="spells-display">
                {spells && spells.length > 0 ? (
                    spells.map((spell, index) => (
                        <div key={index} className="spell-card">
                            <h3>{spell.name || 'Unnamed Spell'}</h3>
                            <pre>{JSON.stringify(spell, null, 2)}</pre>
                        </div>
                    ))
                ) : (
                    <p>No spells available. Check console for debugging information.</p>
                )}
            </div>
        </div>
    );
}

export default RandomSpell; 