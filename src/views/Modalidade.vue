<template>
    <div class="container">
        <img src="img/modalidade.png" class="image"/>
        <div class="button-container">
            <router-link to="/home">
                <button>Realizar pré cadastro</button>
            </router-link>
        </div>
    </div>
</template>

<style scoped>
.container {
    position: relative;
    text-align: center;
}

.image {
    width: 100%;
    margin: 0;
}

.button-container {
    position: absolute;
    top: 83%;
    left: 50%;
    transform: translate(-50%, -50%);
}

button {
    cursor: pointer;
    width: 370px;
    height: 50px;
    background-color: #EA6F07;
    font: 1em 'Futura LT Regular';
    color: #fff;
    border: none;
    border-radius: 15px;
}

button:link, button:visited {
    background-color: #EA6F07;
}

button:hover, button:active {
    background-color: #087285;
}
</style>
