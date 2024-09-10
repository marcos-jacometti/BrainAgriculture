const express = require('express');
const router = express.Router();
const { client } = require('../../db/dbConnection');

router.put('/crop/:id', async (req, res) => {
    const { name } = req.body;
    const farmId = req.params.id;

    try {
        await client.query('BEGIN');

        await client.query('DELETE FROM crop WHERE farm_id = $1', [farmId]);

        const result = await client.query(
            'INSERT INTO crop (name, farm_id) VALUES ($1, $2) RETURNING *',
            [name, farmId]
        );

        await client.query('COMMIT');

        if (result.rows.length > 0) {
            res.status(200).json({ message: 'Crop updated successfully', crop: result.rows[0] });
        } else {
            res.status(404).json({ error: 'Crop not found' });
        }
    } catch (error) {
        await client.query('ROLLBACK');
        console.error("Error updating crop:", error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;