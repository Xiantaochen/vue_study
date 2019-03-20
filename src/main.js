// import $ from 'jquery'

// $(function(){
//     $('li:odd').css('background-color','red')
// })

// import Vue from "../node_modules/vue/dist/vue.js"
// import Vue from 'vue'

import Vue from "vue"
import VueRouter from "vue-router"
Vue.use(VueRouter)


import VueResource from "vue-resource"
Vue.use(VueResource)
Vue.http.options.root="http://vue.studyit.io"
Vue.http.options.emulateJson = true;

import router from './router.js'
// import { Header, Swipe, SwipeItem,Button,Lazyload  } from 'mint-ui'

import './lib/mui/css/mui.min.css'
import "./lib/mui/css/icons-extra.css"
import app from "./App.vue"

// Vue.component(Header.name,Header)
// Vue.component(Swipe.name, Swipe)
// Vue.component(SwipeItem.name, SwipeItem)
// Vue.component(Button.name, Button)
// Vue.use(Lazyload)
import MintUI from "mint-ui"
Vue.use(MintUI)
import 'mint-ui/lib/style.css'

import moment from "moment"


Vue.filter('dateFormat',function(datastr,pattern = "YYYY-MM-DD HH:MM:SS"){
    return moment(datastr).format(pattern)
})

var vm = new Vue({
    el:"#app",
    // components:{
    //     login
    // }
    render: c=>c(app),
    router
    
})
// console.log('ok')