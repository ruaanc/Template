<template>
  <div id="temp">
    <div class="cadastro">
      <form action>
        <fieldset>
          <legend>Cadastro</legend>
          <label>Nome:</label>
          <input type="text" class="campo" v-model="usuario.nome" />
          <br />
          <label>Email:</label>
          <input type="email" class="campo" v-model="usuario.email" />
          <br />
          <label>Senha:</label>
          <input type="password" class="campo" v-model="usuario.senha" />
          <br />
          <input type="button" class="btn-submit" value="Salvar" @click="salvar()" />
        </fieldset>
      </form>
    </div>
    <lista-usuarios :usuarios = "usuarios"/>
  </div>
</template>

<script>
import ListaUsuarios from './ListaUsuarios.vue'
export default {
  components: {ListaUsuarios},  
  data() {
    return {
        cont: 0,
        usuarios: [],
        usuario: {
            id: 0,
            nome: "",
            email: "",
            senha:""
        }

    };
  },
  methods: {
      salvar(user) {
          user = this.usuario
          user.id += 1
          this.usuarios.push(user)
      }
  }
};
</script>

<style scoped>
.cadastro {
  position: relative;
  margin: auto;
  padding: 150px 0;
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
</style>
