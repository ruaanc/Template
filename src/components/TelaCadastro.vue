<template>
  <div id="temp">
    <div class="cadastro">
      <form @submit.prevent="salvar">
        <fieldset>
          <h1>Cadastro</h1>
          <label>Nome:</label>
          <input type="text" class="campo" v-model="usuario.name" />
          <br />
          <label>Email:</label>
          <input type="email" class="campo" v-model="usuario.emailAddress" />
          <br />
          <label>Senha:</label>
          <input type="password" class="campo" v-model="usuario.password" />
          <br />
          <input type="submit" class="btn-submit" value="Salvar"/>
        </fieldset>
      </form>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
        cont: 0,
        usuario: {
            name: "",
            emailAddress: "",
            password:""
        }
    };
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
