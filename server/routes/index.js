const { json } = require('express');
var express = require('express');
var jwt = require('jsonwebtoken');
var router = express.Router();
const sql = require("../dboperation");
// var {config} = require("../dbconfig");
var mssql = require("mssql");
var {pool} = require("../dbconfig");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


//test connection
router.get('/testconnect', function(req, res, next) {
  sql.getdata();
  res.send('respond with a resource');
});


router.post("/getdata_withQuery",async  function (req, res, next) {
  const Ac=req.body;
  try {
    await pool.connect();
    const result = await pool
      .request()
      .input("tk", Ac.name)
      .input("mk",Ac.pass)
      .query(`
      SELECT MK AS pass, TK AS tk, Ma_TK AS id
      FROM   dbo.TaiKhoang
      WHERE (TK = @tk) AND (MK = @mk)
      `);
    const user = result.recordset[0];
    if (user) {
      const token = jwt.sign({
            tk:Ac.name,
            idUser:user.id,
          },'mk'); 
      res.json({
        text: "success",
        token:token,
      });
    } 
  } catch (error) {
    res.status(500).json({text: "fail"});
  }});
router.post("/getdata_register", async(req, res)=> {
  var dateOfBirth = new Date(req.body.ngaysinh).toLocaleString();
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
