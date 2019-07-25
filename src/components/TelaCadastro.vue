<template>
  <div id="temp">
    <div class="cadastro">
      <form @submit.prevent="save">
        <fieldset>
          <h1>Cadastro</h1>
          <label>Nome:</label>
          <input type="text" class="campo" v-model="usuario.username" />
          <br />
          <label>Email:</label>
          <input type="text" class="campo" v-model="usuario.email" />
          <br />
          <label>Senha:</label>
          <input type="password" class="campo" v-model="usuario.password" />
          <br />
          <label>Confirma a senha:</label>
          <input type="password" class="campo" v-model="usuario.password_confirmation">
          <input type="submit" class="btn-submit" value="Salvar">
        </fieldset>
      </form>
    </div>
  </div>
</template>

<script>
import User from '../services/usr'
export default {
  data() {
    return {
        cont: 0,
        usuario: {
          username: '',
          email: '',
          password: '',
          password_confirmation: ''
        }
    };
  },
  props: {
    listar: Function
  },
  methods: {
    save(){
      User.save(this.usuario).then(res => {
        res.data = this.usuario
        this.usuario = {}
        this.listar()
        alert('Salvo com Sucesso !!!')
      })
    },
  }
};
</script>

<style scoped>
.cadastro {
  position: relative;
  margin: auto;
  padding: 150px 0 0 0;
  font-family: sans-serif;
  font-size: 1em;
  display: table;
  clear: both;
  margin-bottom: 1em;
}

.cadastro fieldset {
  border: double;
  float: left;
  padding: 5px 15px 0px;
  background-color: white;
  box-shadow: 2px 2px 2px rgba(31, 30, 30, 0.8);
  position: relative;
  display: flex;
}

.cadastro label {
  margin-bottom: 0.2em;
  color: #666;
  display: block;
  padding-top: 10px;
  font-size: 2em;
}

.btn-submit {
  margin-top: 10px;
  font-size: 1.2em;
  background: #f90;
  border: 0;
  margin-bottom: 1em;
  color: #fff;
  padding: 0.2em 0.6em;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
  cursor: pointer;
  position: relative;
  left: 89%;
}

.cadastro input {
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
  padding: 5px;
}

.cadastro .campo {
  padding-right: 400px;
}

.cadastro legend {
  font-family: Arial, sans-serif;
  font-size: 2em;
  font-style: normal;
}

.cadastro h1 {
  color: #666;
  padding: 0;
}
</style>
