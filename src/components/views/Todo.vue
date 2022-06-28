<template>
<HeaderVue />
    <h1>Todo</h1>
    <h2 v-if="value"> {{ counter }} </h2>
    <h2 v-else>0</h2>
    <button>-</button>
    <input type="number" v-model="value">
    <button @click="increment()">+</button>
</template>

<script>
import HeaderVue from '../Header.vue'

export default {
  name: 'TodoList',
  props: {
    msg: String
  },
  components: {
    HeaderVue
  },
  data() {
      return {
          value: 11,
          counter: 11,
      }
  },
  methods: {
    increment() {
        this.counter+=1
    },
    decrement() {
        this.counter+=1
    }
  }
}
</script>
<style scoped>

</style>
