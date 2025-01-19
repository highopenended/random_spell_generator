import { db } from '../firebase-config.js';
import { collection, writeBatch, doc, getDocs, query, limit, deleteDoc } from 'firebase/firestore';

// Function to clear all existing spells
async function clearSpellCollection() {
    try {
        console.log('Starting to clear spell collection...');
        const spellsRef = collection(db, 'spells');
        const snapshot = await getDocs(spellsRef);
        
        if (snapshot.empty) {
            console.log('Collection is already empty');
            return;
        }

        console.log(`Found ${snapshot.size} documents to delete`);
        
        const promises = snapshot.docs.map(doc => deleteDoc(doc.ref));
        await Promise.all(promises);
        
        console.log('Successfully cleared all documents');
    } catch (error) {
        console.error('Error clearing collection:', error);
        throw error;
    }
}

function cleanSpellData(spell) {
  console.log('Cleaning spell:', spell.Name); // Debug log
  return {
    name: spell.Name,
    source: spell.Source.replace('', ' '),
    traditions: spell.Tradition.split(',').map(t => t.trim().replace('', '')),
    rarity: spell.Rarity,
    traits: spell.Trait.split(',').map(t => t.trim().replace('', '')),
    spellType: spell["Spell Type"],
    level: spell.Rank.toLowerCase().includes('cantrip') ? 0 : parseInt(spell.Rank),
    heighten: spell.Heighten || null,
    summary: spell.Summary,
    actions: Array.isArray(spell.Actions) ? spell.Actions[0] : null,
    trigger: spell.Trigger || null,
    target: spell.Target || null,
    range: spell.Range || null,
    area: spell.Area || null,
    duration: spell.Duration || null,
    defense: spell.Defense || null
  };
}

export async function uploadSpells(spellsData) {
  console.log('Upload function called with', spellsData.length, 'spells'); // Debug log
  
  if (!spellsData || spellsData.length === 0) {
    console.error('No spell data provided');
    return;
  }

  try {
    const batchSize = 400;
    let currentBatch = writeBatch(db);
    const spellsRef = collection(db, 'spells');
    let operationCount = 0;
    let totalUploaded = 0;

    for (const spell of spellsData) {
      const cleanedSpell = cleanSpellData(spell);
      const docRef = doc(spellsRef);
      currentBatch.set(docRef, cleanedSpell);
      operationCount++;
      totalUploaded++;

      if (operationCount === batchSize) {
        console.log(`Committing batch of ${batchSize} spells...`);
        await currentBatch.commit();
        currentBatch = writeBatch(db);
        operationCount = 0;
      }
    }

    // Commit any remaining spells
    if (operationCount > 0) {
      console.log(`Committing final batch of ${operationCount} spells...`);
      await currentBatch.commit();
    }

    console.log(`Upload complete! Total spells uploaded: ${totalUploaded}`);
    return totalUploaded;
  } catch (error) {
    console.error('Error uploading spells:', error);
    throw error;
  }
}