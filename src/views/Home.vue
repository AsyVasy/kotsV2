<template>
  <section id="app">
     <div class="alert">
       <h2>Bienvenue sur King Of The Stats !</h2>
       <p class="intro">EXPLICATION DU SITE CONCEPT ET POURQUOI IL FAUT S INSCRIRE</p>
      <input type="search" placeholder="Rechercher une communauté ou un profil epic">
     <router-link to="/about"><h2>dashboard</h2></router-link>
    
    
    
    
     </div>
     

  </section>
</template>


<script>
export default {
 
  
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

#app {
    // width: 100vw;
    
    background: linear-gradient(rgba(102, 0, 255, 0.9), rgb(204, 0, 255));

    .alert {
        color: white;
        // margin: 20px 0px 0px 110px;
        border-radius: 10px;
        background-color: rgba(51, 51, 51, 0.839);
        width: 95vw;
        height: 100vh;
        margin: auto;
        overflow: auto;

        h2 {
          font-family: 'Burbank Big Condensed';
          font-size: 50px;
          text-align: center;
          color: white
          
        }

        .intro {
          width: 250px
        }

        input {
          width: auto
        }

        router-link {
           font-family: 'Burbank Big Condensed';
          font-size: 30px;
        }
    
    
    }
 
  }








  
  

  
</style>
