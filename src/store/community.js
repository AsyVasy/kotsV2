import axios from "axios";
// import auth from "./../utils/auth";

export default {
//   namespaced: true,
  state: {
    community: ["communautés"],
    communitySearch: {}
  },


  getters: {
    displayCommunity(state) {
        return state.community
      },
    displayCommunityLookingFor(state) {
        return state.communitySearch
      },
  },


//   mutations: {
//     setCompteAssocieUser(state, compte_associeUser) {
//        state.compte_associeUser = compte_associeUser
//    }
//   },

  
  actions: {
   
    getcommunity(ctx) {
        // console.log("ctx", ctx)
        axios.get("http://localhost:9999/api/v1/community").then(res => {
          ctx.state.community = res;
          // console.log("resuuuult", res);
        }).catch(err => {
          console.log(err);
        })
      },

      

     
        
      // getCompte_associeByUser(context, user) {
      //   return new Promise((resolve, reject) => {
          
      //     axios
      //     .post("http://localhost:9999/api/v1/compte_associe/:id", {
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
