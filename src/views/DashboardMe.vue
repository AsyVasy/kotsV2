<template>
    <div class="dash">
        <h2 class="title">MES INFOS</h2>
            <hr>
        <ul v-for="(info, n) in infos" :key="n">
            <li>{{n}}: {{info}}</li>
            <hr>
        </ul>

    <h2>MES COMPTES EPIC</h2>
            <hr>

            <ul v-for="(compte, m) in compte_associeUser" :key="m">
                <li>{{m}}: {{compte}}</li>
                <hr>
            </ul>

            <hr>
       
       <h2>MES COMMUNAUTES</h2>
            <hr>
       <p>blablablablablablablablabla</p>
            <hr>

    </div>
</template>

<script>
import axios from 'axios'
    

export default {

    data() {
        return {
            compte_associeUser: {}
        }
    },
    
    computed: {
        infos() {
            return this.$store.getters["user/current"]
        },

        compte_associeCurrentUser() {
            return this.$store.getters["compte_associe/displayCompte_associeUser"]
        }



        
    },

    created() {
        
        axios.get(`http://localhost:9999/api/v1/compte_associe/${this.infos.id}`).then(res => {
         this.compte_associeUser = res.data;
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

        h2 {
            color: white;
            font-family: 'Burbank Big Condensed';
            font-size: 25px
        }
    }
</style>

