<template>
    <div class="main">
        <h1 class="tituloturma">E V E N T O S</h1>
        <div class="conteudo">
            <div class="cardBoxevent">
                <form @submit.prevent="submitForm">
                    <div class="form-group">
                        <div class="input-group">
                            <label for="nome">Nome:</label>
                            <input type="text" id="nome" v-model="form.nome_evento" required />
                        </div>
                        <div class="input-group">
                            <label for="vagas">Vagas:</label>
                            <input type="number" id="vagas" v-model="form.vagas" required />
                        </div>
                        <div class="input-group">
                            <label for="valor">Valor</label>
                            <input type="number" id="valor" step="0.01" v-model="form.valor" required />
                        </div>
                        <div class="input-group">
                            <label for="data_evento">Data</label>
                            <input type="date" id="data_evento" v-model="form.data_evento" required />
                        </div>
                    </div>
                    <button type="submit" class="btn-publicar">Publicar</button>
                </form>
            </div>
        </div>
        
        <div class="eventoscard">
            <div v-for="evento in eventos" :key="evento.id" class="evento">
                <img src="../assets/img/arraia.jpg" alt="Evento">
                <div class="evento-info">
                    <h3>{{ evento.nome_evento }}</h3>
                    <p class="exibir">Vagas: {{ evento.vagas }}</p>
                    <p class="exibir">Valor: R$ {{ evento.valor }}</p>
                    <p class="exibir">Data: {{ evento.data_evento }}</p>
                    <button @click="abrirModal(evento)">Editar</button>
                </div>
            </div>
        </div>
        <div id="modal" class="modal" v-if="showModal">
    <div class="modal-content">
      <span class="close" @click="closeModal">&times;</span>
      <form @submit.prevent="submitEditForm">
  <div class="form-groupmodal">
    <div class="input-group">
      <label for="nome">Nome:</label>
      <input type="text" id="nome" v-model="editForm.nome_evento" required />
    </div>
    <div class="input-group">
      <label for="vagas">Vagas:</label>
      <input type="number" id="vagas" v-model="editForm.vagas" required />
    </div>
    <div class="input-group">
      <label for="valor">Valor:</label>
      <input type="number" id="valor" step="0.01" v-model="editForm.valor" required />
    </div>
    <div class="input-group">
      <label for="data_evento">Data:</label>
      <input type="date" id="data_evento" v-model="editForm.data_evento" required />
    </div>
    <div class="buttonea">
      <button type="submit">Salvar</button>
      <button @click="deleteItem(editForm.id_evento)">Excluir</button>
    </div>
  </div>
</form>
    </div>
</div>
</div>
</template>

<script>
import api from "@/services/api";

export default {
  data() {
    return {
      form: {
        nome_evento: "",
        data: "",
        horario: ""
      },
      editForm: {
        id_evento: null,
        nome_evento: "",
        data: "",
        horario: ""
      },
      showModal: false,
      eventos: []
    };
  },
  methods: {
    abrirModal(evento) {
        this.editForm = { 
    id_evento: evento.id_evento,
    nome_evento: evento.nome_evento,
    vagas: evento.vagas,
    valor: evento.valor,
    data_evento: evento.data_evento
  }; // Preenche editForm com os dados do evento
    this.showModal = true;
  },
    async fetchEventos() {
      try {
        const response = await api.get("api/eventos/");
        this.eventos = response.data;
      } catch (error) {
        console.error("Erro ao buscar eventos:", error);
      }
    },
    async submitForm() {
      try {
        await api.post("api/eventos/", this.form);
        alert("Evento adicionado com sucesso!");
        this.fetchEventos();
        this.resetForm();
      } catch (error) {
        console.error("Erro ao adicionar evento:", error);
      }
    },
    async submitEditForm() {
      try {
        await api.put(`api/eventos/${this.editForm.id_evento}/`, this.editForm);
        alert("Evento editado com sucesso!");
        this.fetchEventos();
        this.closeModal();
      } catch (error) {
        console.error("Erro ao editar evento:", error);
      }
    },
    async deleteItem(id_evento) {
      try {
        if (confirm("Tem certeza que deseja excluir este evento?")) {
          await api.delete(`api/eventos/${id_evento}/`);
          alert("Evento excluído com sucesso!");
          this.fetchEventos();
          this.closeModal();
        }
      } catch (error) {
        console.error("Erro ao excluir evento:", error);
      }
    },
    editItem(evento) {
      this.editForm = { ...evento };
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
      this.resetEditForm();
    },
    resetForm() {
      this.form = { nome_evento: "", data: "", horario: "" };
    },
    resetEditForm() {
      this.editForm = { id_evento: null, nome_evento: "", data: "", horario: "" };
    }
  },
  mounted() {
    this.fetchEventos();
  }
};
</script>


<style scoped>
.eventoscard {
    display: flex;
    flex-wrap: wrap;
    gap: -1px;
    margin-top: 20px;
    padding-top: 10px;
}
.evento {
    background-color: #087285;
    border-radius: 10px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
    padding: 10px;
    width: 250px;
    text-align: center;
}
.evento img {
    width: 90%;
    height: 150px;
    object-fit: cover;
    border-radius: 10px;
    margin: auto;
    margin-top: -20px;
}
.evento-info {
    margin-top: 10px;
}
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
h3{
    font: 1rem "Futura LT Regular",sans-serif;
    color:#02253B;
}
.exibir{
    font: 0.8rem "Futura LT Regular",sans-serif;
    color:#ffff

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
    margin-left: 50px;
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
    margin-left: 800px;
    padding: 5px;
}


/*=====================EVENTOS===================*/
.cardBoxevent{
    background-color: #087285;
    padding: 0;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    height: 54vh;
    margin-top: -1px;
    flex: 1 1 calc(50% - 40px);
    margin-bottom: 20px;
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

/*======================MODAL=======================*/

/* Ajuste o modal para o mesmo tamanho do container */
.modal {
  display: block;
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
  background-color: #60b4c3;
  align-items: center;
  border-radius: 4%;
  border-end-end-radius: 4%;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #888;
  width: 100%;
  height: auto;
  max-height: 80%;
  overflow-y: auto;
}
.formodal {
  display: flex;
  gap: 100px;
  background-color: #02253b;
  border-radius: 4%;
  width: 100%;
  padding: 20px;
  margin-bottom: 10px;
}

.formodal input[type="text"],
input[type="date"],
input[type="time"] {
  height: 35px;
  margin: 5px;
}

.evento1_modal {
  background-color: #ccc;
  text-align: center;
  align-items: center;
  max-width: 50%;
  margin-bottom: 20px;
  align-items: center;
  border-radius: 3%;
  margin: 10px;
  height: 50vh;
}
.evento1_modal img {
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
</style>