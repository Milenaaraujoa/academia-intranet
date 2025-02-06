<template>
  <div>
    <h1 id="3">Formulário</h1>

    <div class="form-box">
      <img class="img-logo" src="../assets/img/logo.png" />
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <div class="input-group">
            <label for="nome">Nome completo:</label><br />
            <input
              type="text"
              id="nome"
              v-model="form.nome"
              required
              placeholder="Nome Completo"
            />
            <br /><br />
          </div>
          <div class="input-group">
            <label for="cpf">CPF:</label><br />
            <input
              type="text"
              id="cpf"
              v-model="form.cpf"
              required
              placeholder="000.000.000-00"
              @blur="validarCpfHandler"
              @input="formatarCpf"
            />
            <br />
            <span v-if="cpfError" style="color: red">CPF inválido!</span><br />
          </div>
        </div>
        <div class="form-group">
          <div class="input-group">
            <label for="birthdate">Data de Nascimento:</label><br />
            <input type="date" id="datanasc" v-model="form.datanasc" /> <br /><br />
          </div>
          <div class="input-group">
            <label for="telefone">Telefone:</label><br />
            <input
              type="tel"
              id="telefone"
              v-model="form.telefone"
              required
              placeholder="(99)99999-9999"
            />
            <br /><br />
          </div>
        </div>
        <div class="form-group">
          <div class="input-group">
            <label for="nomeResponsavel">Nome do responsável:</label><br />
            <input
              type="text"
              id="nomeResponsavel"
              v-model="form.nomeResponsavel"
              required
              placeholder="Nome Completo"
            />
            <br /><br />
          </div>
          <div class="input-group">
            <label for="cpfResponsavel">Cpf do responsável:</label><br />
            <input
              type="text"
              id="cpfResponsavel"
              v-model="form.cpfResponsavel"
              placeholder="000.000.000-00"
              @blur="validarCpfHandler"
              @input="formatarCpf"
            />
            <br />
            <span v-if="cpfError" style="color: red">CPF inválido!</span><br />
          </div>
        </div>

        <div class="form-group">
          <div class="input-group">
            <label for="email">Email:</label><br />
            <input
              type="email"
              id="email"
              v-model="form.email"
              required
              placeholder=" fulano@gmail.com"
            />
            <br /><br />
          </div>
          <div class="input-group">
            <label for="cep">CEP:</label>
            <input
              type="text"
              id="cep"
              v-model="form.cep"
              maxlength="9"
              @blur="buscarEndereco"
            />
            <p v-if="cepError" style="color: red">CEP inválido</p>
          </div>
        </div>
        <div class="form-group">
          <div class="input-group">
            <label for="rua">Rua:</label>
            <input type="text" id="rua" v-model="form.rua" />
          </div>
          <div class="input-group">
            <label for="bairro">Bairro:</label>
            <input type="text" id="bairro" v-model="form.bairro" />
          </div>

          <div class="input-group">
            <label for="estado">Estado:</label>
            <input type="text" id="estado" v-model="form.estado" />
          </div>
          <div class="input-group">
            <label for="cidade">Cidade:</label>
            <input type="text" id="cidade" v-model="form.cidade" />
          </div>

          <div class="input-group">
            <label for="casa">Numero:</label>
            <input type="text" id="casa" v-model="form.casa" />
          </div>
        </div>
        <label for="nivel">Modalidade:</label>
        <select id="nivel" v-model="form.modalidade">
          <option value="Selecione">Selecione</option>
          <option value="natacao_bb">Natação bebê</option>
          <option value="natacao">Natação</option>
          <option value="hidro">Hidroginástica</option>
          <option value="evento">Evento</option>
        </select>
        <label for="turmas">Turmas:</label>
        <select id="turmas" v-model="form.turma">
          <option value="Selecione">Selecione</option>
          <option value="natacao_bb">Ter e Qui - 11:00 0 16:40 - 17:20</option>
          <option value="natacao">Sáb - 08:20 - 9h - 10:40 - 11:25</option>
        </select>

        <br />

        <div class="btn-container">
          <input type="submit" value="Enviar" />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        nome: '',
        cpf: '',
        datanasc: '',
        telefone: '',
        nomeResponsavel: '',
        cpfResponsavel: '',
        email: '',
        cep: '',
        rua: '',
        bairro: '',
        estado: '',
        cidade: '',
        casa: '',
        modalidade: 'Selecione',
        turma: 'Selecione'
      },
      cpfError: false,
      cepError: false
    };
  },
  methods: {
    formatarCpf() {
      let cpf = String(this.form.cpf).replace(/\D/g, ""); // Remove caracteres não numéricos

      if (cpf.length > 11) {
        cpf = cpf.substring(0, 11); // Garante que não passe de 11 números
      }

      if (cpf.length === 11) {
        cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
        cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
        cpf = cpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
      }

      this.form.cpf = cpf;
    },

    // Valida se o CPF tem todos os números repetidos (ex: 111.111.111-11)
    validarRepetido(cpf) {
      return new Set(cpf).size !== 1;
    },

    // Calcula e valida o primeiro dígito verificador do CPF
    validarPrimeiroDigito(cpf) {
      let sum = 0;
      for (let i = 0; i < 9; i++) {
        sum += cpf[i] * (10 - i);
      }
      const resto = (sum * 10) % 11;
      return resto < 10 ? cpf[9] == resto : cpf[9] == 0;
    },

    // Calcula e valida o segundo dígito verificador do CPF
    validarSegundoDigito(cpf) {
      let sum = 0;
      for (let i = 0; i < 10; i++) {
        sum += cpf[i] * (11 - i);
      }
      const resto = (sum * 10) % 11;
      return resto < 10 ? cpf[10] == resto : cpf[10] == 0;
    },

    // Validação completa do CPF
    validarCpf(cpf) {
      if (!cpf || typeof cpf !== "string") {
        return false;
      }

      cpf = cpf.replace(/\D/g, ""); // Remove caracteres não numéricos

      if (cpf.length !== 11) {
        return false;
      }
      if (!this.validarRepetido(cpf)) {
        return false;
      }
      if (!this.validarPrimeiroDigito(cpf)) {
        return false;
      }
      if (!this.validarSegundoDigito(cpf)) {
        return false;
      }
      return true;
    },

    // Chamada da validação ao interagir com o campo
    validarCpfHandler() {
      let cpf = this.form.cpf;

      if (!cpf) {
        this.cpfError = true;
        return;
      }

      cpf = cpf.replace(/\D/g, ""); // Remove caracteres não numéricos
      this.cpfError = !this.validarCpf(cpf);
    },

    formatarCep(cep) {
      return cep.replace(/^(\d{5})(\d{3})$/, "$1-$2");
    },

    buscarEndereco() {
      let cep = this.form.cep.replace(/\D/g, "");
      this.cepError = false;

      if (cep.length === 8) {
        cep = this.formatarCep(cep);
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
          .then((response) => response.json())
          .then((data) => {
            if (!data.erro) {
              this.form.rua = data.logradouro;
              this.form.bairro = data.bairro;
              this.form.cidade = data.localidade;
              this.form.estado = data.uf;
            } else {
              this.cepError = true;
            }
          })
          .catch(() => {
            this.cepError = true;
          });
      } else {
        this.cepError = true;
      }
    },

    // Formatação dos dados antes de enviar para a API
    formatarData(data) {
      if (!data) return null;
      const partes = data.split("/");
      if (partes.length === 3) {
        return `${partes[2]}-${partes[1]}-${partes[0]}`; // Converte "DD/MM/YYYY" para "YYYY-MM-DD"
      }
      return data;
    },

    async handleSubmit() {
      if (this.cpfError || this.cepError) {
        alert("Corrija os erros antes de enviar o formulário.");
        return;
      }

      try {
        // Criação de um objeto temporário com os dados formatados
        const alunoData = {
          ...this.form, // Copia os outros campos do formulário
          cpf_alunos: this.form.cpf.replace(/\D/g, ""), // Remove pontos e traço do CPF
          data_nascimento: this.formatarData(this.form.datanasc) // Converte a data para "YYYY-MM-DD"
        };

        const response = await fetch("http://127.0.0.1:8000/api/alunos/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(alunoData)
        });

        const responseData = await response.text(); // Captura a resposta do backend
        if (!response.ok) {
          throw new Error("Erro ao cadastrar aluno: " + responseData);
        }

        alert("Aluno cadastrado com sucesso!");
        this.resetForm();
      } catch (error) {
        alert(error.message);
      }
    },

    resetForm() {
      this.form = {
        nome: '',
        cpf: '',
        datanasc: '',
        telefone: '',
        nomeResponsavel: '',
        cpfResponsavel: '',
        email: '',
        cep: '',
        rua: '',
        bairro: '',
        estado: '',
        cidade: '',
        casa: '',
        modalidade: 'Selecione',
        turma: 'Selecione'
      };
    }
  }
};
</script>



<style>
/*FORMULÁRIO*/
.container {
  justify-content: center;
}

.form a {
  text-decoration: none;
  color: #fff;
}

.form a:link,
.form a:visited {
  color: #fff;
}

.form a:hover,
.form a:active {
  color: #ea6f07;
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
  color: #fff;
  background-color: #ea6f07;
  text-align: center;
  width: 30%;
  text-decoration: none;
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
  color: #02253b;
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

.container {
  justify-content: center;
}

.btn-container {
  text-align: center;
}

.form-box {
  background-color: #60b4c3;
  padding: 60px;
  border-radius: 10px;
  width: 700px;
  margin: auto;
  margin-top: 15px;
  margin-bottom: 15px;
  padding-bottom: 10px;
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
  color: #fff;
  background-color: #ea6f07;
  text-align: center;
  width: 20%;
  margin-bottom: 20px;
}

input[type="reset"] {
  margin-left: 4%;
}
</style>