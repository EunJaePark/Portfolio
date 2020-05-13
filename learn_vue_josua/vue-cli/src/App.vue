<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>

    <!-- <hello-world></hello-world> 파일 바로가기를 하려면 이렇게 써야함. -->
    <!-- <HelloWorld></HelloWorld>
    <HelloWorld/> -->
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {   // export default가 new Vue({});라고 보면 됨.
// 인스턴스 옵션 속성 or 컴포넌트 옵션 속성
  name: 'App',
  // components: {
  //   HelloWorld,
  //   'hello-world': HelloWorld
  // }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
