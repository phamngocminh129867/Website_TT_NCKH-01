const mssql = require("mssql");
const config = {
    user: "sa",
    password: "123456minh",
    server: "DESKTOP-9TINK3T",
    database: "Website",
    options: {
      trustedconnection: true,
      enableArithAbort: true,
      instancename: "",
    },
    port: 62307
  };
  const pool = new mssql.ConnectionPool(config);
  module.exports = {config,pool};