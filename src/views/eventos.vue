<template>
        <div class="main">
            <h1 class="tituloturma">E V E N T O S</h1>
            <div class="conteudo">
                <div class="cardBoxevent">
                    <form @submit.prevent="submitForm">
                        <div class="form-group">
                            <div class="input-group">
                                <label for="nome">Nome:</label>
                                <input type="text" class="nome" id="nome" v-model="form.nome" required />
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
                                    <button type="button" class='buttonp'>Importar</button>
                                </div>
                            </div>
                            <div class="buttonp">
                                
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
            <button type="submit" class="btn-publicar">Publicar</button>
            <div class="eventoscard">
                <div class="evento1">
                    <img src="../assets/img/arraia.jpg" alt="Arraiá Tradicional">
                    <p>Texto com informações gerais</p>
                </div>
                <div class="evento2">
                    <img src="../assets/img/pascoa.jpg" alt="Carnaval Animado">
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
            this.showModal = true;
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

.container{
    position: relative;
    width: 100%;
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
    height: 30vh;
    margin-top: -1px;
}

.tituloturma {
    margin-top: -8px;
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
    margin-left: 20px;
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
.nome{
    margin-left: 7px;
}

button {
    background-color: #FF5722;
    color: white;
    padding: 0;
    width: 100px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font: 1rem "Futura LT Regular", sans-serif;
    margin-right: 50px;
    height: 32px;

}

.buttonea {
    text-align: center;
}

.buttonp {
    text-align: center;
    padding: 0px;
}

.button1 {
    text-align: right;
    position: right;
}
.btn-publicar{
    position: right;
    align-items: right;
    margin-left: 500px;
    padding: 5px;
}


/*=====================EVENTOS===================*/
.cardBoxevent{
    background-color: #087285;
    padding: 0;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    height: 40vh;
    margin-top: -1px;
    flex: 1 1 calc(50% - 40px);
}

.conteudo{
    display: flex;
    justify-content: space-between;
    gap: 20px;
    padding: 0;
    
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
    margin-top: 20px;
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
</style>