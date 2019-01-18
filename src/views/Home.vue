<template>
  <section id="app">



    <div class="alert">
        <h2>Bienvenue sur King Of The Stats !</h2>
      <!-- <div class="global"> -->


      <!-- <div class="text"> -->

        
        <p class="intro"></p>


        <router-link style="color: white" class="visibility" to="/login"> Déjà membre ? Clic pour te connecter.</router-link>
        <br>
        <router-link style="color: white" class="visibility" to="/register"> Pas encore membre ? Clic pour t'enregistrer.</router-link>  
      <!-- </div> -->


  <br><hr>
      <div class="search">
        <h3>Rechercher une communauté: </h3>
       <input type="search"  v-model="commuSearch">
        <button type="submit" @click="searchCommu"><i class="fa fa-search"></i></button>
      <h2 v-if="commuFind">
        <ul >
          <li v-for="(commu, n) in commuFind" :key="n" class="clicable" @click="goCommu(commu)">{{commu.name}}
          </li>
        </ul>
      </h2>
      </div>
    </div>
    <!-- </div> -->
     

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
      // console.log(this.commuSearch);
      var tag = this.commuSearch
            axios            
            .get(`http://dd6694207e094518a1d100f5b2317a08.testmyurl.ws/api/v1/community/hashtag/${tag}`)
            .then(res => {
                // console.log(res.data)
                this.commuFind = res.data;            })
            .catch(err => {
                // console.log(err);
            }) 
    },

    goCommu(commu) {
            
            // this.$ebus.$emit("send-commu", commu)
            // console.log("send commu from dashme");
            
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
        height: 90vh;
        // margin: 20px 0px 0px 110px;
        border-radius: 10px;
        background-color: rgba(51, 51, 51, 0.839);
        width: 90vw;
        margin: auto;
        margin-top: 10px;
        // overflow: auto;

        h2 {
          font-family: 'Burbank Big Condensed';
          font-size: 50px;
          text-align: center;
          color: white
          
        }

        .visibility {
           font-family: 'Burbank Big Condensed';
          font-size: 18px;
          color: white
        }

         .search {
          ul {
            list-style: none;
            margin-top: 1rem
          }
        }
      
       .clicable {
         font-size: 25px
       }
       .clicable:hover {
            cursor: pointer;
            color: #7619FF;
            background: rgba( 7, 7, 7, 0.5);
            transition: .5s;
          }






    // .global {
    //     margin-top: 100px;
    //     display: flex;
    //     justify-content: space-evenly;
        


    //     .text {
    //       display: flex;
    //       flex-direction: column;
          
    //       flex-wrap: wrap
          
    //     }

        // .search {
        //   ul {
        //     list-style: none;
        //   }
        // }


      //     .clicable:hover {
      //       cursor: pointer;
      //       color: #7619FF;
      //       background: rgba( 7, 7, 7, 0.5);
      //       transition: .5s
      //     }
    //     .intro {
    //       width: 450px;
    //       font-size: px;
    //       margin-bottom: 40px
    //     }

    //     input {
    //       width: auto;
          
    //     }

      //  div.alerte > .visibility {
      //      font-family: 'Burbank Big Condensed';
      //     font-size: 80px;
      //     color: white
      //   }
    
    
    // }


    }
 
  }

  @media screen and (max-width: 768px) {

h2 {
  font-size: 20px
}

    
  }








  
  

  
</style>
