import 'core-js'
import Vue from "vue"
//import App from '../vue/app'
import App from '../vue/App.vue'//要写全后缀！如果在配置文件里配置了，可以不加
require ('../css/a.css')



const a=(n)=>{
  return n*n
}

const b=4;
let c=a(b);
console.log(c)


new Vue({
  el:'#app',
  template:'<App/>',
  components:{
    App
  }
})