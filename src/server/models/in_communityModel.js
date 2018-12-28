module.exports = function(connection) {
  "use strict";
  const auth = require("../utils/auth");
  // CRUD

  const get = function getcommunity_has_epic(clbk, id) {
    var sql;

      sql = "SELECT * FROM compte_associe WHERE compte_associe.id_community = community.id;";
    

    connection.query(sql, [id], (error, results, fields) => {
      // return console.log(this.sql);
      if (error) return clbk(error, null);
      else return clbk(null, [fields.map(x => x.name), results]);
    });
  };
  

  
  
  

  return { 
      get
   };
};
