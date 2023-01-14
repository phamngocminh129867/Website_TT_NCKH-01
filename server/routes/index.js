const { json } = require('express');
var express = require('express');
var router = express.Router();
// const router = express.Router(); 
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


router.get("/getdata_withQuery", function (req, res, next) {
  sql.getdata_withQuery().then((result) => {
    res.json(result[0]);
  });
});


module.exports = router;
