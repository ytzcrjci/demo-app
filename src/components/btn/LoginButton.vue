<template>
    <router-link :to="{name: Login}">
        <div class="button">
            {{ msg }}
        </div>
    </router-link>
    <router-view/>
</template>

<script>
export default {
  name: 'LoginButton',
  props: {
    msg: String
  }
}
</script>

<style scoped>
.button {
    transition: .3s all ease-in-out;
    padding: 10px 35px;
    border: 1px solid transparent;
    border-radius: 25px;
    width: fit-content;
    background-color: white;
}
.button:hover {
    background-color: #722ED1;
    color: white;
    cursor: pointer;
    border: 1px solid #722ED1;
    transform: scale(1.05);
}
</style>