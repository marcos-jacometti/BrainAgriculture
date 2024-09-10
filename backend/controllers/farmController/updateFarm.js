const express = require('express');
const router = express.Router();
const { client } = require('../../db/dbConnection');

router.put('/farm/:id', async (req, res) => {
    const { name, city, state, totalArea, plantedArea, noUsedArea } = req.body;
    const farmId = req.params.id;

    try {
        const result = await client.query(
            `UPDATE farm 
             SET name = $1, city = $2, state = $3, totalArea = $4, plantedArea = $5, noUsedArea = $6 
             WHERE id = $7 RETURNING *`,
            [name, city, state, totalArea, plantedArea, noUsedArea, farmId]
        );

        if (result.rows.length > 0) {
            res.status(200).json({ message: '', farm: result.rows[0] });
        } else {
            res.status(404).json({ error: 'Farm not found' });
        }
    } catch (error) {
        console.error('Error to update farm', error);
        res.status(500).json({ error: 'Error' });
    }
});

module.exports = router;