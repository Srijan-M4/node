const express = require('express');

const Category = require('../models/category');
const router = express.Router();
router.route('/')
.get((req, res, next)=>{
    Category.find({})
    .then((categories)=>{
        res.json(categories);
    })
    .catch(next);
})

.post ((req, res, next)=>{
    Category.create(req.body)
    .then((category)=>{
        res.statusCode = 201;
        res.json(category);
    })
    .catch(next);
})

.put ((req, res)=>{
    res.statusCode = 405;
    res.json({message: "method not allowed"});
})

.delete((req,res,next)=>{
    Category.deleteMany({})
    .then ((reply)=>{
        res.json(reply);
    })
    .catch(next);
});

router.route(':/id')
.get((req, res, next)=>{
    
})

module.exports = router;