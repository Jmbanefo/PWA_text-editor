import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database successfully created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => console.log('putDb to the database');
  const myDb = await initdb(); 
  const tx = myDb.transaction('jate', 'readwrite'); 
  const stored = tx.objectStore('jate'); 
  await stored.put({ value: content, id: 1}); 
  await tx.done; 
  console.log("Successfully added to the database");


// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => console.error('Get content from database');
  const teDb = await initdb(); 
  const tx = teDb.transaction('jate', 'readonly'); 
  const stash = tx.objectStore('jate'); 
  const get = await stash.getAll(); 
  await tx.done; 
  console.log("Displayed is all the content from the databade", stash);
  return get; 


initdb();
