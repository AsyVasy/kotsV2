import axios from "axios";
import auth from "./../utils/auth";

export default {
  namespaced: true,
  state: {
    users: [],
    user: null,
    userLookingFor: null
  },
  getters: {
    all(state) {
      return state.users;
    },
    current(state) {
      return state.user;
    },
    getUser(state) {
      return state.userLookingFor
    }
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setUsers(state, users) {
      state.users = users;
    },
    unsetUser(state) {
      state.user = null;
    }
  },
  actions: {
    login(context, user) {
      return new Promise((resolve, reject) => {
        axios
          .post("/api/v1/user/login", {
            user
          })
          .then(res => {
            auth.setLocalToken(res.data.token);
            context.commit("setUser", res.data.user)
            resolve(res);
          })
          .catch(err => {
            reject(err);
          });
      });
    },

    // getUserLookingFor(ctx, id) {
    //   // console.log("ctx", ctx)
    //   axios.get(`http://localhost:8080/api/v1/user/${id}`).then(res => {
    //     ctx.state.userLookingFor = res.data;
    //     // console.log("resuuuult", res.data.$value);
    //   }).catch(err => {
    //     console.log(err);
    //   })
    // },


    getAll(context) {
      return new Promise((resolve, reject) => {
        axios
          .get("api/v1/user/").then(res => {
            context.commit("setUsers", res.data);
            resolve(res);
          })
          .catch(err => {
            reject(err);
          });
      });
    },
    register(context, data) {
        return new Promise((resolve, reject) => {
          axios.post("/api/v1/user", {
              data
          }).then(res => {
              resolve(res);
              
          }).catch(err => {
              // console.log(err);
              reject(err);
            });
        });
    }
  }
};
