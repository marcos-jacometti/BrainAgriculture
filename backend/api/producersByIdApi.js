const express = require('express');
const router = express.Router();
const { client } = require('../db/dbConnection');

router.get('/:producerId', async (req, res) => {
    const producerId = parseInt(req.params.producerId, 10);

    if (isNaN(producerId)) {
        return res.status(400).json({ message: "ID not found" });
    }

    try {
        const query = 'SELECT * FROM producers WHERE id = $1';
        const result = await client.query(query, [producerId]);

        if (result.rows.length === 0) {
            return res.status(404).json({ message: "Producer not found" });
        }

        res.json(result.rows[0]);
    } catch (error) {
        console.error('Error to get producer:', error);
        res.status(500).json({ message: "Error" });
    }
});

module.exports = router;