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
          <div class="buttonp">
            <button @click="submitForm" class="btn-publicar">Publicar</button>
          </div>
        </div>
      </form>
    </div>

    <div class="card-tabela">
      <section class="turmas">
        <details>
          <summary>Natação bebê</summary>
          <table>
            <tr>
              <th>Nome</th>
              <th>Faixa Etária</th>
              <th>Horário</th>
            </tr>
            <tr
              v-for="turma in filteredTurmas('natacao_bb')"
              :key="turma.id"
              @click="editItem(turma)">
              <td>{{ turma.nome_turma }}</td>
              <td>{{ turma.faixa_etaria }}</td>
              <td>{{ turma.horario }} - {{ turma.dia_semana }}</td>
            </tr>
          </table>
        </details>
        <details>
          <summary>Natação</summary>
          <table>
            <tr>
              <th>Nome</th>
              <th>Faixa Etária</th>
              <th>Horário</th>
            </tr>
            <tr
              v-for="turma in filteredTurmas('natacao')"
              :key="turma.id"
              @click="editItem(turma)">
              <td>{{ turma.nome_turma }}</td>
              <td>{{ turma.faixa_etaria }}</td>
              <td>{{ turma.horario }} - {{ turma.dia_semana }}</td>
            </tr>
          </table>
        </details>
        <details>
          <summary>Hidroginástica</summary>
          <table>
            <tr>
              <th>Nome</th>
              <th>Faixa Etária</th>
              <th>Horário</th>
            </tr>
            <tr
              v-for="turma in filteredTurmas('hidro')"
              :key="turma.id"
              @click="editItem(turma)">
              <td>{{ turma.nome_turma }}</td>
              <td>{{ turma.faixa_etaria }}</td>
              <td>{{ turma.horario }} - {{ turma.dia_semana }}</td>
            </tr>
          </table>
        </details>
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
            <input
              type="text"
              id="nome"
              v-model="editForm.nome_turma"
              required
              placeholder="Nome da Turma" />
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
              <input
                type="time"
                id="horario"
                v-model="editForm.horario"
                required />
            </div>
            <div class="input-group">
              <label for="diaSemana">Dia da Semana:</label>
              <select v-model="editForm.dia_semana" required>
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
              <select v-model="editForm.faixa_etaria" required>
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
        <div class="buttonea">
          <button type="submit">Salvar</button>
          <button type="button" @click="deleteItem(editForm.id_turma)">
            Apagar
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import api from "@/services/api";

export default {
  data() {
    return {
      form: {
        nome_turma: "",
        modalidade: "",
        horario: "",
        dia_semana: "",
        faixa_etaria: "",
      },
      editForm: {
        id: null,
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
        this.fetchTurmas(); // Atualize a lista de turmas
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
        await api.delete(`api/turmas/${id_turma}/`);
        this.fetchTurmas(); // Atualize a lista de turmas
        this.closeModal();
      } catch (error) {
        console.error("Erro ao apagar turma:", error);
      }
    },
    editItem(turma) {
      console.log("Editing item:", turma);
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
        id: null,
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