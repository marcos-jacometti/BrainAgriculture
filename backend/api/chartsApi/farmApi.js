const express = require('express');
const router = express.Router();
const { client } = require('../../db/dbConnection');

router.get('/farm', async (req, res) => {
    const getFarmQuery = `
        SELECT * FROM farm
    `;

    try {
        const results = await client.query(getFarmQuery);
        res.status(200).json(results.rows);
    } catch (err) {
        console.error('Error fetching farm', err);
        res.status(500).json({ error: 'Error fetching farm' });
    }
});

module.exports = router;