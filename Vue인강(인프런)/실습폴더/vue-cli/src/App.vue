<template>
  <div>
    <!-- <app-header v-bind:프롭스 속성 이름="상위 컴포넌트의 데이터 이름"></app-header> -->
    <app-header 
      v-bind:propsdata="str"
      v-on:renew="renewStr"></app-header> <!--여기서 propsdata는 AppHEader.vue에서 정의한 이름.-->
  </div>
</template>

<script>
// var AppHeader = {
//   template: '<header><h1>Header</h1></header>'
// }

import AppHeader from './components/AppHeader.vue';


// new Vue({
//   data: {
//     str: 'hi'
//   }
// })

export default {
  data: function() {
    return {
      str: 'header'
    }
  },
  components: {
    'app-header' : AppHeader
  },
  methods: {
    renewStr: function() {
      this.str = 'hi';
    }
  }
}
</script>

<style>

</style>