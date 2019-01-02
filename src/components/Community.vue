<template>
    <div class="commu">
        <h2>{{communityHere.name}}</h2>
        <table>
            <thead>
                <tr>
                    <th>Rang</th>
                    <th>Joueur</th>
                    <th>Victoires</th>
                    <th>Score</th>
                    <th>Platforme</th>
                </tr>
            </thead>
            <tbody class="board">       
                <tr v-for="(epic, n) in orderBy(compte_associe, 'score', -1)" :key="n" >
                    <td>#{{n + 1}}</td>
                    <td @click="setUser(epic)">{{epic.name}}</td>
                    <td>{{epic.wins}}</td>
                    <td>{{epic.score}}</td>
                    <td>{{epic.platform}}</td>
                </tr>
            </tbody>
        </table>
        <button @click="toto">TEST</button>
    </div>
</template>



<script>
    // import axios from "axios"
    import Vue2Filters from 'vue2-filters'
    export default {
        mixins: [Vue2Filters.mixin],
        data() {
            return {
                
                tabscore: 2
            }
        },
        name: "community",
        props: ['communityHere'],
        methods: {

            toto() {
                console.log(this.communityHere)
            },

            test(epic) {
                console.log(this.getStats(epic).stat)
            },
            setUser(profil) {
                // console.log(user);
                this.$ebus.$emit("send-profil", profil)
            },

        },
        
        computed: {
            users() {
                return this.$store.getters.displayUsers;
            },
            community() {
                return this.$store.getters.displayCommunity;
            },
            compte_associe() {
                return this.$store.getters.displayCompte_associeByCommunity;
            },
            hashtag() {
                return this.$store.getters.displayHashtag;
            },
            user_registered_community() {
                return this.$store.getters.displayUser_registered;
            },
            community_has_epic() {
                return this.$store.getters.displayCommunity_has_epic;
            },               
        },
        created() {
            this.$store.dispatch("getUsers"),
            this.$store.dispatch("getHashtag"),
            this.$store.dispatch("getcommunity")
            this.$store.dispatch("getCompte_associeByCommunity", this.communityHere.id_community)
            this.$store.dispatch("getUser_registered_community") 
            this.$store.dispatch("getCommunity_has_epic")
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


    .commu {
        color: white;
        // margin: 20px 0px 0px 110px;
        border-radius: 10px;
        background-color: rgba(51, 51, 51, 0.839);
        width: 400px;
        height: 620px;
        max-height: 645px;
        overflow: auto;



        
        h2 {
            font-size: 50px;
            margin-bottom: 10px;
            font-family: 'Burbank Big Condensed'
        }




        table {

            margin-top: 25px;
            width: 100%;
            th {
                
                font-family: 'Burbank Big Condensed';
                font-size: 20px

            }
            tr {
                tbody {

                    display: flex;
                    justify-content: space-evenly;
                    align-items: center;
                    width: 100%;

                }
                td {
                    line-height: 40px;
                    padding: 3px;
                    transition: .3s
                    }
                // td:hover {
                //     border: 3px solid #ffff00;
                // border-radius: 10px;
                // padding: 0px;
                // cursor: pointer;
                // }
            }
            

            tbody > tr:nth-child(1) > td:nth-child(1) {
                background: #cc9900;
            }
            tbody > tr:nth-child(2) > td:nth-child(1) {
                background: #993399;
            }
            tbody > tr:nth-child(3) > td:nth-child(1) {
                background: #009999;

            }
            tbody > tr:nth-child(4) > td:nth-child(1) {
                background: #339900;

            }
            tbody > tr:nth-child(n + 5) > td:nth-child(1) {
                background: #999999;

            }
            
            
            tbody > tr:nth-child(n + 1) > td:nth-child(1) {
                font-family: 'Burbank Big Condensed';
                font-size: 30px

            }




            tbody > tr > td:nth-child(n + 3) {
                border-left: 1px solid rgba($color: white, $alpha: 0.5);
            }



            tbody > tr > td:nth-child(2):hover {
                border: 3px solid #ffff00;
                border-radius: 10px;
                padding: 0px;
                cursor: pointer;
                transition: .3s;


            }
                
        }
    };
</style>



