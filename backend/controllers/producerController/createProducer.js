const express = require('express');
const { client } = require('../../db/dbConnection');
const router = express.Router();

router.post('/create', async (req, res) => {
  const { name, codeNumber } = req.body;

  try {
    const result = await client.query(
      'INSERT INTO producers (name, codeNumber) VALUES ($1, $2) RETURNING id',
      [name, codeNumber]
    );
    
    const producerId = result.rows[0].id;
    res.status(201).json({ id: producerId, message: 'Producer created' });
  } catch (error) {
    console.error('Error creating producer', error);
    res.status(500).json({ error: 'Error creating producer' });
  }
});

module.exports = router;