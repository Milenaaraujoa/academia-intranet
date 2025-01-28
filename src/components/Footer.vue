<template>
    <footer>
       <p>Desenvolvido por <a class="fot" href="#" target="_blank">Alice Alves</a>, <a class="fot" href="http://instagram.com/miiandr" target="_blank">Milena de Araujo</a>, <a class="fot" href="http://instagram.com/viiz.sant" target="_blank">Vitoria Santana</a> - 2024</p>
</footer>
</template>


<script>
    export default {
    name: 'Footer'
}
</script>

<style scoped>
    footer {
    background-color: #087285;
    text-align: center;
    padding: 20px;
    font: 1.2rem 'Futura LT', sans-serif;
    color: #eeede7;
    margin-top: auto; 
}

.fot {
    font-weight: bold;
    font: 1.2rem 'Futura LT', sans-serif;
    text-decoration: none;
}

.fot:link,
.fot:visited {
    color: #FFF;
}

.fot:hover,
.fot:active {
    color: #EA6F07;
}

</style>