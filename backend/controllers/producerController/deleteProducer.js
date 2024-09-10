const express = require('express');
const { client } = require('../../db/dbConnection');
const router = express.Router();

router.delete('/producer/:id', (req, res) => {
    const getId = req.params.id;

    const deleteQuery = 'DELETE FROM producers WHERE id = $1';

    client.query(deleteQuery, [getId], (err, results) => {
        if (err) {
            console.error('Error to delete', err);
            return res.status(500).send('Error deleting data');
        }

        if (results.rowCount === 0) {
            return res.status(404).send('Data not found');
        }

        res.send({ message: 'Data deleted' });
    });
});

module.exports = router;