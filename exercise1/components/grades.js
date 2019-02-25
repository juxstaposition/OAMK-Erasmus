const express = require('express');
const data = require('../dataStore');
let router = express.Router();

router.get('/',(req,res) => {
    res.json(data.getAllGrades());
    console.log("get grades works");
});

module.exports = router;