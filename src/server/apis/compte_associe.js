module.exports = (function compte_associeAPi() {
  "use strict";
  const express = require("express");
  const router = express.Router();
  const auth = require("./../utils/auth");

 

  return function  compte_associeRouter(db) {
    
    const  compte_associeModel = require("./../models/compte_associeModel")(db.connection);

    router.post('/compte_associe', (req, res) => {
      compte_associeModel.create((err, dataset) => {
        res.send(dataset);
      }, req.body); // post datas ici ...
    });
   
  
    const solver = function solver(comptes) {
      const axios = require("axios");
      return new Promise((resolve, reject) => {
        var finished = 0;
        var regex = /,/gi;
        comptes.forEach(compte => {
          axios.post('http://localhost:9999/fortnite', {
                    pseudo: compte.name,
                    platform: compte.platform
                })
                .then(function(response) {
                  console.log("ajax fortnite ok")
                    compte.score = Number(response.data.lifeTimeStats[6].value.replace(regex, ''))
                    compte.wins = response.data.lifeTimeStats[8].value
                    compte.score

                    finished++;
                    if (finished === comptes.length) 
                    resolve(comptes)
                })
        });
      })
    };

    router.get('/compte_associe', (req, res) => {
      console.log("ca get compte associe");
      
      compte_associeModel.getAll( (err, comptes) => {

        solver(comptes).then(finalComptes => {
          console.log("finito")
          res.send(finalComptes)
          console.log(finalComptes)

        })
        console.log("compte avec les stats", comptes); 
      }, null);
    });
    



    router.get("/compte_associe/:id", (req, res) => {
      compte_associeModel.getByUser((err, compte_associe) => {
        if (err) return res.status(520).send(err);
        return res.status(200).send(auth.removeSensitiveInfo(compte_associe));
      }, req.params.id);
    });

    router.delete('/compte_associe', (req, res) => {
      compte_associeModel.remove((err, dataset) => {
        if (err) return res.status(500).send(err);
        return res.status(200).send(dataset);
      }, req.body.id); // tableau d'ids ici ...
    });
  
    router.patch('/compte_associe', (req, res) => {
      compte_associeModel.update((err, dataset) => {
        if (err) return res.status(500).send(err);
        else return res.status(200).send(dataset);
      }, req.body); // un tableau d'ids ici ...
    });

    return router;
  };
})();