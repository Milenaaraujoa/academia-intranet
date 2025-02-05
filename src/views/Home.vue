<template>
    <section>
      <h1 id="3">Turmas</h1>
      <div class="turmas">
        <details>
          <summary>Natação bebê</summary>
          <table>
            <thead>
              <tr>
                <th>Categoria</th>
                <th>Faixa Etária</th>
                <th>Vagas</th>
                <th>Horário</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Natação para Bebê</td>
                <td>6 meses a 2 anos - acompanhado</td>
                <td>0</td>
                <td>T &amp; Q - 11h</td>
              </tr>
            </tbody>
          </table>
        </details>
        <details>
          <summary>Natação</summary>
          <table>
            <thead>
              <tr>
                <th>Categoria</th>
                <th>Faixa Etária</th>
                <th>Vagas</th>
                <th>Horário</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Adaptação I &amp; II</td>
                <td>Adulto &amp; Infantil</td>
                <td>0</td>
                <td>Segunda à sábado Diurno</td>
              </tr>
            </tbody>
          </table>
        </details>
        <details>
          <summary>Hidroginástica</summary>
          <table>
            <thead>
              <tr>
                <th>Categoria</th>
                <th>Faixa Etária</th>
                <th>Vagas</th>
                <th>Horário</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Hidroginástica</td>
                <td>Terceira idade</td>
                <td>0</td>
                <td>Segunda à sábado Diurno</td>
              </tr>
            </tbody>
          </table>
        </details>
      </div>
    </section>
  
    <div id="4" class="containerform">
      <h2 class="form"> <router-link to="/Formulario">
              Formulário de Inscrição
            </router-link></h2>
    </div>
  
    <h4 id="h4">CONHEÇA NOSSOS EVENTOS</h4>
  
    <div class="carousel-container">
      <div class="carousel-wrapper" ref="carouselWrapper">
        <div class="carousel-slide">
          <img src="../assets/img/arraia.jpg" alt="Arraiá Tradicional">
          <div class="caption">ARRAIÁ</div>
        </div>
        <div class="carousel-slide">
          <img src="../assets/img/pascoa.jpg" alt="Carnaval Animado">
          <div class="caption">PÁSCOA</div>
        </div>
        <div class="carousel-slide">
          <img src="../assets/img/olimpiada.jpg" alt="Festival de Música">
          <div class="caption">OLIMPÍADA</div>
        </div>
      </div>
  
      <!-- Botões de navegação -->
      <a class="prev" @click="moveCarousel(-1)">&#10094;</a>
      <a class="next" @click="moveCarousel(1)">&#10095;</a>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        slideIndex: 0,
        visibleSlides: 3,
      };
    },
    methods: {
      moveCarousel(n) {
        const slidesWrapper = this.$refs.carouselWrapper;
        const slides = slidesWrapper.children;
        const totalSlides = slides.length;
        const slideWidth = 100 / this.visibleSlides;
  
        // Previne movimento enquanto o slide está sendo animado
        if (slidesWrapper.style.transitionDuration !== '0.5s') {
          slidesWrapper.style.transitionDuration = '0.5s';
        }
  
        this.slideIndex += n;
  
        // Ajustar slideIndex para que ele rode dentro dos limites
        if (this.slideIndex >= totalSlides) {
          this.slideIndex = 0;
        } else if (this.slideIndex < 0) {
          this.slideIndex = totalSlides - 1;
        }
  
        const offset = -this.slideIndex * slideWidth;
        slidesWrapper.style.transform = `translateX(${offset}%)`;
      },
    },
  };
  </script>
  
  <style scoped>
  .form {
    text-decoration: none;
  }
  
  .form a {
    color: #eeede7;
    text-decoration: none;
  }
  
  /*turmas*/
  .turmas {
    width: 80%;
    margin: auto;
    margin-top: 30px;
  }
  
  section details summary {
    font: 1.5rem 'Futura LT', cursive;
    background-color: #60B4C3;
    padding: 2%;
    border-radius: 9px;
    margin-bottom: 9px;
  }
  
  /*tabela das turmas*/
  table {
    border-collapse: collapse;
    width: 100%;
    margin: 10px auto;
    background-color: #60B4C3;
    margin-top: -16px;
  }
  
  th {
    font: 1.5rem 'Futura LT', cursive;
    color: #02253B;
  }
  
  td {
    font: 0.9rem 'Futura LT';
    color: #02253B;
  }
  
  th, td {
    padding: 10px;
    text-align: center;
    border-bottom: 1px solid #02253B;
    border-right: 1px solid #02253B;
  }
  
  th:last-child, td:last-child {
    border-right: none; /* Remova a borda à direita para a última célula de cada linha */
  }
  
  tr:last-child th, tr:last-child td {
    border-bottom: none; /* Remova a borda inferior para a última linha */
  }
  
  /*Carrossel eventos*/
  .carousel-container {
    position: relative;
    max-width: 100%;
    margin: auto;
    overflow: hidden;
  }
  
  .carousel-wrapper {
    display: flex;
    transition: transform 0.5s ease;
  }
  
  .carousel-slide {
    min-width: 33.33%;
    box-sizing: border-box;
    margin: 17px;
    background-color: #A3A3A3;
    padding: 30px;
    border-radius: 10px;
  }
  
  .carousel-slide img {
    width: 100%;
    height: 40vh;
    display: block;
    border-radius: 10px;
    object-fit: cover;
  }
  
  .caption {
    color: #02253B;
    font-family: 'Futura LT Regular';
    font-weight: 700;
    text-align: center;
    background-color: #A3A3A3;
    text-decoration: none;
    font-size: 16px;
    padding: 10px;
    cursor: pointer;
  }
  
  a {
    text-decoration: none;
  }
  
  /* Botões de navegação */
  .prev, .next {
    cursor: pointer;
    position: absolute;
    top: 50%;
    width: auto;
    padding: 16px;
    margin-top: -22px;
    color: white;
    font-weight: bold;
    font-size: 18px;
    transition: 0.6s ease;
    border-radius: 0 3px 3px 0;
    user-select: none;
  }
  
  .next {
    right: 0;
    border-radius: 3px 0 0 3px;
  }
  
  .prev {
    left: 0;
  }
  
  .prev:hover, .next:hover {
    background-color: rgba(0,0,0,0.8);
  }
  
  /* Responsividade */
  @media (max-width: 768px) {
    .carousel-slide {
      min-width: 50%;
    }
  }
  
  @media (max-width: 480px) {
    .carousel-slide {
      min-width: 100%;
    }
  }
  
  /*FORMULÁRIO*/
  .containerform {
    justify-content: center;
  }
  
  .form a:link, .form a:visited {
    color: #FFF;
  }
  
  .form a:hover, .form a:active {
    color: #EA6F07;
  }
  
  .btn-container {
    text-align: center;
    margin-top: 25px;
  }
  
  .btn-container a {
    font-family: "Futura LT Regular";
    padding: 2% 4%;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    color: #FFF;
    background-color: #EA6F07;
    text-align: center;
    width: 30%;
  }
  
  .form-box img {
    width: 150px;
    margin-left: 200px;
    justify-items: center;
    margin-top: -20px;
    margin-bottom: 30px;
  }
  
  label {
    font: 1rem 'Futura LT', cursive;
    color: #02253B;
  }
  
  input[type="date"] {
    font: 0.9rem 'Futura LT', cursive;
    width: 100%;
    padding: 8px;
    margin: 8px 0;
    border-radius: 5px;
    border: 0;
    box-sizing: border-box;
  }
  
  .form-group {
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
  }
  
  .input-group {
    flex: 1;
    margin-right: 10px; /* Espaçamento entre os campos, opcional */
  }
  
  .input-group:last-child {
    margin-right: 0; /* Remove o espaçamento para o último item */
  }
  
  #mensagem-cep {
    font-size: 14px;
    color: red;
  }
  
  .banner_form {
    margin: 0;
    padding: 0;
    zoom: 0;
  }
  
  .banner_form img {
    width: 100%;
    height: fit-content;
  }
  
  .form-box {
    background-color: #60B4C3;
    padding: 60px;
    border-radius: 10px;
    width: 700px;
    margin: auto;
    margin-top: 30px;
  }
  
  .container h2 {
    background-color: #087285;
    color: white;
    padding: 25px;
    border-radius: 5px;
    box-shadow: 8px 5px 5px #a1a1a1;
  }
  
  input[type="text"],
  input[type="email"],
  input[type="tel"],
  select {
    font: 0.9rem 'Futura LT', cursive;
    width: 100%;
    padding: 8px;
    margin: 8px 0;
    border-radius: 5px;
    border: 0;
    box-sizing: border-box;
  }
  
  select {
    font: 0.9rem 'Futura LT';
    color: #747373;
  }
  
  input[type="submit"],
  input[type="reset"] {
    padding: 2%;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin: 1%;
    color: #FFF;
    background-color: #EA6F07;
    text-align: center;
    width: 20%;
    margin-bottom: 20px;
  }
  
  input[type="reset"] {
    margin-left: 4%;
  }
  </style>
  