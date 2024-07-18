const express = require('express');
const router = express.Router();
router.get('/', (req, res) => {
    res.send("List of Products");
})
router.get('/updateproducts/:id', (req, res) => {
    res.send("Update Products"+ req.params.id);
})

module.exports = router