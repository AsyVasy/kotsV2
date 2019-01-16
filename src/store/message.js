import axios from "axios";
// import auth from "./../utils/auth";

export default {
//   namespaced: true,
  state: {
    messages: ["messages"],
    messageByCommunity: ["messageByCommunity"]
  },


  getters: {
    displayMessages(state) {
        return state.messages
      },
    displayMessagesByCommunity(state) {
        return state.messageByCommunity
      },
  },

  
  actions: {

    getMessages(ctx) {
        // console.log("ctx", ctx)
        axios.get("http://dd6694207e094518a1d100f5b2317a08.testmyurl.ws/api/v1/message").then(res => {
          ctx.state.messages = res.data[1];
          // console.log("resuuuult", res.data[1]);
        }).catch(err => {
          console.log(err);
        })
      },



      getMessagesByCommunity(ctx, id) {
        // console.log("ctx", ctx)
        axios.get(`http://dd6694207e094518a1d100f5b2317a08.testmyurl.ws/api/v1/message/commu/${id}`).then(res => {
          ctx.state.messageByCommunity = res.data;
          // console.log("resuuuult", res.data.$value);
        }).catch(err => {
          console.log(err);
        })
      },
   
 
  }
};
