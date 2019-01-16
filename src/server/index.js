const port = 8080;
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const db = require("./db.config.js");
const api = require("./apis")(db, ["user", "product", "community", "community_has_epic", "community_has_hashtag", "compte_associe", "hashtag", "message", "user_follow_community", "user_registered_community"]);
const cors = require("cors");
const axios = require("axios");


app.use(express.json({
    extended: false
  }))
app.use(cors())



//pour recuperer les profil epic
app.post("/fortnite", (req, res) => {
    // console.log(req.body.pseudo)
    
        
        axios
          .get("https://api.fortnitetracker.com/v1/profile/" + req.body.platform + "/" + req.body.pseudo,
            {
              headers: {
                "TRN-Api-Key":"5f51cfcb-1ab8-4181-aeb4-7abcb3d554c1"
              }
            })
      
          .then(function(response) {
            // console.log(res.data);
            res.send(response.data);
          })
      
          .catch(function(error) {
            // console.log("err", error);
            res.send("error");
          });
    
    })



app.use(bodyParser.json());
app.use(`/api/v${api.version}`, api.routers);
//ci-dessus prefixer chaque route des API par api/v1/ + associer routers à l'app
app.set("trust proxy", true);

app.get("/", (req, res) => {
    res.send("root@my-api");
});

app.get("/", function(req, res) {
  app.locals.site.activeRoute = req.originalUrl;
  res.render("index", {nom: "kots"});
  // on passe un objet ({nom: "gui"}) à la vue, utilisable dans le template EJS
});

console.log("node server running @ http://localhost:" + port);

app.listen(port);