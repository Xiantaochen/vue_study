<!--  -->
<template>
  <div>
  <mt-swipe :auto="4000">
  <mt-swipe-item v-for="item in lunbotuList" :key="item.img" >
    <img :src="item.img" alt="">
  </mt-swipe-item>
 
  </mt-swipe>

  <!-- 九宫格 -->
  <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/NewsList">
		                    <span class="mui-icon mui-icon-home"></span>
		                    <div class="mui-media-body">新闻资讯</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/photolist">
		                    <span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span>
		                    <div class="mui-media-body">图片分享</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="#">
		                    <span class="mui-icon mui-icon-chatbubble"></span>
		                    <div class="mui-media-body">商品购买</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="#">
		                    <span class="mui-icon mui-icon-location"></span>
		                    <div class="mui-media-body">留言反馈</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="#">
		                    <span class="mui-icon mui-icon-search"></span>
		                    <div class="mui-media-body">视频专区</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="#">
		                    <span class="mui-icon mui-icon-phone"></span>
		                    <div class="mui-media-body">联系我们</div></router-link></li>
		        </ul> 
  </div>
</template>

<script>
import {Toast} from "mint-ui"
export default{
	data(){
		return {
			lunbotuList:[]
		}
	}
	,
	created(){
		this.getLunbotu()
	},
	methods:{
		getLunbotu(){
			this.$http.get("http://www.liulongbin.top:3005/api/getlunbo").then(result=>{
				// console.log(result.body)
				if(result.body.status==0){
					this.lunbotuList = result.body.message;
					// Toast("加载轮播图成功")
				}
				else{
					Toast("加载轮播图失败")
				}
			})

		}
	}
}

</script>
<style lang='scss' scoped>
.mint-swipe {
  height: 250px;
  // .mint-swipe-item{
  //   &:nth-child(1){
     
  //     background-image: url(/../image/1.jpg);
  //     background-size:100% 100%;
  //   }
  //   &:nth-child(2){
  //     background-image: url(/../image/2.jpg);
  //     background-size:100% 100%;
  //   }
  //   &:nth-child(3){
  //     background-image: url(/../image/3.jpg);
  //     background-size:100% 100%;
  //   }
  
  // 
    img{
      width: 100%;
      height: 100%;
    }
    // }
  }
  .mui-grid-view.mui-grid-9{
    background-color: #ffffff;
    border: none;
  }
  .mui-grid-view.mui-grid-9 .mui-table-view-cell{
    border: 0;
    border-radius: 50%;
  }
</style>