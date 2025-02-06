<template>
  <div class="main">
    <h1 class="tituloturma">T U R M A S</h1>
    <div class="cardBox">
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <div class="input-group">
            <label for="nome">Nome:</label>
            <input
              type="text"
              id="nome"
              v-model="form.nome_turma"
              required
              placeholder="Nome da Turma" />
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
              <label for="horario" class="horario">Horário:</label>
              <input type="time" id="horario" v-model="form.horario" required />
            </div>
            <div class="input-group">
              <label for="diaSemana">Dia da Semana:</label>
              <select v-model="form.dia_semana" required>
                <option value="">Selecione uma opção:</option>
                <option value="Segunda">Segunda-Feira</option>
                <option value="Terça">Terça-Feira</option>
                <option value="Quarta">Quarta-Feira</option>
                <option value="Quinta">Quinta-Feira</option>
                <option value="Sexta">Sexta-Feira</option>
                <option value="Sábado">Sábado</option>
              </select>
            </div>
          </div>
          <div class="input-row">
            <div class="input-group">
              <label for="idade">Faixa Etária:</label>
              <select v-model="form.faixa_etaria" class="select" required>
                <option value="">Selecione uma opção:</option>
                <option value="6 meses a 2 anos - acompanhado">
                  6 meses a 2 anos - acompanhado*
                </option>
                <option value="2 a 3 anos de idade">2 a 3 anos de idade</option>
                <option value="3 a 5 anos de idade">3 a 5 anos de idade</option>
                <option value="6 a 9 anos de idade">6 a 9 anos de idade</option>
                <option value="9 aos 14 anos de idade">
                  9 aos 14 anos de idade
                </option>
                <option value="+15">+15</option>
              </select>
            </div>
          </div>
        </div>
      </form>
      
    </div>
    <div class="buttonp">
            <button type="submit" class="btn-publicar">Publicar</button>
          </div>
    <TabelaTurma @editar="editItem" />
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
          <input
            type="text"
            id="nome"
            v-model="editForm.nome_turma"
            required
            placeholder="Nome da Turma"
          />
        </div>
        <div class="input-group">
          <label for="modalidade">Modalidade:</label>
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
            <input type="time" id="horario" v-model="editForm.horario" required />
          </div>
          <div class="input-group">
            <label for="diaSemana">Dia da Semana:</label>
            <select v-model="editForm.dia_semana" required>
              <option value="Segunda">Segunda-Feira</option>
              <option value="Terça">Terça-Feira</option>
              <option value="Quarta">Quarta-Feira</option>
              <option value="Quinta">Quinta-Feira</option>
              <option value="Sexta">Sexta-Feira</option>
              <option value="Sábado">Sábado</option>
            </select>
          </div>
        </div>
        <div class="input-row">
          <div class="input-group">
            <label for="idade">Faixa Etária:</label>
            <select v-model="editForm.faixa_etaria" required>
              <option value="6 meses a 2 anos - acompanhado">6 meses a 2 anos - acompanhado*</option>
              <option value="2 a 3 anos de idade">2 a 3 anos de idade</option>
              <option value="3 a 5 anos de idade">3 a 5 anos de idade</option>
              <option value="6 a 9 anos de idade">6 a 9 anos de idade</option>
              <option value="9 aos 14 anos de idade">9 aos 14 anos de idade</option>
              <option value="+15">+15</option>
            </select>
          </div>
          <div class="buttonea">
            <button type="submit">Salvar</button>
            <button @click="deleteItem(editForm.id_turma)">Excluir</button>
          </div>
        </div>
      </div>
    </form>
  </div>
</div>
</template>

<script>
import api from "@/services/api";
import TabelaTurma from "@/components/TabelaTurma.vue";

export default {
  components: {
    TabelaTurma,
  },
  data() {
    return {
      exibirAcoes: true,
      form: {
        nome_turma: "",
        modalidade: "",
        horario: "",
        dia_semana: "",
        faixa_etaria: "",
      },
      editForm: {
        id_turma: null,
        nome_turma: "",
        modalidade: "",
        horario: "",
        dia_semana: "",
        faixa_etaria: "",
      },
      showModal: false,
      turmas: [],
    };
  },

  methods: {
    async fetchTurmas() {
  try {
    const response = await api.get("api/turmas/");
    this.turmas = response.data;
    console.log("Turmas carregadas:", this.turmas);
  } catch (error) {
    console.error("Erro ao buscar turmas:", error);
  }
},
    async submitForm() {
      try {
        await api.post("api/turmas/", this.form);
        alert("Turma adicionada com sucesso!");
        this.fetchTurmas();
        this.resetForm();
      } catch (error) {
        console.error("Erro ao adicionar turma:", error);
      }
    },
    async submitEditForm() {
  try {
    if (!this.editForm.id_turma) {
      console.error("ID da turma não encontrado");
      return;
    }

    console.log("Submitting edit form:", this.editForm);
    await api.put(`api/turmas/${this.editForm.id_turma}/`, this.editForm);

    alert("Turma editada com sucesso!");
    this.fetchTurmas(); // Atualiza a lista de turmas
    this.closeModal();
  } catch (error) {
    console.error("Erro ao editar turma:", error);
  }
},

async deleteItem(id_turma) {
  try {
    if (!id_turma) {
      console.error("ID da turma não encontrado");
      return;
    }

    console.log("Deleting item with id:", id_turma);

    if (confirm("Tem certeza que deseja excluir esta turma?")) {
      await api.delete(`api/turmas/${id_turma}/`);
      alert("Turma excluída com sucesso!");
      this.fetchTurmas(); // Atualiza a lista de turmas
      this.closeModal();
    }
  } catch (error) {
    console.error("Erro ao apagar turma:", error);
  }
},
    editItem(turma) {
      console.log("Editing item:", turma);
      if (!turma.id_turma) {
        console.error("ID da turma não encontrado no objeto turma:", turma);
        return;
      }
      this.editForm = { ...turma };
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
      this.resetEditForm();
    },
    resetForm() {
      this.form = {
        nome_turma: "",
        modalidade: "",
        horario: "",
        dia_semana: "",
        faixa_etaria: "",
      };
    },
    resetEditForm() {
      this.editForm = {
        id_turma: null,
        nome_turma: "",
        modalidade: "",
        horario: "",
        dia_semana: "",
        faixa_etaria: "",
      };
    },
    filteredTurmas(modalidade) {
      return this.turmas.filter((turma) => turma.modalidade === modalidade);
    },
  },
  mounted() {
    this.fetchTurmas();
  },
};
</script>

<style scoped>
.main {
  background-color: #f2eef0;
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

.cardbox,
.cardbox2 {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
}
.card1 {
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 0px 5px 1px #00000029;
  width: 30vw;
  height: 20vw;
  flex: 1 1 calc(50% - 40px);
  max-width: 100%;
  overflow: auto;
}

.card2 {
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 0px 5px 1px #00000029;
  width: 10vw;
  height: 20vw;
  flex: 1 1 calc(20% - 10px);
  max-width: 100%;
  overflow: auto;
}
.card3,
.card4 {
  background-color: #ffffff;
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
  .card1,
  .card2,
  .card3,
  .card4 {
    width: 45vw;
    height: 35vw;
  }
}

@media (max-width: 768px) {
  .card1,
  .card2,
  .card3,
  .card4 {
    width: 90vw;
    height: 40vw;
  }
}

.main {
  background-color: #f2eef0;
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


/* ------------------Turmas----------------- */

.cardBox {
  background-color: #087285;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  height: 55vh;
  margin-top: 0;
  margin-bottom: 20px;
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
  font: 1rem "Futura LT Regular";
  color: #ccc;
  margin: 0;
}

input,
select {
  font: 0.9rem "Futura LT Regular";
  color: #a3a3a3;
  border: 1px solid #ccc;
  border-radius: 7px;
  padding: 10px;
  box-sizing: border-box;
  width: 100%;
  margin-left: 30px;
}

.select {
  margin-left: -1px;
}

.nome {
  margin-left: 15px;
}
.modalidade {
  margin-right: -40px;
}

input[type="time"] {
  margin-left: 8px;
}

.horario {
  margin-right: 10px;
}

button {
  background-color: #ff5722;
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
  margin-top: -12px;
}

.button1 {
  text-align: right;
  position: right;
}
.btn-publicar {
  margin-left: 900px;
  margin-top: 20px;
}

/*=====================EVENTOS===================*/
.cardBoxevent {
  background-color: #087285;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  height: 55vh;
  margin-top: -1px;
  flex: 1 1 calc(50% - 40px);
  margin-right: 20px;
}

.conteudo {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  padding-left: 30px;
  padding-right: 30px;
}
.form-group {
  padding: 15px;
  justify-items: center;
  display: flex;
  flex-direction: column;
}

.eventoscard {
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
  gap: 10px;
  padding-left: 30px;
  padding-right: 30px;
}

.evento1,
.evento2 {
  background-color: #ccc;
  display: flex;
  max-width: 50%;
  margin-bottom: 20px;
  align-items: center;
  border-radius: 3%;
  margin: 10px;
  height: 20vh;
}

.evento1 img,
.evento2 img {
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
  max-width: 800px;
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

/*=============================MODAL TURMAS=======================*/

.form-groupmodal {
  gap: 100px;
  background-color: #087285;
  border-radius: 4%;
  width: 100%;
  padding: 20px;
  margin-bottom: 10px;
}
.form-groupmodal input[type="text"],
input[type="date"],
input[type="time"] {
  height: 35px;
  margin: 10px;
}
</style>
