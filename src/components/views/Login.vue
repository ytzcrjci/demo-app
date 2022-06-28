<template>
<HeaderVue />
    <h1>Login Page</h1>
</template>

<script>
import HeaderVue from '../Header.vue'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components: {
    HeaderVue
  }
}
</script>
<style scoped>

</style>
