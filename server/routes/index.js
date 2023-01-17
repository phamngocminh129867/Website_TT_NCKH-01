const { json } = require('express');
var express = require('express');
var jwt = require('jsonwebtoken');
var router = express.Router();
const sql = require("../dboperation");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


//test connection
router.get('/testconnect', function(req, res, next) {
  sql.getdata();
  res.send('respond with a resource');
});


router.post("/getdata_withQuery", function (req, res, next) {
  const Ac=req.body;
  // Ac.name =
  sql.getdata_withQuery()
  .then((result) => {
    var Data = result[0][0];
    // console.log(typeof Data);
    // res.json(result);
    const token = jwt.sign({
      tk:Data.TK,
    },'mk');
    // jwt.verify(token
    if (Data.TK === Ac.name && Data.MK === Ac.pass ){
      res.json({
        text: "success",
        token: token,
      });
    }else {
      res.json({
        text: "fail",
      });
    }
    // console.log(result[0][0]);
  })
  .catch((err)=>{
    console.log(err);
  }); 
});


module.exports = router;
