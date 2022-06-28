<template>
  <h1>Register form</h1>
    <Form>
    Login: <Field name="login" :rules="loginRules" :v-model="a"/> <br>
    <ErrorMessage name="login" /> <br>
    Password: <Field name="password" type="password" :rules="passwordRules" /> <br>
    <ErrorMessage name="password" /> <br>
    <button @click="submitHandle">Send</button>
  </Form>
</template>

<script>
import { Field, Form, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';

export default {
 name: 'App',
  components: {
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
<style scoped>

</style>
