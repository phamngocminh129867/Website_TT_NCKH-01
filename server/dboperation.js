const sql = require("mssql");
var {pool} = require("./dbconfig");

async function getdata() {
  try {
    let poolz = await sql.connect(config);
    console.log("sql server connected...");
  } catch (error) {
console.log(" mathus-error :" + error);
  }
}
// async function getdata_withQuery() {
//   try {
//     let config = await sql.connect(pool);
//     let res = await config.request().query(`SELECT dbo.TaiKhoang.*
//     FROM   dbo.TaiKhoang`);
//     return res.recordsets;
//   } catch (error) {
//     console.log(" mathus-error :" + error);
//   }
// }


module.exports = {
  getdata:getdata,
  // getdata_withQuery:getdata_withQuery,
};
