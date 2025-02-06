<template>
    <div class="main">
      <div class="maincontainer">
        <div class="card">
          <div class="title">
            <h1>R E L A T Ó R I O</h1>
          </div>
          <hr />
          <div class="content">
            <div class="graficos">
              <div class="grafico1">
                <canvas ref="chartPie"></canvas>
              </div>
              <div class="grafico2">
                <canvas ref="chartBar"></canvas>
              </div>
            </div>
            <section class="relatorio">
              <details v-for="(modalidade, index) in modalidades" :key="index">
                <summary>{{ modalidade }}</summary>
                <table>
                  <tr>
                    <th>Nome</th>
                    <th>Email</th>
                    <th>Telefone</th>
                    <th>Turma & Horário</th>
                  </tr>
                  <tr v-for="(aluno, idx) in alunosFiltrados(modalidade)" :key="idx">
                    <td>{{ aluno.nome }}</td>
                    <td>{{ aluno.email }}</td>
                    <td>{{ aluno.telefone }}</td>
                    <td>{{ aluno.modalidade }} - {{ aluno.horario }}</td>
                  </tr>
                </table>
              </details>
            </section>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import api from "@/services/api";
  import { ref, onMounted } from "vue";
  import Chart from "chart.js/auto";
  
  export default {
    name: "Relatorio",
    setup() {
      const modalidades = ref([]);
      const alunos = ref([]);
      const chartPie = ref(null);
      const chartBar = ref(null);
  
      const fetchAlunos = async () => {
        try {
          const response = await api.get("api/alunos/");
          alunos.value = response.data;
  
          // Extrai modalidades únicas
          modalidades.value = [...new Set(response.data.map(aluno => aluno.modalidade))];
  
          // Atualiza os gráficos com os novos dados
          renderCharts();
        } catch (error) {
          console.error("Erro ao buscar alunos: ", error);
        }
      };
  
      const alunosFiltrados = (modalidade) => {
        return alunos.value.filter(aluno => aluno.modalidade === modalidade);
      };
  
      const renderCharts = () => {
        if (!chartPie.value || !chartBar.value) return;
  
        const ctxPie = chartPie.value.getContext("2d");
        const ctxBar = chartBar.value.getContext("2d");
  
        // Dados para os gráficos
        const modalidadesLabels = modalidades.value;
        const modalidadesData = modalidadesLabels.map(modalidade =>
          alunosFiltrados(modalidade).length
        );
  
        // Gráfico de pizza
        new Chart(ctxPie, {
          type: "pie",
          data: {
            labels: modalidadesLabels,
            datasets: [{
              label: "Distribuição de Alunos por Modalidade",
              data: modalidadesData,
              backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
            }],
          },
          options: { responsive: true }
        });
  
        // Gráfico de barras
        new Chart(ctxBar, {
          type: "bar",
          data: {
            labels: modalidadesLabels,
            datasets: [{
              label: "Quantidade de Alunos por Modalidade",
              data: modalidadesData,
              backgroundColor: "#36A2EB",
            }],
          },
          options: { responsive: true }
        });
      };
  
      onMounted(fetchAlunos);
  
      return { modalidades, alunosFiltrados, chartPie, chartBar };
    },
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
    height: 96px;
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

</style>