const dotenv = require('dotenv');
const envConfig = dotenv.config({ path: '../../.env' });
const { client } = require('../dbConnection');

async function createCropTable() {
  try {
    const createTableQuery = `
      CREATE TABLE crop (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        farm_id INT NOT NULL,
        CONSTRAINT fk_farm
          FOREIGN KEY(farm_id) 
          REFERENCES farm(id)
          ON DELETE CASCADE
      );
    `;

    await client.query(createTableQuery);
    console.log('Crop table was createad.');

  } catch (err) {
    console.error('Error to create table:', err);
  } finally {
    await client.end();
  }
}

createCropTable();