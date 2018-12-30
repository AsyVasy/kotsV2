module.exports = function(connection) {
  "use strict";
  const auth = require("../utils/auth");
  // CRUD

  const create = function createUser_registered_community(clbk, data) {
    const q = "INSERT INTO `user_registered_community`(`id_user`, `id_community`) VALUES (?, ?)";
    const payload = [data.id_user, data.id_community];

   const query = connection.query(q, payload, (err, res, cols) => {
      console.log(q)
      console.log(payload + "paylooood")
      // console.log(this.sql); 
      // affiche la dernière requête SQL, pratique pour deboguer
      if (err) return clbk(err, null);
      return clbk(null, res);
    });   
    console.log(query.q);
    
  };

  const remove = function deleteUser_registered_community(clbk, data) {
    // la clause SQL IN permet de chercher une valeur dans un tableau
    const q = "DELETE FROM `user_registered_community` WHERE id_user = ? AND id_community = ?";
    const payload = [data.id_user, data.id_community]

    connection.query(q, payload, function (err, res, fields) {
      console.log(payload);
      // console.log(this.sql);
       // affiche la dernière requête SQL, pratique pour deboguer
      if (err) return clbk(res, null);
      return clbk(null, res);
    });
  };

  const update = function editUser_registered_community(clbk, data) {
    const q = "UPDATE user_registered_community SET id_user = ? AND id_community = ? WHERE id_user = ? AND id_community = ?";
    const payload = [data.new_id_user, data.new_id_community, data.old_id_user, data.old_id_community];
    connection.query(q, payload, function (err, res, fields) {
      // console.log(this.sql);
      console.log(payload);
       // affiche la dernière requête SQL, pratique pour deboguer
      if (err) return clbk(err, null);
      return clbk(null, res);
    });
  };

  const getAll = function getUser_registered_community(clbk, id) {
    var sql;

      sql = "SELECT * FROM `user_registered_community`;";
    

    connection.query(sql, [id], (error, results, fields) => {
      console.log(this.sql);
      if (error) return clbk(error, null);
      else return clbk(null, [fields.map(x => x.name), results]);
    });
  };

  const getByUser = function getUser_registered_community(clbk, id_user) {
    const sql =  "SELECT * FROM `user_registered_community` INNER JOIN `community` WHERE community.id_community = user_registered_community.id_community AND user_registered_community.id_user = 24";
    const q = connection.query(sql, id_user, (err, user_registered_community) => {
      if (err) return clbk(err, null);
      return clbk(null, user_registered_community);
    });
    console.log(q.sql);
  };
 
  return {
    create,
    remove,
    update,
    getAll,
    getByUser
  };
};
