<template>
  <main id="app">
    <Header/>
    <transition name="moveInUp">
      <router-view/>
    </transition>  
    <Footer/>
  </main>
</template>
<script>
import Header from "@/views/partials/Header.vue";
import Footer from "@/views/partials/Footer.vue";

export default {
  components: {
    Header,
    Footer
  },
}
</script>

<style lang="scss">
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
* {
  box-sizing: border-box;
}
body {
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  width: 100%;
  overflow: hidden;
  // overflow-y: hidden;
  min-height: 100vh;
  // max-height: 100vh;
  max-width: 100vw;
  
  display: grid;
  grid-template-rows: 70px 1fr 150px;

  & > #header,
  & > #footer, {
    padding: 0 20px;
  }
}
.page {
  padding: 20px;
}
.clickable {
  cursor: pointer;
}
.nav .list {
  padding: 0;
  display: flex;
  list-style: none;
}
.nav .item:hover {
    color: darkorange;
}
.nav .item.is-selected {
  color: #42b983;
}
.nav .item::after {
  content:"  |  ";
  white-space: pre;
  color: #2c3e50;
}
.btn {
  border: 1px solid;
  cursor: pointer;
  height: 32px;
  max-width: 120px;
  outline: none;
}
.input {
  outline: none;
  outline-offset: 0;
  border: 1px solid;
  height: 32px;
  padding-left: 13px;
}
.success {
  color: #155724;
  background-color: #d4edda;
  border-color: #c3e6cb;
}
.error {
  color: #721c24 !important;
  background-color: #f8d7da !important;
  border-color: #f5c6cb !important;
}
.warning {
  color: #856404;
  background-color: #fff3cd;
  border-color: #ffeeba;
}
.info {
  color: #0c5460;
  background-color: #d1ecf1;
  border-color: #bee5eb;
}

.moveInUp-enter-active{
  animation: fadeIn .7s ease-in;
}
@keyframes fadeIn{
  0%{
    opacity: 0;
  }
  
  100%{
    opacity: 1;
  }
}
</style>
