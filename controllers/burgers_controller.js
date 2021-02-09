const express = require('express');
const router = express.Router();

const burger = require('../models/burger.js');

//create all routs
router.get('/', (req, res) => {
    burger.all((data) => {
        const obj = {
            burgers: data
        };
        console.log(obj);
        res.render('index', obj);
    })
})

router.put('/api/devour/:id', (req, res) => {
    const condition = `id = ${req.params.id}`;
    console.log('condition', condition );

    burger.updateOne(
        {
            devoured: req.body.devoured
        },
        condition,
        (result) => {
            if (result.changedRows === 0) {
                // If no rows were changed, then the ID must not exist, so 404
                return res.status(404).end();
              }
              res.status(200).end();
        }
    );
})

module.exports = router;
