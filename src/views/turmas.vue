<template>
        <div class="main">
            <h1 class="tituloturma">T U R M A S</h1>
            <div class="cardBox">
                <form @submit.prevent="submitForm">
                    <div class="form-group">
                        <div class="input-group">
                            <label for="nome">Nome:</label>
                            <input type="text" id="nome" v-model="form.nome" required placeholder="Nome da Turma"/>
                        </div>
                        <div class="input-group">
                            <label for="modalidade" class="modalidade">Modalidade:</label>
                            <select v-model="form.modalidade" required>
                                <option value="">Selecione uma opção:</option>
                                <option value="natacao">Natação</option>
                                <option value="natacao_bb">Natação Bebê</option>
                                <option value="hidro">Hidroginástica</option>
                            </select>
                        </div>
                        <div class="input-row">
                            <div class="input-group">
                                <label for="horario">Horário:</label>
                                <input type="time" id="horario" v-model="form.horario" required/>
                            </div>
                            <div class="input-group">
                                <label for="diaSemana">Dia da Semana:</label>
                                <select v-model="form.diaSemana" required>
                                    <option value="">Selecione uma opção:</option>
                                    <option value="segunda">Segunda-Feira</option>
                                    <option value="terca">Terça-Feira</option>
                                    <option value="quarta">Quarta-Feira</option>
                                    <option value="quinta">Quinta-Feira</option>
                                    <option value="sexta">Sexta-Feira</option>
                                    <option value="sabado">Sábado</option>
                                </select>
                            </div>
                        </div>
                        <div class="input-row">
                            <div class="input-group">
                                <label for="idade">Faixa Etária:</label>
                                <select v-model="form.idade" required>
                                    <option value="">Selecione uma opção:</option>
                                    <option value="bebe1">6 meses a 2 anos - acompanhado*</option>
                                    <option value="bebe2">2 a 3 anos de idade</option>
                                    <option value="adapt1">3 a 5 anos de idade</option>
                                    <option value="adapt2">6 a 9 anos de idade</option>
                                    <option value="inia">9 aos 14 anos de idade</option>
                                    <option value="adulto">+15</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </form>
            </div>

            <div class="buttonp">
                <button @click="submitForm">Publicar</button>
            </div>
            <div class="card-tabela">
                <section class="turmas">
                    <details>
                        <summary>Natação bebê</summary>
                        <table>
                            <tr>
                                <th>Nome</th>
                                <th>Faixa Etária</th>
                                <th>Vagas</th>
                                <th>Horário</th>
                            </tr>
                            <tr>
                                <td>Natação para Bebê</td>
                                <td>6 meses a 2 anos - acompanhado</td>
                                <td>0</td>
                                <td>T &amp; Q - 11h</td>
                            </tr>
                        </table>
                    </details>
                    <details>
                        <summary>Natação</summary>
                        <table>
                            <tr>
                                <th>Categoria</th>
                                <th>Faixa Etária</th>
                                <th>Vagas</th>
                                <th>Horário</th>
                            </tr>
                            <tr>
                                <td>Adaptação I &amp; II</td>
                                <td>Adulto &amp; Infantil</td>
                                <td>0</td>
                                <td>Segunda à sábado Diurno</td>
                            </tr>
                        </table>
                    </details>
                    <details>
                        <summary>Hidroginástica</summary>
                        <table>
                            <tr>
                                <th>Categoria</th>
                                <th>Faixa Etária</th>
                                <th>Vagas</th>
                                <th>Horário</th>
                            </tr>
                            <tr>
                                <td>Hidroginástica</td>
                                <td>Terceira idade</td>
                                <td>0</td>
                                <td>Segunda à sábado Diurno</td>
                            </tr>
                        </table>
                    </details>
                    <div class="buttonea">
                        <button @click="editItem">Editar</button>
                        <button @click="deleteItem">Apagar</button>
                    </div>
                </section>
            </div>
        </div>

        <div class="bg2">
            <img src="/adm_dashboard/img/backazule.png" alt="" />
        </div>

        <div id="modal" class="modal" v-if="showModal">
            <div class="modal-content">
                <span class="close" @click="closeModal">&times;</span>
                <form id="editForm" @submit.prevent="submitEditForm">
                    <div class="form-groupmodal">
                        <div class="input-group">
                            <label for="nome">Nome:</label>
                            <input type="text" id="nome" v-model="editForm.nome" required placeholder="Nome da Turma"/>
                        </div>
                        <div class="input-group">
                            <label for="modalidade" class="modalidade">Modalidade:</label>
                            <select v-model="editForm.modalidade" required>
                                <option value="">Selecione uma opção:</option>
                                <option value="natacao">Natação</option>
                                <option value="natacao_bb">Natação Bebê</option>
                                <option value="hidro">Hidroginástica</option>
                            </select>
                        </div>
                        <div class="input-row">
                            <div class="input-group">
                                <label for="horario">Horário:</label>
                                <input type="time" id="horario" v-model="editForm.horario" required/>
                            </div>
                            <div class="input-group">
                                <label for="diaSemana">Dia da Semana:</label>
                                <select v-model="editForm.diaSemana" required>
                                    <option value="">Selecione uma opção:</option>
                                    <option value="segunda">Segunda-Feira</option>
                                    <option value="terca">Terça-Feira</option>
                                    <option value="quarta">Quarta-Feira</option>
                                    <option value="quinta">Quinta-Feira</option>
                                    <option value="sexta">Sexta-Feira</option>
                                    <option value="sabado">Sábado</option>
                                </select>
                            </div>
                        </div>
                        <div class="input-row">
                            <div class="input-group">
                                <label for="vagas">Vagas:</label>
                                <input type="number" id="vagas" v-model="editForm.vagas" min="0" required />
                            </div>
                            <div class="input-group">
                                <label for="idade">Faixa Etária:</label>
                                <select v-model="editForm.idade" required>
                                    <option value="">Selecione uma opção:</option>
                                    <option value="bebe1">6 meses a 2 anos - acompanhado*</option>
                                    <option value="bebe2">2 a 3 anos de idade</option>
                                    <option value="adapt1">3 a 5 anos de idade</option>
                                    <option value="adapt2">6 a 9 anos de idade</option>
                                    <option value="inia">9 aos 14 anos de idade</option>
                                    <option value="adulto">+15</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </form>
                <div class="card-tabela">
                    <section class="turmas">
                        <details>
                            <summary>Natação bebê</summary>
                            <table>
                                <tr>
                                    <th>Nome</th>
                                    <th>Faixa Etária</th>
                                    <th>Vagas</th>
                                    <th>Horário</th>
                                </tr>
                                <tr>
                                    <td>Natação para Bebê</td>
                                    <td>6 meses a 2 anos - acompanhado</td>
                                    <td>0</td>
                                    <td>T &amp; Q - 11h</td>
                                </tr>
                            </table>
                        </details>
                        <details>
                            <summary>Natação</summary>
                            <table>
                                <tr>
                                    <th>Categoria</th>
                                    <th>Faixa Etária</th>
                                    <th>Vagas</th>
                                    <th>Horário</th>
                                </tr>
                                <tr>
                                    <td>Adaptação I &amp; II</td>
                                    <td>Adulto &amp; Infantil</td>
                                    <td>0</td>
                                    <td>Segunda à sábado Diurno</td>
                                </tr>
                            </table>
                        </details>
                        <details>
                            <summary>Hidroginástica</summary>
                            <table>
                                <tr>
                                    <th>Categoria</th>
                                    <th>Faixa Etária</th>
                                    <th>Vagas</th>
                                    <th>Horário</th>
                                </tr>
                                <tr>
                                    <td>Hidroginástica</td>
                                    <td>Terceira idade</td>
                                    <td>0</td>
                                    <td>Segunda à sábado Diurno</td>
                                </tr>
                            </table>
                        </details>
                    </section>
                </div>
                <div class="buttonea">
                    <button @click="submitEditForm">Editar</button>
                    <button @click="deleteItem">Apagar</button>
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
                modalidade: '',
                horario: '',
                diaSemana: '',
                idade: ''
            },
            editForm: {
                nome: '',
                modalidade: '',
                horario: '',
                diaSemana: '',
                vagas: '',
                idade: ''
            },
            showModal: false
        };
    },
    methods: {
        submitForm() {
            // Lógica para submeter o formulário
        },
        submitEditForm() {
            // Lógica para submeter o formulário de edição
        },
        editItem() {
            this.showModal = true;
        },
        deleteItem() {
            // Lógica para apagar o item
        },
        closeModal() {
            this.showModal = false;
        }
    }
};
</script>

<style scoped>
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
