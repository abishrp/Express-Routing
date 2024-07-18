const express = require('express');
const router = express.Router();
router.get('/', (req, res) => {
    res.send("List of Items");
})

//req.params
//dynamic routes
router.get('/updateitems/:id', (req, res) => {
    res.send("Update Items"+req.params.id);
})
//regEx
router.get('/searchitems/:id([0-9 A-Z a-z]{4})/date/:value', (req, res) => {
    res.send("Update Items"+req.params.id+ "date"+req.params.value);
})

//wild card routes
router.get('*', (req, res) => {
    res.send("URL Not Found");
})


module.exports = router