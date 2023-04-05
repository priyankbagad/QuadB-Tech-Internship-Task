
const express = require("express");
const ejs = require("ejs");
const Basic = require("../models/basicModels.js");
const {
  getDataController
} = require("../controllers/basicCtrl");

//router object
const router = express.Router();

//route
router.get("/hodinfo", getDataController);
router.get("/fetchall",async(req,res)=>{
  const ans = await Basic.find({});
  var final_op = Object.values(ans);
  //console.log(final_op)
    res.render('home', {answers:final_op})
  //ans.forEach(function(a){
        //console.log(a.last);
    //});
});

module.exports = router;
