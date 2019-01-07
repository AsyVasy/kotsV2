import axios from "axios";
// import auth from "./../utils/auth";

export default {
//   namespaced: true,
  state: {
    user_registered_community: ["user_registereaasad"],
    user_registered_communityByUser: ["user_registered_communityByUser"]
  },


  getters: {
    displayUser_registered(state) {
        return state.user_registered_community
      },
    displayUser_registeredByUser(state) {
        return state.user_registered_communityByUser
      },
  },


  mutations: {
    setUser_registeredByUser(state, user_registered_communityByUser) {
       state.user_registered_communityByUser = user_registered_communityByUser
   }
  },


  actions: {
   
    getUser_registered_community(ctx) {
      // console.log("ctx", ctx)
      axios.get("http://localhost:8080/api/v1/user_registered_community").then(res => {
        ctx.state.user_registered_community = res.data[1];
        // console.log("resuuuult", res);
      }).catch(err => {
        console.log(err);
      })
    },

     
        
      // getCompte_associeByUser(context, user) {
      //   return new Promise((resolve, reject) => {
          
      //     axios
      //     .post("http://localhost:8080/api/v1/compte_associe/:id", {
      //       user
      //     })
      //     .then(res => {
      //       auth.setLocalToken(res.data.token);
      //       context.commit("setCompteAssocieUser", res.data.user)
      //       console.log("resuuuult", res);
      //         resolve(res);
      //       })
      //       .catch(err => {
      //         reject(err);
      //       });
      //   });
      // },
  }
};
