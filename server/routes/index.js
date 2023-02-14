const { json } = require('express');
var express = require('express');
// var jwt = require('jsonwebtoken');
var router = express.Router();
// const bodyParser = require('body-parser');
const multer = require('multer');

var mssql = require("mssql");
var {pool} = require("../dbconfig");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '.././public/images');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() ;
    cb(null,file.originalname+ uniqueSuffix);
  },
});

const upload = multer({ storage });

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
//test connection
// const cpUpload = upload.fields([{ name: 'avatar', maxCount: 1 }, { name: 'gallery', maxCount: 8 }])
// router.post('/uploadadmin',upload.array('avatar',12), async function (req, res, next) {
router.post('/uploadadmin',upload.single('image'),  async function (req, res, next) {
  const file = req.file
  try {
    console.log(req.body);
  } catch (error) {
    console.log(error);
  }
});
router.post('/uploadcumsan',upload.none(),  async function (req, res, next) {
  try {
    console.log(req.body);
  } catch (error) {
    console.log(error);
  }
});
router.post('/uploadloaisan',upload.none(),  async function (req, res, next) {

  try {
    console.log(req.body);
  } catch (error) {
    console.log(error);
  }
});
router.get('/cumsan',upload.none(),  async function (req, res, next) {

  try {
    console.log(req.body);
  } catch (error) {
    console.log(error);
  }
});router.get('/loaisan',upload.none(),  async function (req, res, next) {
  try {
    await pool.connect();
    const result = await pool
      .request()
      .query(`
      SELECT MaLoaiSan, TenLoaiSan
      FROM   dbo.LoaiSan
      `);
    const user = result.recordset[0];
    if (user) {
      res.json({
        user:user,
      });
    } 
  } catch (error) {
    console.log(error);
  }
});
router.get("/user",async  function (req, res, next) {
  // const Ac=req.body;
  try {
    await pool.connect();
    const result = await pool
      .request()
      .query(`
      SELECT dbo.TaiKhoang.Ma_TK, dbo.TaiKhoang.TK, dbo.ThongTin_TK.[CCCD/CMND], dbo.ThongTin_TK.ngaysinh, dbo.ThongTin_TK.nganhang, dbo.ThongTin_TK.motabanthan, dbo.ThongTin_TK.thanhtich, dbo.ThongTin_TK.hang, dbo.ThongTin_TK.[elo-diem], dbo.ThongTin_TK.cap, 
            dbo.ThongTin_TK.sdt, dbo.ThongTin_TK.diachi, dbo.ThongTin_TK.name_ten
FROM   dbo.TaiKhoang INNER JOIN
            dbo.ThongTin_TK ON dbo.TaiKhoang.Ma_TK = dbo.ThongTin_TK.MA_Taikhoang
WHERE (dbo.TaiKhoang.Ma_TK = 1)
      `);
    const user = result.recordset[0];
    if (user) {
      res.json({
        text: "success",
        // token:token,
        user:user,
      });
    } 
  } catch (error) {
    res.status(500).json({text: "fail"});
  }});
  router.get("/arena",async  function (req, res, next) {
    // const Ac=req.body;
    try {
      await pool.connect();
      const result = await pool
        .request()
        .query(`
        SELECT dbo.San.Logo_1, dbo.San.TenSan, dbo.LoaiSan.TenLoaiSan, dbo.CumSan.TenCumSan
        FROM   dbo.CumSan INNER JOIN
                    dbo.San ON dbo.CumSan.MaCumSan = dbo.San.MaCumSan INNER JOIN
                    dbo.LoaiSan ON dbo.San.MaLoaiSan = dbo.LoaiSan.MaLoaiSan
        `);
      const sanbong = result.recordset[0];
      if (sanbong) {
        res.json({
          text: "success",
          // token:token,,
          sanbong:sanbong,
        });
      } 
    } catch (error) {
      res.status(500).json({text: "fail"});
    }});
router.post("/getdata_withQuery",async  function (req, res, next) {
  const Ac=req.body;
  try {
    await pool.connect();
    const result = await pool
      .request()
      .input("tk", Ac.name)
      .input("mk",Ac.pass)
      .query(`
      SELECT dbo.TaiKhoang.MK AS pass, dbo.TaiKhoang.TK AS tk, dbo.TaiKhoang.Ma_TK AS id, dbo.ThongTin_TK.name_ten AS name, dbo.ThongTin_TK.autolocation AS ATlocation
      FROM   dbo.TaiKhoang INNER JOIN
                  dbo.ThongTin_TK ON dbo.TaiKhoang.Ma_TK = dbo.ThongTin_TK.MA_Taikhoang
      WHERE (TK = @tk) AND (MK = @mk)
      `);
    const user = result.recordset[0];
    if (user) {
      const token = jwt.sign({
            idUser:user.id,
            nameUser:user.name,
            Rule:user.ATlocation,
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
