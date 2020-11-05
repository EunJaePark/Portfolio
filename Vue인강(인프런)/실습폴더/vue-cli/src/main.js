import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

// 위의 내용은 이렇게 적은 것과 같은 의미.

// var App = {
//   template: '<div>app</div>'
// }

// new Vue({
//   el: '#app',
//   render: h => h(App),
// })

// render: h => h(App),는 아래처럼 작성한 것과 같은 의미.
// components: {
//   'app': App
// }
