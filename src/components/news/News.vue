<!--  -->
<template>
  <div>
    <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="news in newslist" :key="news.id">
					<router-link :to="'/home/newsinfo/'+news.id">
						<img class="mui-media-object mui-pull-left" src="news.img_url">
						<div class="mui-media-body">
						<h1>{{news.title}}</h1>
							<p class='mui-ellipsis'>
                <span>发表时间：{{news.add_item | dateFormat}}</span>
                <span>点击次数：{{news.click}}</span>
                </p>
						</div>
					</router-link>
				</li>
			</ul>
  </div>
</template>

<script>
  import {Toast} from 'mint-ui'
  export default{
    data(){
      return{
        newslist:[]
      }
    },
    created(){
      this.getNewsList();
    },
    methods: {
      getNewsList(){
        this.$http.get('api/getnewslist').then(result=>{
          if(result.body.status===0){
            this.newslist = result.body.message;
          }
          else{
            Toast('获取数据失败')
          }
        })
      }
    },
  }
</script>
<style lang='scss' scoped>
.mui-table-view{
  li{
    h1{
      font-size: 14px;
      

      }
      .mui-ellipsis{
        font-size: 12px;
        color: #226aff;
        display: flex;
        justify-content:space-between;
      }
    
  }
}
</style>