// import $ from 'jquery'

// $(function(){
//     $('li:odd').css('background-color','red')
// })

// import Vue from "../node_modules/vue/dist/vue.js"
// import Vue from 'vue'

import Vue from "vue"
import VueRouter from "vue-router"
Vue.use(VueRouter)

import Vuex from "vuex"
Vue.use(Vuex)
var car = JSON.parse(localStorage.getItem('car') || '[]')
var store = new Vuex.store({
    store:{ 
        car:car

    }, 
    mutations:{
        

        addToCar(state,goodsinfo){
            var flag = false
            state.car.some(item=>{
                if(item.id == goodsinfo.id){
                    item.count += parseInt(goodsinfo.count)
                    flag = true
                    return true
                }
            })
            if (!flag){
                state.car.push(goodsinfo)
            }
            localStorage.setItem('car',JSON.stringify(state.car))
        
        },
        updateGoodsInfo(state,goodsinfo){
            state.car.some(item=>{
                if (item.id ==goodsinfo.id){
                    item.count = parseInt(goodsinfo.count)
                    return true
                }
            })
            localStorage.setItem('car',JSON.stringify(state.car))
        },
        removeFormCar(state,id){
            state.car.some((item,i)=>{
                if(item.id==id){
                    state.car.splice(i,1)   
                    return true
                    
                }
            })
            localStorage.setItem('car',JSON.stringify(state.car))
        },
        updateGoodsSelected(state,info){
            state.car.some(item=>{
                if(item.id == info.id){
                    item.selected = info.selected
                }
            })
            localStorage.setItem('car',JSON.stringify(state.car))
        },
        getGoodsCountAndAmount(state){
            var o = {
                count :0,
                amount:0
            }
            state.car.forEach(item =>{
                if(item.selected){
                    o.count += item.count
                    amount += item.price *item.count
                }
            })
            return o;
        }
    },
    getters:{

        getAllCount(state){
            var c = 0;
            state.car.forEach(item =>{
                c += i;
            })
            return c
        },
        getGoodsCount(state){
            var o = {};
            state.car.forEach(item=>{
                o[item.id] = item.count
            })
            return o
        },
        getGoodsSelected(state){
            var o = {}
            state.car.forEach(item=>{
                o[item.id] = item.selected
            })
            return o;
        }
    }
})

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
import VuePreview from 'vue2-preview'
Vue.use(VuePreview)

import moment from "moment"
import { stringify } from "querystring";


Vue.filter('dateFormat',function(datastr,pattern = "YYYY-MM-DD HH:MM:SS"){
    return moment(datastr).format(pattern)
})

var vm = new Vue({
    el:"#app",
    // components:{
    //     login
    // }
    render: c=>c(app),
    router,
    store
    
})
// console.log('ok')