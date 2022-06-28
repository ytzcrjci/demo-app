<template>
    <HeaderVue />
    <h1>Home</h1>
    <button @click="przeciwka()">{{this.truefalse}}</button>
    <div v-if="this.truefalse">Now is true</div>
    <div v-else>Now is false</div>
</template>

<script>
import HeaderVue from '../Header.vue'

export default {
  name: 'HomeVue',
  props: {
    msg: String
  },
  components: {
    HeaderVue
  },
  data() {
    return {
      truefalse: true
    }
  },
  methods: {
    przeciwka() {
      this.truefalse = !this.truefalse
    }
  }
}
</script>
<style scoped>
button {
  padding: 5px 25px;
  background-color: white;
  border: black 1px solid;
  border-radius: 15px;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 16px;
}
button:hover{
  background-color: black;
  color: white;
}
</style>
