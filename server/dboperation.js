var config = require("./dbconfig");
const sql = require("mssql");

async function getdata() {
  try {
    let pool = await sql.connect(config);
    console.log("sql server connected...");
  } catch (error) {
console.log(" mathus-error :" + error);
  }
}
async function getdata_withQuery() {
    try {
      let pool = await sql.connect(config);
      let res = await pool.request().query("SELECT dbo.TaiKhoang.TK, dbo.TaiKhoang.MK FROM   dbo.TaiKhoang INNER JOIN  dbo.ThongTin_TK ON dbo.TaiKhoang.Ma_TK = dbo.ThongTin_TK.MA_Taikhoang");
      return res.recordsets;
    } catch (error) {
      console.log(" mathus-error :" + error);
    }
  }
  

module.exports = {
  getdata: getdata,
  getdata_withQuery:getdata_withQuery
};
