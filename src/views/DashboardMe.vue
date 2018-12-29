<template>
    <div class="dash">
        <h2 class="title">MES INFOS</h2>
            <hr>
        <ul v-for="(info, n) in infos" :key="n">
            <li>{{n}}: {{info}}</li>
            <hr>
        </ul>

        
<h2>MES COMMUNAUTES</h2>
            <hr>
            <ul v-for="(community, o) in communitiesOfUser" :key="'A'+o">
                <li>user: {{community.id_user}}</li>
                <li>community: {{community.id_community}}<button @click="goCommu(community)">GO</button></li>
                <hr>
            </ul>
            <input type="text" placeholder="chercher une communauté" v-model="commuSearch">
            <button @click="getCommu">COMMU</button>
            <ul v-if="commuFind">
                <li>{{commuFind}}</li>
                <li><button @click="addCommuFind">Ajouté</button></li>
                <li><button @click="resetCommuFind">Annulax</button></li>

            </ul>



    <h2>MES COMPTES EPIC</h2>
            <hr>

            <ul v-for="(compte, m) in compte_associeUser" :key="'B'+m">
                <li> {{compte.name}}</li>
                <li>{{compte.platform}}</li>
                <hr>
            </ul> 
            <input type="text" placeholder="pseudo" v-model="pseudoReSearch">
    
            <br>
    
            <select name="plateforme" id="plateforme" v-model="platformResearch">
    
                    <option value="pc">PC</option>
    
                    <option value="psn">PS4</option>
    
                    <option value="xb1">XBOX ONE</option>
    
                </select>
            <button @click="getEpic">EPIC</button>
            <hr>

       

       
 

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
            commuFind: null
        }
    },

    methods: {



        //Rechercher puis ajouter un compte epic
        getEpic() {
            console.log(this.pseudoReSearch)
            console.log(this.platformResearch)
            var self = this
            axios.post('http://localhost:9999/fortnite', {
                pseudo: this.pseudoReSearch ,
                platform: this.platformResearch
            })
            .then(function(response) {
                console.log(response)
                if (response.data.error || response.data === "error") {
                    console.log("Ce profil Epic est introuvable, désolé !")
                    window.alert(`${response.data.epicUserHandle} sur ${response.data.platformName} n'a pas été trouvé.`)
                    console.log(self.infos.id)
                } else {
                    console.log(response.data.epicUserHandle)
                    console.log(response.data.platformName)
                    axios.post('http://localhost:9999/api/v1/compte_associe', {
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
            .get(`http://localhost:9999/api/v1/community/${name}`)
            .then(res => {
                console.log(res.data[0])
                this.commuFind = res.data[0];            })
            .catch(err => {
                console.log(err);
            })      
        },
        
        addCommuFind() {
            console.log(this.commuFind)
            axios
            .post("http://localhost:9999/api/v1/user_registered_community", {
                "id_user": this.infos.id,
                "id_community": this.commuFind.id_community
            })
            .then(res => {
                console.log(res)
                window.alert(`Vous faites maintenant parti de la communauté ${this.commuFind.name} ! Montrez leur qui est le boss..`);

            })
        },

        resetCommuFind() {
            this.commuFind = null
        },


        goCommu(commu) {
            console.log(commu)
        }

    },
    
    
    computed: {
        infos() {
            return this.$store.getters["user/current"]
        },

        compte_associeCurrentUser() {
            return this.$store.getters["compte_associe/displayCompte_associeUser"]
        },

        communitiesCurrentUser() {
            return this.$store.getters["user_registered_community/displayUser_registeredByUser"]
        }
        
    },

    created() {
        
        axios.get(`http://localhost:9999/api/v1/compte_associe/user/${this.infos.id}`).then(res => {
         this.compte_associeUser = res.data;
          console.log("resuuuult", res);
        }).catch(err => {
          console.log(err);
        })


        axios.get(`http://localhost:9999/api/v1/user_registered_community/${this.infos.id}`).then(res => {
         this.communitiesOfUser = res.data;
          console.log("resuuuult", res);
        }).catch(err => {
          console.log(err);
        })


       
    }
}
</script>

<style lang="scss" scoped>
    .dash {
        text-align: left;
        color: white;

        h2 {
            color: white;
            font-family: 'Burbank Big Condensed';
            font-size: 25px
        }
    }
</style>

