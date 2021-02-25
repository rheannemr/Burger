const express = require('express');
const burger = require('../models/burger.js');
const router = express.Router();

router.get('/', (req, res) => {
    burger.selectAll(function(data) {
        var burgerObj = { burgers: data };
        console.log(burgerObj);
        res.render('index', burgerObj);
    })
});

router.post('/api/burgers', (req, res) => {
    burger.insertOne(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], (result) => {
        res.json({ id: result.insertId });
    });
});

router.put('/api/burgers/:id', (req, res) => {
    
    burger.updateOne(req.params.id,)
});

module.exports = router;