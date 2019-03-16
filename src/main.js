// import $ from 'jquery'

// $(function(){
//     $('li:odd').css('background-color','red')
// })

// import Vue from "../node_modules/vue/dist/vue.js"
// import Vue from 'vue'

import Vue from "vue"
import { Header } from 'mint-ui'
import 'mint-ui/lib/style.css'
import './lib/mui/css/mui.min.css'
import app from "./App.vue"

Vue.component(Header.name,Header)

var vm = new Vue({
    el:"#app",
    // components:{
    //     login

    // }
    render: c=>c(app)
    
})
// console.log('ok')