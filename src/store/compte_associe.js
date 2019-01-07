import axios from "axios";
// import auth from "./../utils/auth";

export default {
//   namespaced: true,
  state: {
    compte_associe: ["compte_associe"],
    compte_associeUser: ["compte_associeUser"],
    compte_associeByCommunity: ["compte_associeByCommunity"]
  },


  getters: {
      displayCompte_associe(state) {
    return state.compte_associe
  },
      displayCompte_associeUser(state) {
    return state.compte_associeUser
  },
      displayCompte_associeByCommunity(state) {
    return state.compte_associeByCommunity
  },
  },


  mutations: {
    setCompteAssocieUser(state, compte_associeUser) {
       state.compte_associeUser = compte_associeUser
   }
  },

  
  actions: {
   
    // getCompte_associe(ctx) {
    //     // console.log("ctx", ctx)
    //     axios.get("http://localhost:8080/api/v1/compte_associe").then(res => {
    //       ctx.state.compte_associe = res.data;
    //       console.log("getCompte_associe", res.data);
    //     }).catch(err => {
    //       console.log(err);
    //     })
    //   }, 

      getCompte_associeByCommunity(ctx, id) {
        // console.log("ctx", ctx)
        axios.get(`http://localhost:8080/api/v1/compte_associe/community/${id}`).then(res => {
          ctx.state.compte_associeByCommunity = res.data;
          // console.log("resuuuult", res.data.$value);
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
