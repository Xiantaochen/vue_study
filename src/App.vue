<!--  -->

<template>
  <div class="app-container">
    <mt-header fixed title="神奇宝贝">
			 <span  slot="left" @click="goBack" v-show="flag">
    <mt-button icon="back">back</mt-button>
  </span>
		</mt-header>
		<transition>	
			<router-view></router-view>
		</transition>

    <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item-11b " to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item-11b" to="/member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item-11b" to="/shopcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge" id = "badge">{{ $store.getters.getAllCount}}</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item-11b" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
  </div>
</template>

<script>
export default{
	data(){
		return{
			flag:false
		}
	},
	created(){
		// if(this.$route.path ==="/home")
		this.flag = this.$route.path === "/home"?false :true;
	},
	methods:{
		goBack(){
			this.$router.go(-1)
		}
	},	
	watch:{
		"$router.path" :function(newVal){
			if (newVal ==='/home'){
				this.flag = false
			}else{
				this.flag = true
			}
		}
	}
}

</script>
<style lang='less' scoped>
.mint-header{
	z-index: 99;
}
 .app-container{
	 padding-top: 40px;
	 padding-bottom: 50px;
	 overflow-x: hidden;
	 position: absolute;
 }
 .v-enter{
	 opacity: 0;
	 transform: translateX(100%);
	 
	 
 }
 .v-leave-to{
	  opacity: 0;
	 transform: translateX(-100%);
	 position: absolute;
 }
 .v-enter-active,
 .v-leave-active{
	 transition: all 0.5s ease;
 }
 .mui-bar-tab .mui-tab-item-11b.mui-active{
	 color: #007aff
 }
 .mui-bar-tab .mui-tab-item-11b {
    display: table-cell;
    overflow:hidden;
    width: 30%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
}
.mui-bar-tab .mui-tab-item-11b .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
}
.mui-bar-tab .mui-tab-item-11b .mui-icon~.mui-tab-label {
    font-size: 11px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>