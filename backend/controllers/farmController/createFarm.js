const express = require('express');
const { client } = require('../../db/dbConnection');
const router = express.Router();

router.post('/create', async (req, res) => {
  const { name, state, city, totalArea, plantedArea, noUsedArea, producer_id } = req.body;

  try {
    const result = await client.query(
      'INSERT INTO farm (name, state, city, totalArea, plantedArea, noUsedArea, producer_id) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
      [name, state, city, totalArea, plantedArea, noUsedArea, producer_id]
    );
    
    res.status(201).json({ message: 'Farm was created', farm: result.rows[0] });
  } catch (error) {
    console.error('Error to create farm', error);
    res.status(500).json({ error: 'Error creating farm' });
  }
});

module.exports = router;