<template>
  <section id="app">
      <div class="tab">
        <Community class="community" v-bind:communityHere='this.$route.params.commu'></Community>
      
        <Selected class="select"></Selected>
    
          <Chat class="chat" v-bind:communityHere='this.$route.params.commu'></Chat> 
          <!-- <Profil class="profil" ></Profil> -->


</div>

  </section>
</template>


<script>
import Community from '@/components/Community.vue'
import Chat from '@/components/Chat.vue'
// import Profil from '@/components/Profil.vue'
import Selected from '@/components/Selected.vue'
export default {
  components: {
    Community,
    Chat,
    // Profil,
    Selected,
  },


  // methods: {
  //   coucou() {
  //     console.log(this.$route.params.commu)
  //   }
  // },
  
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


.tab {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}

  


.community {
  // position: absolute;
  // left: 0;
  // margin: 50px
}
.profil {
  // position: absolute;
  // right: 10px;
    // margin: 50px

}

.selected {
  // position: absolute;
  // right: 50px;
  // top: 450px
    // margin: 50px

}

.chat {
  // position: absolute;
  // left: 700px
    // margin: 50px

}

@media screen and (max-width: 768px) {
  #app {
    .community {
      margin-top: 1rem;
      width: 300px
    }
    .selected {
      width: 300px
    }

    .chat {
      margin-bottom: 1rem
    }
  }
}


  
</style>
