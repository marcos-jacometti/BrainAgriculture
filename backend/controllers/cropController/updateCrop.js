const express = require('express');
const router = express.Router();
const { client } = require('../../db/dbConnection');

router.put('/crop/:id', async (req, res) => {
    const { names } = req.body;
    const farmId = req.params.id;

    if (!Array.isArray(names) || names.length === 0) {
        return res.status(400).json({ error: "No crops provided" });
    }

    try {
        await client.query('BEGIN');

        await client.query('DELETE FROM crop WHERE farm_id = $1', [farmId]);

        for (const name of names) {
            await client.query(
                'INSERT INTO crop (name, farm_id) VALUES ($1, $2)',
                [name, farmId]
            );
        }

        await client.query('COMMIT');
        res.status(200).json({ message: 'Crops updated successfully' });
    } catch (error) {
        await client.query('ROLLBACK');
        console.error("Error updating crops:", error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;