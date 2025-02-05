<template>
     <div id="app">
    <Menu v-if="$route.meta.showMenu !== false" />
    <NavBar v-if="$route.meta.showNavbar !== false" :logo="logo_src" />
    <RouterView/>
    <Footer v-if="$route.meta.showFooter !== false" />
  </div>
</template>

<script>
import NavBar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import Menu from './components/Menu.vue'
import logo from '@/assets/img/logo.png'


export default {
  components: {
    NavBar,
    Footer,
    Menu
  },
  data(){
    return{
      logo_src: logo,
      app_name: 'Academia Água Vida'
    }
  }
}
</script>

<style lang="scss">

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

html, body {
    height: 100%;
    margin: 0;
    display: flex;
    flex-direction: column;
}

body {
    background-color: #F2EEF0;
    font-size: 80%;
    flex: 1;
}

.app-container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

.content {
    flex: 1;
}

/* O conteúdo principal precisa ocupar o espaço restante antes do footer */
main {
    flex: 1;
    width: 100%;
}
hr {
    border-color: #EA6F07;
    width: 100%;
}
h1{
    color:#087285;
    font-family: 'Lulo Clean One Bold';
    text-align: center;
    margin: auto;
}
h2{
    color: #FFFFFF;
    background-color: #087285;
    border-radius: 7px;
    font-family: 'Futura LT Regular';
    text-align: center;
    width: 554px;
    margin: auto;
    padding: 10px;
    margin-top: 10px;
    margin-bottom: 30px;
}
h4{
    color:#087285;
    font-family: 'Futura LT Regular';
    margin-left: 25px;
    font-size: 1.3rem;
}
</style>
