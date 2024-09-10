const express = require('express');
const router = express.Router();
const { client } = require('../db/dbConnection');

router.get('/producers', async (req, res) => {
    const getProducersQuery = `
        SELECT * FROM producers
    `;

    try {
        const results = await client.query(getProducersQuery);
        res.status(200).json(results.rows);
    } catch (err) {
        console.error('Error fetching producers', err);
        res.status(500).json({ error: 'Error fetching producers' });
    }
});

module.exports = router;