var express = require('express');
var router = express.Router();
router.get('/',(req,res,next)=>{
    console.e("In app file");
    return next();
})
module.exports = router;