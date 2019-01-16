<template>
    <div class="dash">
    <!-- class="font" -->

    <ul class="accordion">
        <li class="has-sub">
            <label for="menu1">MON COMPTE KOTS</label><input id="menu1" name="menu" type="checkbox" />
            <ul class="sub">
                <li><h3>{{infos.name}}</h3></li>
                <!-- <li><h3>{{infos.create_time}}</h3></li> -->
                <li><input type="text" placeholder="Ajouter une communauté" v-model="commuSearch">
                    <button @click="getCommu"><img class="loupe" src="./../assets/search-solid.svg" alt=""></button></li>
                <li v-if="commuFind">{{commuFind.name}} <button @click="addCommuFind">Ajouté</button><button @click="resetCommuFind">Annulax</button></li>
                <li><button @click="formNewCommu" v-if=" formCommu ? buttonForm = 'Annulax' : buttonForm = 'Créer une communauté' ">{{buttonForm}}</button></li>
                <li v-if="formCommu" class="commuCreate"><h2>Création d'une nouvelle communauté: </h2></li>
                <li v-if="formCommu"><input type="text" v-model="commuCreate" placeholder="NOM"></li>
                <li v-if="formCommu"><input type="text" v-model="hashtag" placeholder="ajouter un tag"><button @click="addTag">+</button></li>
                <!-- <li v-if="formCommu"> <button @click="addTag">+</button></li> -->
                <!-- <li v-if="formCommu"><h3>Nom: {{commuCreate}}</h3></li> -->
                <li v-if="formCommu"> <h3>Hashtag:</h3></li>
                <li  v-for="(tag, n) in allTag" :key="n">>#{{tag}} <button @click="deleteTag(n)">X</button></li>
                <li v-if="formCommu"><button @click="newCommunity">Créer {{commuCreate}}</button></li>
            </ul>
         </li>


<!-- <button @click="formNewCommu" v-if=" formCommu ? buttonForm = 'Annulax' : buttonForm = 'Créer une communauté' ">{{buttonForm}}</button> -->
    
    
    
        <!-- <div v-if="formCommu" class="commuCreate">
    
            <h2>Création d'une nouvelle communauté: </h2>
    
    
    
            <input type="text" v-model="commuCreate" placeholder="NOM">
    
            <input type="text" v-model="hashtag" placeholder="ajouter un tag">
    
            <button @click="addTag">+</button>
    
            <h3>Nom: {{commuCreate}}</h3>
    
            <h3>Hashtag:</h3>
    
            <ul v-for="(tag, n) in allTag" :key="n">
    
                <li>#{{tag}} <button @click="deleteTag(n)">X</button> </li>
    
            </ul>
    
            <button @click="newCommunity">Nouvelle commu</button>
    
    
    
        </div> -->
    
        


<!--  fin accordeon-->
  <!-- <div class="myInfo">
    
            <h2 class="title ">MES INFOS</h2>
    
            <input type="checkbox" class="check">
    
            <div class="list">

                <ul>
                    
                </ul>
                
            </div>
    
        </div> -->

        <li class="has-sub">
            <label for="menu2">MES COMMUNAUTES</label><input id="menu2" name="menu" type="checkbox" />
            <ul class="sub" >
                <!-- <li>me: {{community.id_user}}</li> -->
                <li v-for="(community, o) in communitiesOfUser" :key="'A'+o" @click="goCommu(community)"><h3>{{community.name}}</h3></li>
                <!-- <li>id community: {{community.id_community}}</li>
                <li>id creator: {{community.user_id}}</li> -->
            </ul>
        </li>
        


  <!-- <div class="myCommu">
            <input type="checkbox" class="check">
            <h2>MES COMMUNAUTES</h2>
            <div class="list">
                <ul v-for="(community, o) in communitiesOfUser" :key="'A'+o" @click="goCommu(community)">
                    <li>me: {{community.id_user}}</li>
                    <li>
                        <h3>{{community.name}}</h3>
                    </li>
                    <li>id community: {{community.id_community}}</li> 
                    <li>id creator: {{community.user_id}}</li>
                </ul>
            </div>
        </div>   -->
  
        <li class="has-sub">
            <label for="menu3">MES COMPTES EPIC</label><input id="menu3" name="menu" type="checkbox" />
            <ul class="sub">
                <li class="lounes" v-for="(compte, m) in compte_associeUser" :key="'B'+m">{{compte.ca_name}} sur {{compte.platform}} <br> Communauté: {{compte.name}}</li>
            </ul>
        </li>
        </ul>


        <!-- <div class="myEpic">
            <input type="checkbox" class="check">
            <h2>MES COMPTES EPIC</h2>
            <div class="list">
                <ul v-for="(compte, m) in compte_associeUser" :key="'B'+m">
                    <li>
                        <hr>
                    </li>
                    <li>
                        <h3>{{compte.ca_name}} sur {{compte.platform}}</h3>
                    </li>
                    <li>
                        <h3>Communauté: {{compte.name}}</h3>
                    </li>
                    <li>
                        <hr>
                    </li>
                </ul>
            </div>
        </div> -->
    
    
        
     
    
    
    
    
        
<!--     
        <br>
    
        <hr>
    
    
    
    
     -->
    
    
    
    
    
    
    
    
        <!-- FORMULAIRE DE CREATION D'UNE NOUVELLE COMMUNAUTE -->
    
        
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
        <!-- <input type="text" placeholder="pseudo" v-model="pseudoReSearch">
    
        <select name="plateforme" id="plateforme" v-model="platformResearch">
    
        
    
                        <option value="pc">PC</option>
    
        
    
                        <option value="psn">PS4</option>
    
        
    
                        <option value="xb1">XBOX ONE</option>
    
        
    
                    </select>
    
        <button @click="getEpic">EPIC</button> -->
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    </div>
</template>

<script>
    import axios from 'axios'
    
    
    
    
    
    export default {
    
    
    
        data() {
    
            return {
    
                compte_associeUser: {},
    
                communitiesOfUser: {},
    
                platformResearch: null,
    
                pseudoReSearch: null,
    
                commuSearch: null,
    
                commuFind: null,
    
                commuCreate: null,
    
                hashtag: null,
    
                allTag: [],
    
                formCommu: false,
                user: null
    
            }
    
        },
    
    
    
        methods: {
    
    
    
    
    
    
    
            //Rechercher puis ajouter un compte epic
    
            getEpic() {
    
                // console.log(this.pseudoReSearch)
    
                // console.log(this.platformResearch)
    
                var self = this
    
                axios.post('http://dd6694207e094518a1d100f5b2317a08.testmyurl.ws/fortnite', {
    
                        pseudo: this.pseudoReSearch,
    
                        platform: this.platformResearch
    
                    })
    
                    .then(function(response) {
    
                        // console.log(response)
    
                        if (response.data.error || response.data === "error") {
    
                            // console.log("Ce profil Epic est introuvable, désolé !")
    
                            window.alert(`${response.data.epicUserHandle} sur ${response.data.platformName} n'a pas été trouvé.`)
    
                            // console.log(self.infos.id)
    
                        } else {
    
                            // console.log(response.data.epicUserHandle)
    
                            // console.log(response.data.platformName)
    
                            axios.post('http://dd6694207e094518a1d100f5b2317a08.testmyurl.ws/api/v1/compte_associe', {
    
                                "id_user": self.infos.id,
    
                                "id_community": 1,
    
                                "name": response.data.epicUserHandle,
    
                                "platform": response.data.platformName
    
                            })
    
                            window.alert(`${response.data.epicUserHandle} sur ${response.data.platformName} a été ajouté.`)
    
                        }
    
                    })
    
            },
    
    
    
    
    
    
    
    
    
    
    
    
    
            //COMMU
    
            getCommu() {
    
                var name = this.commuSearch
    
                axios
    
                    .get(`http://dd6694207e094518a1d100f5b2317a08.testmyurl.ws/api/v1/community/name/${name}`)
    
                    .then(res => {
    
                        // console.log(res.data[0])
    
                        this.commuFind = res.data[0];
    
                    })
    
                    .catch(err => {
    
                        // console.log(err);
    
                    })
    
            },
    
    
    
            addCommuFind() {
    
                // console.log(this.commuFind)
    
                axios
    
                    .post("http://dd6694207e094518a1d100f5b2317a08.testmyurl.ws/api/v1/user_registered_community", {
    
                        "id_user": this.infos.id,
    
                        "id_community": this.commuFind.id_community
    
                    })
    
                    .then(res => {
    
                        // console.log(res)
    
                        window.alert(`Vous faites maintenant parti de la communauté ${this.commuFind.name} ! Montrez leur qui est le boss..`);

                        
                        
                        axios.get(`http://dd6694207e094518a1d100f5b2317a08.testmyurl.ws/api/v1/user_registered_community/${this.infos.id}`).then(res => {
                
                            this.communitiesOfUser = res.data;
                
                            console.log("communitiesOf:User", res);
                
                        }).catch(err => {
                
                            // console.log(err);
                
                        });

                        this.resetCommuFind()

                                    
    
    
                    })
    
            },
    
    
    
            resetCommuFind() {
    
                this.commuFind = null
    
            },
    
    
    
    
    
            goCommu(commu) {
    
    
    
                // this.$ebus.$emit("send-commu", commu)
    
                // console.log("send commu from dashme");
    
        
                var commuName = commu.name
    
                this.$router.push({ name: 'dashboard-community', params: { commu: commu,
    
                        name: commuName
    
                    }
    
                })
    
            },
    
    
    
            addTag() {
    
                // console.log("addTag");
    
                this.allTag.push(this.hashtag)
    
            },
            newCommunity() {    
                console.log("newCommunity");


                axios.post("http://dd6694207e094518a1d100f5b2317a08.testmyurl.ws/api/v1/community",{
                    "name" : this.commuCreate,
                    "user_id" : this.infos.id
                })
                .then(
                    axios.get(`http://dd6694207e094518a1d100f5b2317a08.testmyurl.ws/api/v1/community/name/${this.commuCreate}`)
                    .then(res => {
                        // console.log(res.data[0])
                        var commuFind = res.data[0];
                        
                        axios.post("http://dd6694207e094518a1d100f5b2317a08.testmyurl.ws/api/v1/user_registered_community", {
                            "id_user": this.infos.id,
                            "id_community": commuFind.id_community
                        })
                        .then(res => {
                            // console.log(res);                      
                            axios.get(`http://dd6694207e094518a1d100f5b2317a08.testmyurl.ws/api/v1/user_registered_community/${this.infos.id}`)
                            .then(res => {
                                this.communitiesOfUser = res.data;
                                // console.log("communitiesOfUser", res);
                            })
                        })
                    })
                )
            },
    
            
    
    
    
            
    
    
    
            deleteTag(tag) {
    
                this.allTag.splice(tag, 1)
    
            },
    
    
    
            formNewCommu() {
    
                if (this.formCommu === false)
    
                    this.formCommu = true
    
                else
    
                    this.formCommu = false
    
            }
    
    
    
        },
    
    
    
    
    
        computed: {
    
            // infos() {
    
            //     return this.$store.getters["user/current"]
    
            // },
    
    
    
            compte_associeCurrentUser() {
    
                return this.$store.getters["compte_associe/displayCompte_associeUser"]
    
            },
    
    
    
            communitiesCurrentUser() {
    
                return this.$store.getters["user_registered_community/displayUser_registeredByUser"]
    
            }
    
    
    
        },
    
    
    
        created() {
    
            this.infos = JSON.parse(window.localStorage.getItem('user'))
    
            axios.get(`http://dd6694207e094518a1d100f5b2317a08.testmyurl.ws/api/v1/compte_associe/user/${this.infos.id}`).then(res => {
    
                this.compte_associeUser = res.data;
    
                // console.log("compte_associeUser", res.data);
    
            }).catch(err => {
    
                // console.log(err);
    
            })
    
    
    
            
    
            axios.get(`http://dd6694207e094518a1d100f5b2317a08.testmyurl.ws/api/v1/user_registered_community/${this.infos.id}`).then(res => {
    
                this.communitiesOfUser = res.data;
    
                // console.log("communitiesOfUser", res);
    
            }).catch(err => {
    
                // console.log(err);
    
            });
    
    
    
            // axios
    
            // .get(`http://dd6694207e094518a1d100f5b2317a08.testmyurl.ws/api/v1/community/${this.community.id}`)
    
            // .then(res => {
    
            //     console.log(res)
    
            // })
    
    
    
    
    
    
    
            // axios.get(`http://dd6694207e094518a1d100f5b2317a08.testmyurl.ws/api/v1/user_registered_community/${this.infos.id}`).then(res => {
    
            //  var communitiesOfUser = [res.data];
    
            //     console.log("communitiesOfUser", communitiesOfUser);
    
            //     communitiesOfUser.forEach(community => {
    
            //     axios
    
            //         .get(`http://dd6694207e094518a1d100f5b2317a08.testmyurl.ws/api/v1/community/${this.community.id}`)
    
            //         .then(res => {
    
            //             console.log(res)
    
            //         })
    
            //     });
    
            // }).catch(err => {
    
            //   console.log(err);
    
    
    
    
    
        }
    
    }
</script>

<style lang="scss" scoped>
    /* width */    
     ::-webkit-scrollbar {
        width: 10px;
    }
    

    /* Track */    
     ::-webkit-scrollbar-track {
        background: #f1f1f1;
        border-radius: 10px
    }
    
    
    /* Handle */
     ::-webkit-scrollbar-thumb {
        background: #888;
        border-radius: 10px
    }
    
    
    /* Handle on hover */
     ::-webkit-scrollbar-thumb:hover {
        background: #555;
    }
    
    
    // @keyframes seral {
    //     0% {
    //     }
    //     20% {
    //         display: none;
    //     }
    //     40% {
    //         display: block;
    //         // height: 0;
    //     }
    //     60% {
    //     }
    //     80% {
    //     }
    //     100% {
    //         display: block;
    //         height: 100%;
    //     }
    // }

    .loupe {
        height: 10px;
    }
    *{
        margin: 0;
        padding: 0}

    .accordion {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        padding: 0;
        background: transparent;
        border-radius: 3px;
        overflow: hidden;
        user-select: none;
        color: white;
        justify-content: space-evenly;
        border-radius: 10px;
        font-family: 'Burbank Big Condensed';
        margin-top: 0px

    }

    .has-sub {
        border-radius: 10px
    }
    .accordion ul {
        margin: 0;
        padding: 0;
    }
    .accordion li {
        display: block;
        width: 100%;
        height: 100%
    }
    .accordion label {
        cursor: pointer;
        display: block;
        padding: 20px 1em;
        overflow: hidden;
        background: linear-gradient(#555, #444);
        border-bottom: 1px solid #333;
        box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.2);
        font-size: 25px
    }

    .accordion input[type="checkbox"] {
        display: none;
    }
    .accordion .sub > li {
        cursor: pointer;
        overflow: hidden;
        height: 0;
        margin: 0;
        opacity: 0;
        font-size: 0.875em;
        transition: all 0.25s ease-in-out;
        box-shadow: inset 0 -1px 0 #555;
        text-align: center;
        
    }

    ul.sub {
        max-height: 400px;
        overflow: auto;
    }

    .accordion .sub > li a {
        text-decoration: none;
        color: white;
        display: block;
        width: 100%;
        height: 100%
    }

    .accordion input:checked + .sub > li {
        padding: 0.7em 0em;
        height: 2.4em;
        opacity: 1;
        text-align: center
    }

    li.has-sub {
        width: 30%;
        min-width: 320px;
        // background-color: rgba(51, 51, 51, 0.839);
        background-color: #663366;
        
    }
    
    li:hover {
        // background: rgba(#808099, 0.3);
        transition: .2s;
    }

    ul.sub li:hover {
        color: black;
        background: rgba(#808099, 0.3);
        // font-size: 25px;
        margin: auto
    }

    // li.has-sub:nth-child(2){
    //     background-color: rgba(51, 51, 51, 0.839);
    // }
    
    

    .accordion input:checked  + ul.sub > li.lounes {
   padding: 2.7em 0em;
   height: 1.4em;
   opacity: 1;
   text-align: center;
   padding-top: 11px;
   
   }

    @media screen and (max-width:960px){
        .accordion {
            margin-top: 30px;
        }
        li.has-sub{ width: 30%;
        min-width: 320px;
        flex: 1
    }
  }


   
    
    // .dash {
    //     text-align: left;
    //     color: white;
    //     display: flex;
    //     flex-direction: columns;
    //     flex-wrap: wrap;

    //     h2 {    
    //         color: white;
    //         font-family: 'Burbank Big Condensed';
    //         font-size: 25px
    //     }
    // }
    
    
    // input,
    // button,
    // select {
    //     height: 20px;
    //     color: white
    // }
    

    // input.check:checked~ .myInfo, .myCommu, .myEpic {
    //     transition: .5s;
    //     // transform: scaleY(1)
    //     }
    
    
    // .myInfo,
    // .myCommu,
    // .myEpic {
    //     margin: 20px 0px 0px 0px;
    //     border-radius: 10px;
    //     background-color: rgba(51, 51, 51, 0.839);
    //     width: auto;
    //     max-width: 300px;
    //     height: 100%;
    //     font-family: 'Burbank Big Condensed';
    //     color: white;
    //     position: relative;
    //     cursor: pointer;
    
    //     h2 {
    //         font-size: 35px;
    //         text-align: center
    //     }
    
    //     input.check {
    //         cursor: pointer;
    //         position: absolute;
    //         top: 0;
    //         left: 0;
    //         width: 100%;
    //         height: 35px;
    //         opacity: 0;
    //     }
        

    //     input.check:checked~div.list {    
    //         animation: seral 2s forwards;
    //         transition: 2s // animation: listing 2s;
    //     }
    
    //     .list {
    //         transition: 2s;
    //         height: 0px;
    //         max-height: 450px;
    //         overflow: auto;
            
    //         h3 {
    //             list-style: none;
    //             background-color: #663366;
    //             height: auto;
    //             display: flex;
    //             flex-direction: column;
    //             justify-content: space-evenly;
    //             text-align: center;
    //             font-size: 25px
    //         }
    
    //         h3:hover {
    //             background: rgba(#808099, 0.3);
    //             transition: .2s;
    //             cursor: pointer;
    //         }
    //     }
    // }


</style>