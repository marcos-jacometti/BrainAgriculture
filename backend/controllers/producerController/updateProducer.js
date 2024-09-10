const express = require('express');
const router = express.Router();
const { client } = require('../../db/dbConnection');

router.put('/producer/:id', async (req, res) => {
    const { id } = req.params;
    const { name, codeNumber } = req.body;

    try {
        const result = await client.query(
            'UPDATE producers SET name = $1, codeNumber = $2 WHERE id = $3 RETURNING *',
            [name, codeNumber, id]
        );
        if (result.rows.length > 0) {
            res.status(200).json({ message: 'Producer updated successfully', producer: result.rows[0] });
        } else {
            res.status(404).json({ error: 'Producer not found' });
        }
    } catch (error) {
        console.error('Error updating producer', error);
        res.status(500).json({ error: 'Error updating producer' });
    }
});

module.exports = router;