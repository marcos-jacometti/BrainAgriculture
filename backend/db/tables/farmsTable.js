const dotenv = require('dotenv');
const envConfig = dotenv.config({ path: '../../.env' });
const { client } = require('../dbConnection');

async function createFarmTable() {
  try {
    const createTableQuery = `
      CREATE TABLE farm (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        state VARCHAR(50) NOT NULL,
        city VARCHAR(100) NOT NULL,
        totalarea DECIMAL(10, 2) NOT NULL,
        plantedarea DECIMAL(10, 2) NOT NULL,
        nousedarea DECIMAL(10, 2) NOT NULL,
        producer_id INT NOT NULL,
        CONSTRAINT fk_producer
          FOREIGN KEY(producer_id) 
          REFERENCES producers(id)
          ON DELETE CASCADE
      );
    `;

    await client.query(createTableQuery);
    console.log('Farms table was created.');

  } catch (err) {
    console.error('Error to create table:', err);
  } finally {
    await client.end();
  }
}

createFarmTable();