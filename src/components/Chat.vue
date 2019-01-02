<template>
    <div class="chat">
        <h2 class="title">Chat</h2>
        <div class="conversation" >
            <!-- <h2>{{communityHere}}</h2> -->
            <ul v-for="(message, p) in messages" :key="p">
                <li class="message" >{{message.message}}</li>
                <li class="sender"   > {{message.name}}</li>
            </ul>
        </div>
        <form action="/search">
            <input type="text" maxlength="100" v-model="messageToSubmit"> 
            <button type="submit" @click.stop.prevent="submit">Envoyer</button>
        </form>
    </div>
</template>

<script>
import axios from "axios"
export default {
    // sockets: {
    //     connect: function () {
    //         console.log('socket connected')
    //     },
    //     customEmit: function (data) {
    //         console.log('this method was fired by the socket server. eg: io.emit("customEmit", data)')
    //     }
    // },
    data() {
        return {
            messageToSubmit: ""
        }
    },
    name: "chat",

    props: ['communityHere'],

    methods: {
        submit() {
            axios.post("http://localhost:9999/api/v1/message",{
                "message" : this.messageToSubmit ,
                "id_user" : this.infos.id,
                "id_community" : this.communityHere.id_community
            })
            .then(res => {
                console.log(res);
                 
                  this.$store.dispatch("getMessagesByCommunity", this.communityHere.id_community)
            

            }
            )
            
        }
    
        
        
    },
 
    
    computed: {
        messages() {
                return this.$store.getters.displayMessagesByCommunity;
            },
            infos() {
            return this.$store.getters["user/current"]
        },
        
    },
    created() {
        this.$store.dispatch("getMessagesByCommunity", this.communityHere.id_community)

    }
}
</script>


<style lang="scss" scoped>
        /* width */
    ::-webkit-scrollbar {
        width: 10px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        background: #f1f1f1; 
        border-radius: 10px

    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: #888; 
        border-radius: 10px

    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: #555; 
    }

    .title {
                                font-family: 'Burbank Big Condensed';

    }
    .chat {
        margin: 20px 0px 0px 0px;
        border-radius: 10px;
        background-color: rgba(51, 51, 51, 0.839);
        width: 300px;
        height: 300px;
        color: white;
        // overflow: auto;
        .conversation {
            overflow: auto;
            height: 200px;
            background-color: #663366;
        }
        h2 {
                font-size: 35px;
            }
        ul {
            list-style: none;
            cursor: pointer;
            .message {
                font-family: 'Burbank Big Condensed';
                background: #999999;
                border-radius: 10px;
                margin: 0 15px 0 15px;
                height: auto;
                padding: 5px 0 5px 0;
                font-size: 20px
            }
            .sender {
                font-size: 10px;
                height: auto;
                width: 100px;
                margin: 2px 0 15px 15px
            }
        }
        input {
            border-radius: 10px;
                background:white ;
                font-family: 'Burbank Big Condensed';
                font-size: 25px;
                width: 150px;
                margin: 10px
        }
            button {
                border-radius: 10px;
                background:white ;
                font-family: 'Burbank Big Condensed';
                font-size: 25px;
                margin: 10px;
                transition: .5s
            }
            button:hover {
                background: rgba(0, 0, 0, 0.5);
                color: white;
                transition: .5s
            }
    };
</style>

