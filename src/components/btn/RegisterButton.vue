<template>
    <div class="button">
        {{ msg }}
    </div>
</template>

<script>
export default {
  name: 'RegisterButton',
  props: {
    msg: String
  }
}
</script>

<style scoped>
.button {
    padding: 10px 35px;
    border-radius: 25px;
    width: fit-content;
    transition: .3s all ease-in-out;
    border: 2px solid #722ED1;
    color: #722ED1;
    font-weight: 500;
    font-size: 14px;
    line-height: 14px;
}
.button:hover {
    cursor: pointer;
    transform: scale(1.08);
}
</style>