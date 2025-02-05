<template> 
    <div id="nav">
        <div class="cabecalho">
            <router-link to="/" id="logo-url">
                <img :src="logo" id="logo" :alt="alt">
            </router-link>
            <div class="menu-toggle" id="menu-toggle" @click="toggleMenu">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div :class="['menu-items', { 'responsive': isMenuOpen }]">
                <router-link class="a-menu" to="/">Home</router-link>
                <router-link class="a-menu" to="/Modalidade">Modalidades</router-link>
                <router-link class="a-menu" to="/#h4">Eventos</router-link>
                <router-link class="a-menu" to="/Formulario">Formulário</router-link>
                <a class="a-menu" href="https://www.instagram.com/academia_aguavida/" target="_blank">Fale Conosco</a>
                <router-link class="a-menu" to="/login_user"><img src="../assets/img/icon_user.png" class="login-user"></router-link>
            </div>
        </div>
        <hr /> 
    </div>
</template>

<script>
export default {
    name: 'Navbar',
    props: ["logo", "alt"],
    data() {
        return {
            isMenuOpen: false
        };
    },
    methods: {
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen;
        }
    }
}
</script>

<style scoped>
/*menu*/
.cabecalho {
    display: flex;
    position: relative;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: #087285;
    width: 100%;
    height: 18dvh;
    padding-left: 5px; 
    padding-top: 19px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
}

#logo-url {
    margin-left: 250px;
}

#logo {
    width: 157px;
    height: 67px;
}

.menu-items {
    display: flex;
    flex-direction: row;
    padding-top: 10px;
    padding-right: 50px;
}

.a-menu {
    font: 1.2rem 'Anton', sans-serif;
    text-decoration: none;
    line-height: 20px;
    text-align: center;
    padding: 30px;
}

/* cor para quando o link for clicado */
.a-menu:visited,
.a-menu:link {
    color: #FFF;
}

/* cor para quando passar o mouse sobre o link */
.a-menu:hover,
.a-menu:active {
    color: #EA6F07;
}
.login-user{
    width: 40px;
    height: 40px;
    margin-top: -10px;
}

hr {
    border-color: #EA6F07;
    width: 100%;
    margin-top: 18dvh; /* Adjust to match the height of the header */
}

h1 {
    color: #087285;
    font-family: 'Lulo Clean One Bold';
    text-align: center;
    margin: auto;
}

h2 {
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

h4 {
    color: #087285;
    font-family: 'Futura LT Regular';
    margin-left: 25px;
    font-size: 1.3rem;
}

/* Responsividade para telas menores */
.menu-toggle {
    display: none;
    cursor: pointer;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.menu-toggle span {
    width: 30px;
    height: 3px;
    background-color: white;
    margin: 5px 0;
}

.menu-items.responsive {
    display: flex;
    flex-direction: column;
    width: 100%;
    text-align: center;
    position: absolute;
    top: 100%;
    left: 0;
    background-color: #087285;
    z-index: 1;
}

.menu-items.responsive .a-menu {
    display: block;
    background-color: #087285;
    width: 100%;
    padding: 15px;
    margin: 0;
}

/* Mostrar o botão de alternância do menu em telas menores */
@media (max-width: 768px) {
    .menu-toggle {
        display: flex;
    }
    .menu-items {
        display: none;
    }
    .menu-items.responsive {
        display: flex;
    }
    #logo-url {
        margin-left: 10px;
    }
}
</style>
