module.exports = (function  messageAPi() {
  "use strict";
  const express = require("express");
  const router = express.Router();
  

  return function  messageRouter(db) {
    
    const  messageModel = require("./../models/messageModel")(db.connection);

    router.post('/message', (req, res) => {
      messageModel.create((err, dataset) => {
        res.send(dataset);
      }, req.body); // post datas ici ...
    });
   
  
    router.get('/message', (req, res) => {
      console.log("ca get");
      
      messageModel.get( (err, dataset) => {
        res.send(dataset);
        // console.log("coucou");
        
      }, null);
    });
    
    
   

    router.get('/message/commu/:id_community', (req, res) => {
      console.log("ca get chat par commu");
      
      messageModel.getChatByCommunity( (err, chat) => {
        res.send(chat);
      }, 
      req.params.id_community);
    });
  
    router.delete('/message', (req, res) => {
      messageModel.remove((err, dataset) => {
        if (err) return res.status(500).send(err);
        return res.status(200).send(dataset);
      }, req.body.id_message); // tableau d'ids ici ...
    });
  
    router.patch('/message', (req, res) => {
      messageModel.update((err, dataset) => {
        if (err) return res.status(500).send(err);
        else return res.status(200).send(dataset);
      }, req.body); // un tableau d'ids ici ...
    });

    return router;
  };
})();