const { Client } = require('pg');
const dotenv = require('dotenv');
const envConfig = dotenv.config({ path: '../.env' });

const client = new Client({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
});

const createDatabaseQuery = `CREATE DATABASE ${process.env.DB_NAME}`;

const createDatabase = async () => {
  try {
    await client.connect();
    await client.query(createDatabaseQuery);
    console.log(`Database ${process.env.DB_NAME} created or already exists.`);
  } catch (err) {
    console.error('Error creating database:', err);
  } finally {
    await client.end();
  }
};

createDatabase();