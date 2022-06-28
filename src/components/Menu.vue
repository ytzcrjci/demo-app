<template>
    <div class="container-sn">
        <div class="menu">
            <div class="logo">
                <img alt="Vue logo" src="../assets/logo.png" class="logo-image">
            </div>
            <div class="menu-list">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div class="buttons">
                <LoginButtonVue msg="Login"/>
                <RegisterButtonVue msg="Register"/>
                
            </div>
        </div>
    </div>
</template>

<script>
import LoginButtonVue from './btn/LoginButton.vue';
import RegisterButtonVue from './btn/RegisterButton.vue';

export default {
  name: 'MenuVue',
  props: {
    msg: String
  },
  components: {
      LoginButtonVue,
      RegisterButtonVue
  }
}
</script>

<style scoped>
.logo-image {
    padding: 0;
    margin: 0;
    display: block;
    height: 80px;
    width: 80px;
}
.menu {
    padding: 20px 0;
    max-width: 1200px;
    display: flex;
    margin: 0 auto;
    align-items: center;
    justify-content: space-between;
}
.logo {
    padding: 0;
    margin: 0;
}
.menu-list {
    display: block;
    padding: 0;
    margin: 0;
    text-align: left;
    text-decoration: none;
    list-style: none;
}
ul {
    width: 100%;
    padding-right: 0;
    margin: 0;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 50px;
}
li {
    padding: 10px 30px;
    position: relative;
}
li:after {
    content: '';
    background-color: rgb(58, 58, 58);
    width: 0;
    height: 3px;
    position: absolute;
    left: 50%;
    bottom: 0;
    transition: .3s all ease-in-out;
}
li:hover {
    cursor: pointer;
}
li:hover:after {
    background-color: rgb(58, 58, 58);
    width: 100%;
    left: 0;
    right: 0;
}
.buttons{
    display: flex;
    gap: 10px;
}
</style>