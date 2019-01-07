import Vue from 'vue'
import Vuex from 'vuex'
// import product from "./product";
import user from "./user";
import compte_associe from "./compte_associe";
import user_registered_community from "./user_registered_community";
import community from "./community";
import message from "./message";
import axios from "axios" 


Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    // product,
    user,
    compte_associe,
    user_registered_community,
    community,
    message
  },
  state: {
    pseudoReSearch: null,
    platformResearch: null,
    users: ["user"],
    // community: ["communautés"],
    // messages: ["messages"],
    // compte_associe: ["compte_associe"],
    hashtag: ["hashtag"],
    // user_registered_community: ["user_registereaasad"],
    community_has_epic : ["community_has_epic"]
  },

  getters: {
    displayUsers(state) {
      // console.log("ici state", state)
      return state.users;
    },
    // displayCommunity(state) {
    //   return state.community
    // },
    // displayMessages(state) {
    //   return state.messages
    // },
    // displayCompte_associe(state) {
    //   return state.compte_associe
    // },
    displayHashtag(state) {
      return state.hashtag
    },
    // displayUser_registered(state) {
    //   return state.user_registered_community
    // },
    displayCommunity_has_epic(state) {
      return state.community_has_epic
    }
  },
  mutations: {
    "<MUTATION_PREFIX><EVENT_NAME>"() {
        // do something
    }
},
  actions: {
    
      "<ACTION_PREFIX><EVENT_NAME>"() {
          // do something
      },
  
    getUsers(ctx) {
      // console.log("ctx", ctx)
      axios.get("http://localhost:8080/api/v1/user").then(res => {
        ctx.state.users = res.data[1];
        // console.log("resuuuult", res.data[1]);
      }).catch(err => {
        console.log(err);
      })
    },

    // getcommunity(ctx) {
    //   // console.log("ctx", ctx)
    //   axios.get("http://localhost:8080/api/v1/community").then(res => {
    //     ctx.state.community = res;
    //     // console.log("resuuuult", res);
    //   }).catch(err => {
    //     console.log(err);
    //   })
    // },

    // getMessages(ctx) {
    //   // console.log("ctx", ctx)
    //   axios.get("http://localhost:8080/api/v1/message").then(res => {
    //     ctx.state.messages = res.data[1];
    //     // console.log("resuuuult", res.data[1]);
    //   }).catch(err => {
    //     console.log(err);
    //   })
    // },

    // getCompte_associe(ctx) {
    //   // console.log("ctx", ctx)
    //   axios.get("http://localhost:8080/api/v1/compte_associe").then(res => {
    //     ctx.state.compte_associe = res.data;
    //     // console.log("resuuuult", res);
    //   }).catch(err => {
    //     console.log(err);
    //   })
    // },

    

    getHashtag(ctx) {
      // console.log("ctx", ctx)
      axios.get("http://localhost:8080/api/v1/hashtag").then(res => {
        ctx.state.hashtag = res;
        // console.log("resuuuult", res);
      }).catch(err => {
        console.log(err);
      })
    },

    // getUser_registered_community(ctx) {
    //   // console.log("ctx", ctx)
    //   axios.get("http://localhost:8080/api/v1/user_registered_community").then(res => {
    //     ctx.state.user_registered_community = res.data[1];
    //     // console.log("resuuuult", res);
    //   }).catch(err => {
    //     console.log(err);
    //   })
    // },
    getCommunity_has_epic(ctx) {
      // console.log("ctx", ctx)
      axios.get("http://localhost:8080/api/v1/community_has_epic").then(res => {
        ctx.state.community_has_epic = res.data[1];
        // console.log("resuuuult", res);
      }).catch(err => {
        console.log(err);
      })
    }
  }
});
