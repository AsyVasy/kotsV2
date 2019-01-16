<template>
  <footer id="footer">
    <ul>
   

        <li><a class="text" href="mailto:lounes_93@hotmail.com">Nous Contacter</a></li>

        <li> 
          <router-link class="text" to="/mentions">Mentions légales</router-link>
        </li>

        <li><i class="fab fa-facebook fa-2x"></i></li>
        
        <li><i class="fab fa-twitter-square fa-2x"></i></li>

    </ul>
  </footer>
  
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#footer {
  background: #2c3e50;
  color: white;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100vw;

  ul {
    list-style: none;
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    
    
    li {

      .text {
        color: white
      }
    }
  }
}


@media screen and (max-width:425px){

  #footer {
  background: #2c3e50;
  color: white;
  display: flex;
 

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-wrap: wrap;
    height: 150px;

    li {
    padding-top: 20px;
      height: 70px;
    }
   
    
    
  }
}




}
</style>
