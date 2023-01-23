const { json } = require('express');
var express = require('express');
// var jwt = require('jsonwebtoken');
var router = express.Router();
const sql = require("../dboperation");
var config = require("../dbconfig");
var {pool} = require("../dbconfig");
var mssql = require("mssql");
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
router.post("/getdata_register", async(req, res)=> {
  var dateOfBirth = new Date(req.body.ngaysinh).toLocaleString();
  const data = req.body;
  try{
    await pool.connect();
    const result = await pool
    .request()
    .input('tk', mssql.NVarChar,req.body.name)
    .input('mk', mssql.NVarChar,req.body.pass)
    .input('cccd', mssql.BigInt,req.body.cccd)
    .input('sdt', mssql.BigInt,req.body.sdt)
    .input('nganhang', mssql.BigInt,req.body.nganhang)
    .input('name', mssql.NVarChar,req.body.ten)
    .input('ngaysinh', mssql.DateTime,dateOfBirth)
    .input('diachi', mssql.NVarChar,req.body.diachi)
    .input('motabanthan', mssql.NVarChar,req.body.motabanthan).query(`ProcedureName @tk,@mk,@cccd,@ngaysinh,@nganhang,@motabanthan,@sdt,@diachi,@name`);
    res.status(200).json({
        text: "success",
      });
  } catch(error) {
    console.log("error :" + error);
    res.json({
      text: "fail",
    });
  }
});

module.exports = router;
