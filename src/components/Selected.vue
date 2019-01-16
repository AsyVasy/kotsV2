<template>
    <div class="selected">
        <div class="head">
            <h2>{{epic.name}}</h2>
            <ul>
                <li @click="career">Carrièrre</li>
                <li @click="solo">Solo</li>
                <li @click="duo">Duo</li>
                <li @click="squad">Escouade</li>
            </ul>
        </div>

        <div class="stat">
            <ul>
                <li v-for="(stat, i) in stats " :key="i"> <p v-if="stat.key ? userStats = stat.key : userStats = i">{{userStats}} : {{stat.value}} </p> </li>                
            </ul>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    
    export default {
    
        data() {
    
            return {
    
                stats: {},
                checking: null,
    
                epic: {
                    name: null,
                    platform: null
                }
            } 
        },
        methods: {
            career() {
                this.checking = 1
                this.getStats(this.checking)
            },
            solo() {
                // console.log("coucou")
                this.checking = 2
                this.getStats(this.checking)
            },
            duo() {
                this.checking = 3
                this.getStats(this.checking)
            },
            squad() {
                this.checking = 4
                this.getStats(this.checking)
            },




            getStats(checking) {
                var self = this;
                axios.post('http://dd6694207e094518a1d100f5b2317a08.testmyurl.ws/fortnite', {
                    pseudo: this.epic.name ,
                    platform: this.epic.platform
                })
                .then(function(response) {
                    if (checking === 1) {
                        self.stats = response.data.lifeTimeStats
                    }
                    else if (checking === 2) {
                        self.stats = response.data.stats.p2
                    }
                    else if (checking === 3) {
                        self.stats = response.data.stats.p10
                    }
                    else if (checking === 4) {
                        self.stats = response.data.stats.p9
                    }
                })
            }
        },
    
        created() {
            this.$ebus.$on("send-profil", param => {
            this.epic = param;
            this.getStats(1)
            
            });
            this.$store.state.pseudoReSearch = this.pseudoReSearch
            this.$store.state.platformResearch = this.platformResearch
        },
    }
</script>

<style lang="scss" scoped>
    .selected {
        border-radius: 10px;
        background-color: rgba(51, 51, 51, 0.839);
        z-index: 100;
        max-width: 580px;
        height: 300px;
        .head {
            margin-top: 5px;
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            h2 {
                font-size: 35px;
                font-family: 'Burbank Big Condensed';
                color: white;
            }
            ul {
                font-family: 'Burbank Big Condensed';
                font-size: 35px;
                width: 450px;
                color: white;
                list-style: none;
                display: flex;
                justify-content: space-around;
                background:  rgba(255, 255, 255, 0.502);
                border-radius: 10px;
                
                li {
                    width: auto;
                    transition: .5s
                }
                li:hover {
                    cursor: pointer;
                    background:  rgba(51, 51, 51, 0.839);
                    transition: .5s
                }

            }
        }
        .stat {
            ul {
                list-style: none;
                font-family: 'Burbank Big Condensed';
                color: white;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                flex-wrap: wrap;
                font-size: 30px;
                height: 220px;;
                background-color: #663366;
                margin: 10px 20px 0 20px;
                
                li {
                    transition: .5s;
                }
                li:hover {
                    color: red;
                    transition: .5s;
                    cursor: pointer;
                }        
            }
        }
    };

    @media screen and (max-width: 768px) {
        .selected {
       
        height: 300px;
        .head {
            margin-top: 5px;
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            h2 {
                font-size: 20px;
                font-family: 'Burbank Big Condensed';
                color: white;
            }
            ul {
                font-family: 'Burbank Big Condensed';
                font-size: 18px;
                width: 400px;
                color: white;
                list-style: none;
                display: flex;
                justify-content: space-around;
                background:  rgba(255, 255, 255, 0.502);
                border-radius: 10px;
                
                li {
                    width: auto;
                    transition: .5s
                }
                li:hover {
                    cursor: pointer;
                    background:  rgba(51, 51, 51, 0.839);
                    transition: .5s
                }

            }
        }
        .stat {
            ul {
                list-style: none;
                font-family: 'Burbank Big Condensed';
                color: white;
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                align-items: flex-start;
                flex-wrap: wrap;
                font-size: 20px;
                height: 220px;;
                background-color: #663366;
                margin: 10px 20px 0 20px;
                
                li {
                    transition: .5s;
                }
                li:hover {
                    color: red;
                    transition: .5s;
                    cursor: pointer;
                }        
            }
        }
    };

    }
</style>

