<template>
  <HeaderVue />
  <Form>
    Login: <Field name="login" :rules="loginRules" :v-model="a"/> <br>
    <ErrorMessage name="login" /> <br>
    Password: <Field name="password" type="password" :rules="passwordRules" /> <br>
    <ErrorMessage name="password" /> <br>
    <button @click="submitHandle">Send</button>
  </Form>
    <div id="nav">
    <router-link to="/login">Home</router-link> |
    <router-link to="/register">About</router-link>
  </div>
  <router-view/>
</template>

<script>
import HeaderVue from './components/Header.vue'
import { Field, Form, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';

export default {
  name: 'App',
  components: {
    HeaderVue,
    Field,
    Form,
    ErrorMessage,
  },
  methods: {
    submitHandle() {
      alert(this.loginRules.value)
    }
  },
  data() {
    return {
      loginRules: yup.string().required('Required').min(8,'Must be at least 8 characters').email('Must be an email'),
      passwordRules: yup.string().required('Required').min(8, 'Must be at least 8 characters'),
    };
  },
}
</script>

<style>
body{
  padding: 0;
  margin: 0;
}
.container-stn{
  max-width: 1200px;
  margin: 0 auto;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
}
</style>
