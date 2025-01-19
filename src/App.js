import React from 'react';
import './styles/RandomSpell.css';
import { generateRandomSpell } from './utils/spellGenerator';

function App() {
  const [level, setLevel] = React.useState('All Levels');
  const [tradition, setTradition] = React.useState('All Traditions');
  const [currentSpell, setCurrentSpell] = React.useState(null);

  const handleGenerateSpell = () => {
    const spell = generateRandomSpell(level, tradition);
    console.log('Generated spell:', spell);
    setCurrentSpell(spell);
  };

  return (
    <div className="App">
      <h1>Random Spell Generator</h1>
      <div className="controls">
        <select value={level} onChange={(e) => setLevel(e.target.value)}>
          <option value="All Levels">All Levels</option>
          <option value="0">Cantrip</option>
          <option value="1">Level 1</option>
          <option value="2">Level 2</option>
          {/* Add more levels as needed */}
        </select>

        <select value={tradition} onChange={(e) => setTradition(e.target.value)}>
          <option value="All Traditions">All Traditions</option>
          <option value="arcane">Arcane</option>
          <option value="divine">Divine</option>
          <option value="primal">Primal</option>
          <option value="occult">Occult</option>
        </select>

        <button onClick={handleGenerateSpell}>Generate Spell</button>
      </div>
      
      {currentSpell && (
        <div className="spell-display">
          <h2>{currentSpell.name}</h2>
          <div className="spell-details">
            <p><strong>Level:</strong> {currentSpell.level}</p>
            <p><strong>Traditions:</strong> {currentSpell.traditions.join(', ')}</p>
            <p><strong>Traits:</strong> {currentSpell.traits.join(', ')}</p>
            {currentSpell.summary && <p><strong>Summary:</strong> {currentSpell.summary}</p>}
          </div>
        </div>
      )}
    </div>
  );
}

export default App; 