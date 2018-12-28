module.exports = (function community_has_epicAPi() {
  "use strict";
  const express = require("express");
  const router = express.Router();
  

  return function  community_has_epicRouter(db) {
    
    const  community_has_epicModel = require("./../models/community_has_epicModel")(db.connection);

    router.post('/community_has_epic', (req, res) => {
      community_has_epicModel.create((err, dataset) => {
        res.send(dataset);
      }, req.body); // post datas ici ...
      console.log(req.body);
      
    });
   
  
    router.get('/community_has_epic', (req, res) => {
      console.log("ca get");
      
      community_has_epicModel.get( (err, dataset) => {
        res.send(dataset);
        // console.log("coucou");
        
      }, null);
    });
  
    router.delete('/community_has_epic', (req, res) => {
      community_has_epicModel.remove((err, dataset) => {
        if (err) return res.status(500).send(err);
        return res.status(200).send(dataset);
      }, req.body); // tableau d'ids ici ...
      console.log( req.body);
      
    });
  
    router.patch('/community_has_epic', (req, res) => {
      community_has_epicModel.update((err, dataset) => {
        if (err) return res.status(500).send(err);
        else return res.status(200).send(dataset);
      }, req.body); // un tableau d'ids ici ...
    });

    return router;
  };
})();