<template>
  <header id="header">
    <img
      id="logo"
      class="clickable"
      alt="Vue logo"
      src="@/assets/CouronneV2.png"
      @click="$router.push('/')"
    >


  
        <!-- <div class="search">
        <input type="search" placeholder="Rechercher une communauté" v-model="commuSearch">
        <button type="submit" @click="searchCommu"><i class="fa fa-search"></i></button>
        <h2 v-if="commuFind">
        <ul v-for="(commu, n) in commuFind" :key="n">
          <li class="clicable" @click="goCommu(commu)">{{commu.name}}
          </li>
        </ul>
      </h2>
        </div> -->

      

    <!-- <nav id="nav_main" class="nav">
      <ul class="list"> -->
        <!-- <router-link
          exact-active-class="is-selected"
          class="clickable item"
          tag="li"
          to="/"
          exact
        >Home</router-link> -->
        <!-- <router-link
          exact-active-class="is-selected"
          class="clickable item"
          tag="li"
          to="/about"
          exact
        >About</router-link>
        <router-link
          exact-active-class="is-selected"
          class="clickable item"
          tag="li"
          to="/contact"
          exact
        >Contact</router-link> -->
      <!-- </ul>
    </nav> -->
    <i id="burger" class="clickable fas fa-bars"></i>
    <LoginIcon />
  </header>
</template>

<script>

import axios from 'axios'


import LoginIcon from "@/components/LoginIcon.vue";

export default {
  components: {
    LoginIcon
  },

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
                this.commuFind = res.data;
                this.$router.push({name:'home'})

              
              
              })
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
  },
};
</script>

<style lang="scss" scoped>

.search > button {
       background: linear-gradient(#555, #444);
       color: white
      }


#header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid #2c3e50;
}
#logo {
  height: 48px;
}
#nav_main {
  a {
    font-weight: bold;
    color: #2c3e50;
  }
}

.search {
    display: none;
  }

@media (min-width: 320px) and (max-width: 600px) {
  #burger {
    display: block;
  }
  #nav_main {
    display: none;
  }

  .search {
    display: none;
  }
}
@media (min-width: 600px) {
  .search {
    display: block;
  }
  #burger {
    display: none;
  }
  #nav_main {
    display: block;
  }
}
</style>
