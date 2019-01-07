<template>
  <section id="app">



    <div class="alert">
        <h2>Bienvenue sur King Of The Stats !</h2>
      <div class="global">
      <div class="text">
        <p class="intro">Tu aimes avoir un oeil sur tes statistiques lorsque tu joues à Fortnite ? Tu aimes te comparer avec tes amis, tes rivaux ou des joueurs pro ? Crée une communauté dans laquelle tu pourras y ajouter tous les comptes Epic pour avoir un classement de tous les joueurs que tu veux ! Tu peux aussi rejoindre une communauté déjà créee ou simplement la consulter à toi de voir !</p>
        <router-link class="visibility" to="/login"> Déjà membre ? Clic pour te connecter.</router-link>
        <router-link class="visibility" to="/register"> Pas encore membre ? Clic pour t'enregistrer.</router-link>  
      </div>



      <div class="search">
        <h3>Rechercher une communauté: </h3>
       <input type="search"  v-model="commuSearch">
        <button type="submit" @click="searchCommu"><i class="fa fa-search"></i></button>
      <h2 v-if="commuFind">
        <ul v-for="(commu, n) in commuFind" :key="n">
          <li class="clicable" @click="goCommu(commu)">{{commu.name}}
          </li>
        </ul>
      </h2>
      </div>
    </div>
    </div>
     

  </section>
</template>


<script>
import axios from 'axios'

export default {
  data() {
    return {
      commuSearch: "",
      commuFind: null
    }
  },

  methods: {
    searchCommu() {
      console.log(this.commuSearch);
      var tag = this.commuSearch
            axios            
            .get(`http://localhost:8080/api/v1/community/hashtag/${tag}`)
            .then(res => {
                console.log(res.data)
                this.commuFind = res.data;            })
            .catch(err => {
                console.log(err);
            }) 
    },

    goCommu(commu) {
            
            // this.$ebus.$emit("send-commu", commu)
            console.log("send commu from dashme");
            
            var commuName = commu.name
            this.$router.push({name:'dashboard-community', params: {commu: commu, name: commuName }})
        }
  }
 
  
}
</script>



  <style lang="scss">
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

#app {
    width: 100vw;
    
    background: linear-gradient(rgba(102, 0, 255, 0.9), rgb(204, 0, 255));


    

    .alert {
        color: white;
        // margin: 20px 0px 0px 110px;
        border-radius: 10px;
        background-color: rgba(51, 51, 51, 0.839);
        width: 90vw;
        height: 90vh;
        margin-left: 65px;
        margin-top: 10px;
        // overflow: auto;

        h2 {
          font-family: 'Burbank Big Condensed';
          font-size: 50px;
          text-align: center;
          color: white
          
        }

    .global {
        margin-top: 100px;
        display: flex;
        justify-content: space-evenly;
        


        .text {
          display: flex;
          flex-direction: column;
          
        }

        .search {
          ul {
            list-style: none;
          }
        }


        .clicable:hover {
          cursor: pointer;
          color: #7619FF;
          background: rgba( 7, 7, 7, 0.5);
          transition: .5s
        }
        .intro {
          width: 450px;
          font-size: px;
          margin-bottom: 40px
        }

        input {
          width: auto;
          
        }

       .visibility {
           font-family: 'Burbank Big Condensed';
          font-size: 30px;
          color: white
        }
    
    
    }


    }
 
  }








  
  

  
</style>
