const express = require('express');
const router = express.Router();

router.post('/signup',(req, res, next)=>{
    res.send("User sign up path");
});

module.exports = router;