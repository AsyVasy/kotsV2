module.exports = (function hashtagAPi() {
  "use strict";
  const express = require("express");
  const router = express.Router();
 
  return function  hashtagRouter(db) {
    
    const  hashtagModel = require("./../models/hashtagModel")(db.connection);

    router.post('/hashtag', (req, res) => {
      hashtagModel.create((err, dataset) => {
        res.send(dataset);
      }, req.body); // post datas ici ...
    });
   
  
    router.get('/hashtag', (req, res) => {
      console.log("ca get");
      
      hashtagModel.get( (err, dataset) => {
        res.send(dataset);
        // console.log("coucou");
        
      }, null);
    });
  
    router.delete('/hashtag', (req, res) => {

      hashtagModel.remove((err, dataset) => {
        if (err) return res.status(500).send(err);
        return res.status(200).send(dataset);
      }, req.body.name); // tableau d'ids ici ...
    });
  
    router.patch('/hashtag', (req, res) => {
      hashtagModel.update((err, dataset) => {
        if (err) return res.status(500).send(err);
        else return res.status(200).send(dataset);
      }, req.body); // un tableau d'ids ici ...
    });

    return router;
  };
})();