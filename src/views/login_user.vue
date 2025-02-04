<template>
    <div class="container">
        <div class="top-bar">
            <a href="https://www.academiaaguavida.com.br/"><img src="img/casinha_icon.png" alt="" /></a>
        </div>

        <div class="login-container-wrapper">
            <div class="img-logo">
                <img src="img/logo.png" />
            </div>
            <div class="login-container">
                <h3>ACESSE SUA CONTA:</h3>
                <form @submit.prevent="login">
                    <label for="email">Email:</label>
                    <input type="email" id="email" v-model="email" placeholder="fulano@gmail.com" required />

                    <label for="password">Senha:</label>
                    <input type="password" id="password" v-model="password" placeholder="***********" required />

                    
                    <router-link to="/redef_senha" class="forgot-password">Esqueceu sua senha?</router-link>

                    
                        <button>
                        <router-link to="/adm_dashboard" class="btn" >Entrar</router-link>
                    </button>
                        
                </form>
            </div>
        </div>

        <div class="bottom-bar"></div>
    </div>

</template>

<script>
import api from '@/services/api.js';

export default {
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        async login() {
            try {
                const response = await api.post('/api/auth/login', {
                    email: this.email,
                    password: this.password
                });

                const token = response.data.token;
        localStorage.setItem('token', token);
        alert('Login realizado com sucesso!');
        // Redirecionar para a página principal ou outra página
        this.$router.push('/home');
            } catch (error) {
                console.error('Erro ao fazer login:', error);
        alert('Erro ao fazer login. Verifique suas credenciais.');
            }
        }
    }
}
</script>

<style scoped>

    .top-bar,
    .bottom-bar {
        height: 6vh;
        background-color: #087285;
        position: fixed;
        width: 100vw;
        left: 0;
    }

    .top-bar {
        top: 0;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        padding-right: 20px;
    }

    .top-bar img {
        width: 30px;
    }

    .bottom-bar {
        bottom: 0;
    }

    .login-container-wrapper {
        background-color: #087285;
        border-radius: 8px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        width: 35%;
        max-width: 500px;
        padding: 2rem;
        margin: 6vh auto 0 auto; /* Adjust margin to center content vertically below the top bar */
        position: relative;
        top: 6vh; /* Push content below the top bar */
    }

    .img-logo img {
        width: 30%;
        display: block;
        margin: 0 auto 2rem auto;
    }

    h3 {
        font: 1.6rem "Futura LT Regular", sans-serif;
        font-weight: 700;
        color: #e8e8e8;
        text-align: center;
    }

    .login-container label {
        font: 1rem "Futura LT Regular", sans-serif;
        color: #e8e8e8;
        display: block;
        margin: 1.5rem 0 0.5rem;
    }

    .login-container input {
        width: 100%;
        padding: 10px;
        border-radius: 7px;
        border: none;
    }

    .login-container button {
        font: 1rem "Futura LT Regular";
        background-color: #ea6f07;
        color: #e8e8e8;
        padding: 10px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        width: 100%;
        margin-top: 1.5rem;
        text-align: center;
        text-decoration: none;
    }
    .btn{
        color: aliceblue;
        text-decoration: none;
    }

    span a {
        font: 1rem "Futura LT Regular";
        background-color: #ea6f07;
        color: #e8e8e8;
    }

    .forgot-password {
        font: 0.9rem "Futura LT Regular", sans-serif;
        text-decoration: none;
        color: #e8e8e8;
        display: block;
        margin-top: 1rem;
        text-align: center;
    }

    /* Responsividade */
    @media (max-width: 768px) {
        .login-container-wrapper {
            width: 90%;
            padding: 1.5rem;
        }

        h3 {
            font-size: 1.4rem;
        }

        .login-container label {
            font-size: 0.9rem;
        }

        .login-container button {
            font-size: 0.9rem;
        }
    }
</style>
