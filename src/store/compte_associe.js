import axios from "axios";
// import auth from "./../utils/auth";

export default {
//   namespaced: true,
  state: {
    compte_associe: ["compte_associe"],
    compte_associeUser: ["compte_associeUser"]
  },
  getters: {
      displayCompte_associe(state) {
    return state.compte_associe
  },
      displayCompte_associeUser(state) {
    return state.compte_associeUser
  },
  },
  mutations: {
    setCompteAssocieUser(state, compte_associeUser) {
       state.compte_associeUser = compte_associeUser
   }
  },
  actions: {
   
    getCompte_associe(ctx) {
        // console.log("ctx", ctx)
        axios.get("http://localhost:9999/api/v1/compte_associe").then(res => {
          ctx.state.compte_associe = res.data;
          console.log("resuuuult", res);
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
