<template>
    <HeaderVue />
    <div class="container-stn">
      <h1>Register</h1>
      <RegisterFormVue />
    </div>
</template>

<script>
import RegisterFormVue from '../Form/RegisterForm.vue'
import HeaderVue from '../Menu.vue'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components: {
    RegisterFormVue,
    HeaderVue
  }
}
</script>
<style scoped>
.container-stn{
  max-width: 1200px;
  margin: 0 auto;
}
</style>
