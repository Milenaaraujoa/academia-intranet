<template>
    <div>
        <div class="bg3">
            <img src="/adm_dashboard/img/backlaranja.png" alt="" />
        </div>

        <div class="container">
            <div class="navigation">
                <img src="img/logo.png" alt="" />
                <ul>
                    <li>
                        <router-link to="/index">
                            <span class="title">Página Inicial</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/relatorio">
                            <span class="title">Relatórios</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/eventos">
                            <span class="title">Eventos</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/turmas">
                            <span class="title">Turmas</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/login_user">
                            <span class="title">Logout</span>
                        </router-link>
                    </li>
                </ul>
                <div class="bg1">
                    <img src="/adm_dashboard/img/backazulc.png" alt="" />
                </div>
            </div>
        </div>

        <div class="main">
            <h1 class="tituloturma">E V E N T O S</h1>
            <div class="conteudo">
                <div class="cardBoxevent">
                    <form @submit.prevent="submitForm">
                        <div class="form-group">
                            <div class="input-group">
                                <label for="nome">Nome:</label>
                                <input type="text" id="nome" v-model="form.nome" required />
                            </div>
                            <div class="input-group">
                                <label for="tipo">Tipo: </label>
                                <input type="text" id="tipo" v-model="form.tipo" required />
                            </div>
                            <div class="input-group">
                                <label for="valor">Valor</label>
                                <input type="number" id="valor" v-model="form.valor" required />
                            </div>
                            <div class="input-group bottom-row">
                                <label for="horario">Data</label>
                                <input type="date" id="horario" v-model="form.date" required />
                                <div class="input-group bottom-row">
                                    <label for="horario">Horário:</label>
                                    <input type="time" id="horario" v-model="form.horario" required />
                                </div>
                                <label for="importar">Importar Imagem: </label>
                                <div class="buttonp">
                                    <button type="button">Importar</button>
                                </div>
                            </div>
                            <div class="buttonp">
                                <button type="submit">PUBLICAR</button>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="card2">
                    <div class="calendario">
                        <div class="mes-ano">
                            S E T E M B R O 2024
                        </div>
                        <div class="setas">
                            <span class="ant-mes" @click="changeMonth(-1)">❮</span>
                            <span class="prox-mex" @click="changeMonth(1)">❯</span>
                        </div>
                        <table class="nome-mes">
                            <thead>
                                <tr>
                                    <th>Mo</th>
                                    <th>Tu</th>
                                    <th>We</th>
                                    <th>Th</th>
                                    <th>Fr</th>
                                    <th>Sa</th>
                                    <th>Su</th>
                                </tr>
                            </thead>
                            <tbody class="dias">
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td>1</td>
                                    <td>2</td>
                                    <td>3</td>
                                    <td>4</td>
                                    <td>5</td>
                                </tr>
                                <tr>
                                    <td>6</td>
                                    <td>7</td>
                                    <td>8</td>
                                    <td class="disponivel">9</td>
                                    <td>10</td>
                                    <td class="ocupado">11</td>
                                    <td>12</td>
                                </tr>
                                <tr>
                                    <td>13</td>
                                    <td>14</td>
                                    <td>15</td>
                                    <td>16</td>
                                    <td>17</td>
                                    <td>18</td>
                                    <td>19</td>
                                </tr>
                                <tr>
                                    <td>20</td>
                                    <td>21</td>
                                    <td>22</td>
                                    <td>23</td>
                                    <td>24</td>
                                    <td>25</td>
                                    <td class="inativo">26</td>
                                </tr>
                                <tr>
                                    <td>27</td>
                                    <td>28</td>
                                    <td>29</td>
                                    <td>30</td>
                                    <td>31</td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                        <p class="legenda"> &#128308; Sem vagas &#128994; Dias disponíveis &#x26AB; Dia de eventos</p>
                    </div>
                </div>
            </div>
            <div class="eventoscard">
                <div class="evento1">
                    <img src="img/arraia.jpg" alt="Arraiá Tradicional">
                    <p>Texto com informações gerais</p>
                </div>
                <div class="evento2">
                    <img src="img/pascoa.jpg" alt="Carnaval Animado">
                    <p>Texto com informações gerais</p>
                </div>
            </div>
            <div class="buttonea">
                <button @click="editEvent">Editar</button>
                <button @click="deleteEvent">Apagar</button>
            </div>
        </div>
        <div class="bg2">
            <img src="/adm_dashboard/img/backazule.png" alt="" />
        </div>
        <div id="modal" class="modal" v-if="showModal">
            <div class="modal-content">
                <span class="close" @click="closeModal">&times;</span>
                <div class="formodal">
                    <form class="form-group-evento">
                        <label for="nome">Nome:</label>
                        <input type="text" id="edit-nome" v-model="editForm.nome" />

                        <label for="tipo">Tipo:</label>
                        <input type="text" id="edit-tipo" v-model="editForm.tipo" />

                        <label for="horario">Horário:</label>
                        <input type="time" id="edit-horario" v-model="editForm.horario" />

                        <label for="valor">Valor:</label>
                        <input type="text" id="edit-valor" v-model="editForm.valor" />

                        <label for="data">Data:</label>
                        <input type="date" id="edit-data" v-model="editForm.data" />
                        <label for="importar">Importar Imagem: </label>

                        <div class="buttonp">
                            <button type="button">Importar</button>
                        </div>
                    </form>
                    <div class="evento1_modal">
                        <img src="img/arraia.jpg" alt="Arraiá Tradicional">
                        <p>Texto com informações gerais</p>
                    </div>
                </div>
                <div class="buttonea">
                    <button @click="editEvent">Editar</button>
                    <button @click="deleteEvent">Apagar</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            form: {
                nome: '',
                tipo: '',
                valor: '',
                date: '',
                horario: ''
            },
            editForm: {
                nome: '',
                tipo: '',
                valor: '',
                data: '',
                horario: ''
            },
            showModal: false
        };
    },
    methods: {
        submitForm() {
            // Handle form submission
        },
        changeMonth(direction) {
            // Handle month change
        },
        editEvent() {
            // Handle event edit
        },
        deleteEvent() {
            // Handle event delete
        },
        closeModal() {
            this.showModal = false;
        }
    }
};
</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}


:root{
    --blue: #087285;
    --white: #fff;
    --gray: #F2EEF0;
    --black1: #222;
    --black2: #999;
    --orange: #FF5722;
}

body {
    min-height: 100vh;
    overflow-x: hidden;
    background-color: #087285;
}


.bg1{
    width: 500px;
    position: absolute;
    left: 0;     
    bottom: 0;
    z-index: -1;
    margin-left: -40px;
}
.bg2{
    width: 300px;
    position: absolute;
    right: 0;  
    bottom: 0; 
    z-index: -1;
    margin-right: -80px;

}

.bg3{
    width: 300px;
    position: absolute;
    right: 0;   
    top: 0; 
    margin-top: -60px;
    margin-right: -80px;
}


.container{
    position: relative;
    width: 100%;
}
/*================navigation==============*/
.navigation{
    position: fixed;
    width: 250px;
    height: 100%;
    background-color: var(--blue);
    transition: 0.5s;
    overflow: hidden;
}
img{
    width: 80%;
    margin: 10px;
    padding-top: 50px;
    margin-left: 40px;
}


.navigation ul{
    top: 0;
    left: 0;
    width: 100%;
    margin-left: 40px;
    text-align: center;
    margin-top: 40px;
}

.navigation ul li{
    position: relative;
    width: 100%;
    list-style: none;
    padding-left: 40px;
    font-family: 'Anton';
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;
}

.navigation ul li:hover,
.navigation ul li.hovered{
    background-color: var(--gray);
}

.navigation ul li a{
    position: relative;
    display: block;
    width: 100%;
    display: flex;
    text-decoration: none;
    color: var(--white);
}

.navigation ul li:hover a,
.navigation ul li.hovered a{
    color: var(--blue);
}

.navigation ul li a .title{
    position: relative;
    display: block;
    padding: 0 10px;
    height: 60px;
    line-height: 60px;
    text-align: start;
    white-space: nowrap;
}



/*----------------------curve outsite------------*/
.navigation ul li:hover a::before,
.navigation ul li.hovered a::before{
    content: "";
    position: absolute;
    right: 0;
    top: -50px;
    width: 50px;
    height: 50px;
    background-color: transparent;
    border-radius: 50%;
    box-shadow: 35px 35px 0 10px var(--gray);
    pointer-events: none;
}

.navigation ul li:hover a::after,
.navigation ul li.hovered a::after, ul li a:target{
    content: "";
    position: absolute;
    right: 0;
    bottom: -50px;
    width: 50px;
    height: 50px;
    background-color: transparent;
    border-radius: 50%;
    box-shadow: 35px -35px 0 10px var(--gray);
    pointer-events: none;
}

.main{
    background-color: #F2EEF0;
    width: calc(100% - 300px); 
    height: calc(100% - 40px);
    position: absolute;
    left: 250px; 
    z-index: 1; 
    padding: 20px; 
    top: 20px;
    border-radius: 30px;
    overflow: auto;
    
}

.cardbox, .cardbox2 {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap; 
    gap: 20px;
    
}
.card1{
    background-color: #FFFFFF;
    border-radius: 10px;
    box-shadow: 0px 0px 5px 1px #00000029;
    width: 30vw;
    height: 20vw;
    flex: 1 1 calc(50% - 40px); 
    max-width: 100%; 
    overflow: auto;
}

.card2{
    background-color: #FFFFFF;
    border-radius: 10px;
    box-shadow: 0px 0px 5px 1px #00000029;
    width: 10vw;
    height: 20vw;
    flex: 1 1 calc(20% - 10px); 
    max-width: 100%; 
    overflow: auto;
}
.card3, .card4 {
    background-color: #FFFFFF;
    border-radius: 10px;
    box-shadow: 0px 0px 5px 1px #00000029;
    width: 27vw;
    height: 20vw;
    flex: 1 1 calc(30% - 20px); 
    max-width: 100%; 
    overflow: auto;
    margin-top: 20px;
}

@media (max-width: 1024px) {
    .card1, .card2, .card3, .card4 {
        width: 45vw; 
        height: 35vw;
    }
}

@media (max-width: 768px) {
    .card1, .card2, .card3, .card4 {
        width: 90vw; 
        height: 40vw;
    }
}

.main {
    background-color: #F2EEF0;
    width: calc(100% - 300px); 
    height: calc(100% - 40px);
    position: absolute;
    left: 250px; 
    z-index: 1; 
    padding: 20px; 
    top: 20px;
    border-radius: 30px;
    display: flex;
    flex-direction: column; 
}
/*=========== relatorio =============*/
h1{
    font: 2rem "Futura LT Regular",sans-serif;
    color:#02253B;
    margin-left: 60px;
    margin-bottom: 10px;
    

}
hr{
    width: 100%;
    height: 1px;
    border: 0px;
    border-top: 3px solid #F4AF5E;
}
.grafics {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 250px;
}
.graficos {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-bottom: 20px;
  }
 .grafico1, .grafico2 {
    flex: 1;
    width: 45%; 
    height: 300px; 
  }
  
.grafico1 {
    margin-left: 70px; 
  }
  
.grafico2 {
    margin-left: 0; 
    width: 100%; 
    height: auto; 
}
canvas {
    max-width: 50%;
    height: 150px;
  }

section details summary {
    font: 1.5rem 'Futura LT', cursive;
    color: #087285;
    background-color: #D9D9D9;
    padding: 1%;
    border-radius: 10px;
    margin-bottom: 10px;
}

table {
    border-collapse: collapse;
    align-items: center;
    width: 90%;
    margin: 10px auto;
    background-color: #D9D9D9; 
    margin-top:-10px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    
  }

  th{
    font: 1.1rem 'Futura LT', cursive;
    color: #087285;
    border-top: 1px solid #60B4C3;
  }
  td{
    font: 0.9rem 'Futura LT';
    color: #02253B;
  }

  th, td {
    padding: 10px;
    text-align: center;
    border-bottom: 1px solid #60B4C3; 
    border-right: 1px solid #60B4C3; 
  }
  th:last-child, td:last-child {
    border-right: none; /* Remova a borda à direita para a última célula de cada linha */
  }

  tr:last-child th, tr:last-child td {
    border-bottom: none; /* Remova a borda inferior para a última linha */
  }


/*Calendário*/


.legenda {
    justify-content: center;
    align-items: center;
    display: flex;
    font: 0.4em 'futura LT Regular';
}


.calendario{
    background-color: #fff;
    box-shadow: 0 4px 8px #CCC;
    transition: 0.1s;
    padding: 2px;
    border-radius: 8px;
    border: none;
    width: 100%;
    text-align: center;
}

.calendario td,th{
    border-right: none;
    border-bottom: none;
}

.calendario:hover {
    box-shadow: 0 8px 16px #CCC;

}

.mes-ano, .setas{
    display: inline-block;
}

.mes-ano{
    margin-right:30%;
    font: 1.0rem 'Futura LT Regular', sans-serif;
    font-weight: bold;
    padding: 5px;
}
.nome-mes, .nome-mes th{

    background-color: #FFF;
    font: 0.8rem 'Futura LT Regular', sans-serif;
    font-weight: bold;
    border: none;
}
.dias td{
    padding: 12px;
    font-size: 10px;
}

.disponivel{
    background-color: #61E831;
    border-radius: 50%;
    box-sizing: content-box;
}

.ocupado{
    background-color: #FB3F4A;
    border-radius: 50%;
}

.inativo{
    background-color: #A3A3A3;
    border-radius: 50%;
}

.turmas{
    padding: 10px;
}

.slide1, .slide2{
    background-color: #CCC;
    display: flex;
    max-width: 100%;
    margin-bottom: 20px;
    align-items: center;
    border-radius: 3%;
    margin: 10px;
}

.slide1 img, .slide2 img{
    max-width: 30%;
    align-items: center;
    border-radius: 10px;
    padding-top: 0;
}
p{
    font-family: 'Futura LT Regular';
    color: #087285;
    font-size: bold;
}

/* ------------------Turmas----------------- */


.cardBox {
    background-color: #087285;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    height: 50vh;
    margin-top: -1px;
}

.tituloturma {
    margin-top: -10px;
}

.form-group {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.input-row {
    display: flex;
    gap: 20px;
}

.input-group {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    flex: 1;
}

label {
    font: 1rem 'Futura LT Regular';
    color: #CCC;
    margin: 0;
}


input,
select {
    font: 0.9rem 'Futura LT Regular';
    color: #A3A3A3;
    border: 1px solid #ccc;
    border-radius: 7px;
    padding: 10px;
    box-sizing: border-box;
    width: 100%;
    margin-left: 30px;
}

.nome {
    margin-left: 15px;
}
.modalidade{
    margin-right: -40px;
}

input[type="time"]{
    margin-left: 8px;
}

button {
    background-color: #FF5722;
    color: white;
    padding: 9px 9px;
    width: 100px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font: 0.8rem "Futura LT Regular", sans-serif;
    margin-right: 50px;
    height: 32px;

}

.buttonea {
    text-align: center;
}

.buttonp {
    text-align: right;
}

.button1 {
    text-align: right;
    position: right;
}



/*=====================EVENTOS===================*/
.cardBoxevent{
    background-color: #087285;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    height: 55vh;
    margin-top: -1px;
    flex: 1 1 calc(50% - 40px);
    margin-right: 20px;
    
}

.conteudo{
    display: flex;
    justify-content: space-between;
    gap: 20px;
    padding-left: 30px;
    padding-right: 30px;
    
}
.form-group{
    padding: 15px;
    justify-items: center;
    display: flex;
    flex-direction: column;
}


.eventoscard{
    display: flex;
    justify-content: space-between;
    margin-top: 50px;
    gap: 10px;
    padding-left: 30px;
    padding-right: 30px;
}


.evento1, .evento2{
    background-color: #CCC;
    display: flex;
    max-width: 50%;
    margin-bottom: 20px;
    align-items: center;
    border-radius: 3%;
    margin: 10px; 
    height: 20vh; 
}


.evento1 img, .evento2 img{
    width: 40%;
    height: 20vh;
    margin-left: 3px;
    border-radius: 20%;
    padding: 10px;
    object-fit: cover;
}


/*======================MODAL=======================*/

/* Ajuste o modal para o mesmo tamanho do container */
.modal {
    display: none;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;

    background-color: rgba(0, 0, 0, 0.5); /* Fundo preto com opacidade */
  }
  
  /* Definir o conteúdo do modal para ter o mesmo tamanho do container */
  .modal-content {
    background-color: #60B4C3;
    align-items: center;
    border-radius: 4%;
    border-end-end-radius: 4%;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #888;
    width: 100%; 
    max-width: 800px; 
    height: auto;
    max-height: 80%; 
    overflow-y: auto; 
    
  }
  .formodal{
    display: flex;
    gap: 100px;
    background-color: #02253B;
    border-radius: 4%;
    width: 100%;
    padding: 20px;
    margin-bottom: 10px;
  }

.formodal input[type="text"],input[type="date"], input[type="time"]{
    height: 35px;
    margin: 5px;
}

.evento1_modal{
    background-color: #CCC;
    text-align: center;
    align-items: center;
    max-width: 50%;
    margin-bottom: 20px;
    align-items: center;
    border-radius: 3%;
    margin: 10px; 
    height: 50vh; 
}
.evento1_modal img{
    align-items: center;
    width: 90%;
    margin: 0;
    margin-bottom: 50px;
    border-radius: 10%;
}
  /* Estilo para o botão de fechar */
  .close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
  }
  
  .close:hover,
  .close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }

  /*=============================MODAL TURMAS=======================*/

.form-groupmodal{
    gap: 100px;
    background-color: #087285;
    border-radius: 4%;
    width: 100%;
    padding: 20px;
    margin-bottom: 10px;
}
.form-groupmodal input[type="text"],input[type="date"], input[type="time"]{
    height: 35px;
    margin: 10px;
}
</style>