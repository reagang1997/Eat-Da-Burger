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
    })
})

module.exports = router;
