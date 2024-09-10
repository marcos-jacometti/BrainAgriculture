const express = require('express');
const { client } = require('../../db/dbConnection');
const router = express.Router();

router.post('/create', async (req, res) => {
  const { name, farm_id } = req.body;

  try {
    const result = await client.query(
      'INSERT INTO crop (name, farm_id) VALUES ($1, $2) RETURNING *',
      [name, farm_id]
    );

    res.status(201).json({ message: 'Crop was created', crop: result.rows[0] });
  } catch (error) {
    console.error('Error creating crop', error);
    res.status(500).json({ error: 'Error creating crop' });
  }
});

module.exports = router;