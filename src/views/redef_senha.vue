<template>
    <div class="container">
    <div class="top-bar">
        <a href="https://www.academiaaguavida.com.br/"><img src="../assets/img/casinha_icon.png" alt="Home"></a>
    </div>

    <div class="login-container-wrapper">
        <div class="login-container">
            <div class="img-logo">
                <img src="../assets/img/logo.png" alt="Logo Academia">
            </div>
            <h3>Redefinir senha</h3>
            <form @submit.prevent="handleSubmit">
                <p>Informe o e-mail para qual deseja redefinir a sua senha.</p>

                <label for="email">Seu email de acesso:</label>
                <input type="email" id="email" name="email" placeholder="fulano@gmail.com" required>

                <router-link to="/login_user" class="forgot-password">Voltar ao Login?</router-link>

                <button>
            <router-link to="/senha" class="reset-password">Enviar</router-link></button>
            </form>
        </div>
    </div>

    <div class="bottom-bar"></div>
</div>
</template>

<style scoped>
       .img-logo img {
            width: 100%;
            max-width: 200px;
            display: block;
            margin: auto;
            margin-bottom: 20px;
        }

        h3 {
            font: 1.6rem 'Futura LT', sans-serif;
            font-weight: 700;
            color: #FFFFFF;
            text-align: center;
        }

        p {
            font: 1rem 'Futura LT Regular', sans-serif;
            color: #e8e8e8;
            text-align: center;
        }

        .top-bar, .bottom-bar {
            height: 40px;
            background-color: #087285;
            width: 100vw;
            position: relative;
        }

        .top-bar {
            position: sticky;
            top: 0;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            padding-right: 20px;
        }

        .bottom-bar {
            position: fixed;
            bottom: 0;
        }

        .top-bar img {
            width: 30px;
        }

        .login-container-wrapper {
            background-color: #087285;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            width: 90%;
            max-width: 500px;
            padding: 20px;
            margin: 70px auto; /* Centraliza horizontalmente */
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .login-container h3 {
            margin-bottom: 20px;
        }

        .login-container label {
            font: 1rem 'Futura LT Regular', sans-serif;
            color: #e8e8e8;
            display: block;
            margin-bottom: 5px;
        }

        .login-container input {
            width: 100%;
            padding: 10px;
            margin: 8px 0;
            border-radius: 7px;
            border: none;
        }

        .login-container button {
            font: 1rem 'Futura LT Regular';
            background-color: #EA6F07;
            color: #e8e8e8;
            padding: 10px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            width: 100%;
            margin-top: 10px;
            text-align: center;
        }

        .forgot-password {
            margin-top: 10px;
            font: 0.8rem 'Futura LT Regular', sans-serif;
            text-decoration: none;
            color: #e8e8e8;
            text-align: center;
            display: block;
        }

        a {
            text-decoration: none;
            color: #e8e8e8;
        }

        @media (min-width: 768px) {
            .login-container-wrapper {
                padding: 40px;
            }

            .login-container button {
                width: 50%;
                margin-left: 25%;
            }
        }
</style>

<script>
export default {
  methods: {
    handleSubmit() {
      // Handle form submission logic here
      console.log('Form submitted');
    }
  }
}
</script>
