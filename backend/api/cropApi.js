const express = require('express');
const router = express.Router();
const { client } = require('../db/dbConnection');

router.get('/:farmId', async (req, res) => {
    const farmId = parseInt(req.params.farmId, 10);

    if (isNaN(farmId)) {
        return res.status(400).json({ message: "ID not found" });
    }

    try {
        const query = 'SELECT * FROM crop WHERE farm_id = $1';
        const result = await client.query(query, [farmId]);

        if (result.rows.length === 0) {
            return res.status(404).json({ message: "No crops found" });
        }

        res.json(result.rows);
    } catch (error) {
        console.error('Error to get crops:', error);
        res.status(500).json({ message: "Error" });
    }
});

module.exports = router;