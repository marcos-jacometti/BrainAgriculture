const dotenv = require('dotenv');
const envConfig = dotenv.config({ path: '../../.env' });
const { client } = require('../dbConnection');

async function createProducersTable() {
  try {
    const createTableQuery = `
      CREATE TABLE producers (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        codeNumber TEXT NOT NULL
      );
    `;

    await client.query(createTableQuery);
    console.log('Producers table was created.');

  } catch (err) {
    console.error('Error to create table:', err);
  } finally {
    await client.end();
  }
}

createProducersTable();