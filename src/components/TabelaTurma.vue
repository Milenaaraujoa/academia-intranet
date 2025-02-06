<template>
  <div class="card-tabela">
    <section class="turmas">
      <details>
        <summary>Natação bebê</summary>
        <table>
          <tr>
            <th>Nome</th>
            <th>Faixa Etária</th>
            <th>Horário</th>
            <th>Ações</th>
          </tr>
          <tr v-for="turma in filteredTurmas('natacao_bb')" :key="turma.id">
            <td>{{ turma.nome_turma }}</td>
            <td>{{ turma.faixa_etaria }}</td>
            <td>{{ turma.horario }} - {{ turma.dia_semana }}</td>
            <td><button @click="$emit('editar', turma)">Editar</button></td>
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
            <th>Ações</th>
          </tr>
          <tr v-for="turma in filteredTurmas('natacao')" :key="turma.id">
            <td>{{ turma.nome_turma }}</td>
            <td>{{ turma.faixa_etaria }}</td>
            <td>{{ turma.horario }} - {{ turma.dia_semana }}</td>
            <td><button @click="$emit('editar', turma)">Editar</button></td>
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
            <th>Ações</th>
          </tr>
          <tr v-for="turma in filteredTurmas('hidro')" :key="turma.id">
            <td>{{ turma.nome_turma }}</td>
            <td>{{ turma.faixa_etaria }}</td>
            <td>{{ turma.horario }} - {{ turma.dia_semana }}</td>
            <td><button @click="$emit('editar', turma)">Editar</button></td>
            
          </tr>
        </table>
      </details>
    </section>
  </div>
</template>

<script>
import api from "@/services/api";

export default {
  name: "TabelaTurma",
  data() {
    return {
      turmas: [],
    };
  },
  methods: {
    async fetchTurmas() {
      if (this.turmas.length > 0) return; // Evita chamadas repetidas
      try {
        const response = await api.get("api/turmas/");
        this.turmas = response.data;
      } catch (error) {
        console.error("Erro ao buscar turmas:", error);
      }
    },
    filteredTurmas(modalidade) {
      return this.turmas.filter((turma) => turma.modalidade === modalidade);
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
    async deleteItem(turma) {
  if (!confirm(`Tem certeza que deseja excluir a turma ${turma.nome_turma}?`)) {
    return;
  }

  try {
    await api.delete(`/api/turmas/${turma.id}/`);
    this.turmas = this.turmas.filter(t => t.id !== turma.id); // Atualiza a lista localmente
  } catch (error) {
    console.error("Erro ao apagar turma:", error);
    alert("Erro ao apagar turma. Tente novamente.");
  }
}
  },
  mounted() {
    this.fetchTurmas();
  },
};
</script>
<style>
  .form {
    text-decoration: none;
  }
  
  .form a {
    color: #eeede7;
    text-decoration: none;
  }
  
  /*turmas*/
  .turmas {
    width: 100%;
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
  