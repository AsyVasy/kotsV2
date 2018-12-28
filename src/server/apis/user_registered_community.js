module.exports = (function user_registered_communityAPi() {
  "use strict";
  const express = require("express");
  const router = express.Router();


  return function user_registered_communityRouter(db) {
    
    const user_registered_communityModel = require("./../models/user_registered_communityModel")(db.connection);

    router.post('/user_registered_community', (req, res) => {
      user_registered_communityModel.create((err, dataset) => {
        res.send(dataset);
      }, req.body); // post datas ici ...
      console.log(req.body);
      
    });
   
  
    router.get('/user_registered_community', (req, res) => {
      console.log("ca get");
      
      user_registered_communityModel.get( (err, dataset) => {
        res.send(dataset);
        // console.log("coucou");
        
      }, null);
    });
  
    router.delete('/user_registered_community', (req, res) => {
      user_registered_communityModel.remove((err, dataset) => {
        if (err) return res.status(500).send(err);
        return res.status(200).send(dataset);
      }, req.body); // tableau d'ids ici ...
      console.log( req.body);
      
    });
  
    router.patch('/user_registered_community', (req, res) => {
      user_registered_communityModel.update((err, dataset) => {
        if (err) return res.status(500).send(err);
        else return res.status(200).send(dataset);
      }, req.body); // un tableau d'ids ici ...
    });

    return router;
  };
})();