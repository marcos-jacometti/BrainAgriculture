const express = require('express');
const router = express.Router();
const { client } = require('../../db/dbConnection');

router.get('/crop', async (req, res) => {
    const getCropQuery = `
        SELECT name, COUNT(*) as count
        FROM crop
        GROUP BY name
    `;

    try {
        const results = await client.query(getCropQuery);
        const crops = results.rows;

        const totalCount = crops.reduce((sum, crop) => sum + parseInt(crop.count), 0);

        const cropsWithPercentages = crops.map(crop => ({
            name: crop.name,
            percentage: ((crop.count / totalCount) * 100).toFixed(2)
        }));

        res.status(200).json(cropsWithPercentages);
    } catch (err) {
        console.error('Error fetching Crop', err);
        res.status(500).json({ error: 'Error fetching Crop' });
    }
});

module.exports = router;