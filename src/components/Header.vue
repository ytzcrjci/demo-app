<template>
    <div class="header">
        <div class="container">
            <MenuVue />
            <div class="content">
                <div class="info-box">
                    <h1>Your data with real-time analytics</h1>
                    <p>Harness the potential of Big Data Analytics & Cloud Services and become a data-driven organization with Needle tail</p>
                    <div class="btns">
                        <RegisterButtonVue msg='Start free trial'/>
                        <LoginButtonVue msg='Learn more'/>
                    </div>
                </div>
                <div class="header-banner">
                    <img src="../assets/image1.png" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import MenuVue from './Menu.vue'
import LoginButtonVue from './btn/LoginButton.vue'
import RegisterButtonVue from './btn/RegisterButton.vue'

export default {
  name: 'HomeVue',
  components: {
      MenuVue,
      LoginButtonVue,
      RegisterButtonVue
  },
  props: {
    msg: String
  }
}
</script>
<style scoped>
.header {
    width: 100%;
    height: 800px;
    background-image: url("../assets/BG.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
}
.content {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 140px 0;
}
.container{
    margin: 0 auto;
    max-width: 1000px;
    text-align: left;
}
.learn-more{
    width: 100%;
}
h1 {
    font-weight: 700;
    font-size: 48px;
    line-height: 48px;
}
p {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    padding: 24px 0;
}
.btns {
    display: flex;
    gap: 16px;
}
</style>
