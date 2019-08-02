<template>
  <div class="editar">
    <b-form id="i" @submit="onSubmit">
      <b-form-group
        id="input-group-1"
        label="Email:"
        label-for="input-1"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          required
          placeholder="Informe seu email"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Nome:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.username"
          required
          placeholder="Informe seu nome"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Senha:" label-for="input-3">
        <b-form-input
          id="input-3"
          v-model="form.password"
          required
          placeholder="Informe sua senha"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Salvar</b-button>
    </b-form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          email: '',
          username: '',
          password: ''
        }
      }
    },
    methods: {
    }
  }
</script>

<style scoped>
  .editar {
    padding-top: 150px;
  }
  .editar #i {
      position: relative;
      margin: auto;
      padding: 20px 50px 50px 50px;
      font-family: sans-serif;
      font-size: 1em;
      display: table;
      clear: both;
      margin-bottom: 1em;
      border-style: outset;
  }
</style>
