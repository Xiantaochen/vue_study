<!--  -->
<template>
  <div class="goodsinfo-container">
      <transition
      @before-enter = "beforeEvent"
      @enter ="enter"
      @after-enter ="afterEnter">
          <div class="ball" v-show="ballFlag" ref="ball"></div>
     </transition>
      
      		<div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<swipe :lunbotuList="lunbotu" :isfull="false"></swipe>
					</div>
				</div>
			</div>

            
			<div class="mui-card">
				<div class="mui-card-header">商品的名称标题</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
					<p class="price">
                        市场价：<del>￥2999</del>&nbsp;&nbsp;销售价：<span class="now_price">￥2199</span>
                    </p>
                    <p>购买数量:<numbox @getcount = "getSelectCount" :max="goodsinfo.stock_quantity"></numbox> </p>
                    
                    <p>
                        <mt-button type="primary" size="small">立即购买</mt-button>
                        <mt-button type="danger" size="small" @click="addToShopCar">加入购物车</mt-button>
                    </p>
					</div>
				</div>
				
			</div>
			
			<div class="mui-card">
				<div class="mui-card-header mui-card-media" style="height:40vw;background-image:url(../images/cbd.jpg)"></div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
					<p>商品货号：</p>
                    <p>库存情况：</p>
                    <p>上架时间：</p>
					</div>
				</div>
				<div class="mui-card-footer">
		    	<mt-button type="primary" size="large" plain @click="goDesc(id)">图文介绍</mt-button>
                <mt-button type="primary" size="large" plain @click="goComment(id)">商品评论</mt-button>
				</div>
            </div> 
            </div>
</template>

<script>
import swipe from "../subcomponents/swiper.vue"
import numbox from "../subcomponents/goodsinfo_numbox.vue"
export default {
  data () {
    return {
        id : this.$router.params.id,
        lunbotu :[],
        ballFlag:false,
        SelectCount: 1
    };
  },
  created(){
      this.getLunbotu()
  },
  methods:{
      getLunbotu(){
          this.$http.get("api/getthumimage/" + this.id).then(
              result =>{
                  if (result.body.status ===0){
                      result.body.message.forEach(item=>{
                          item.img = item.src;
                      })

                      this.lunbotu = result.body.message;

                  }else{

                  }
              }
          )
      },
      goDesc(id){
          this.$router.push({name:"goodsdesc",params:{id}})

      },
      goComment(id){
          this.$router.push({name:"goodscomment",params:{id}})
      },
      addToShopCar(){
          this.ballFlag = !this.ballFlag
      },
      beforeEvent(el){
          el.style.trantransform ="translater(0,0)";
      },
      enter(el,done){
          el.offsetWidth;
          const ballPosition =  this.$refs.ball.getBoundingClientRect();

          const badgePosition = document
          .getElementById("badge")
          .getBoundingClientRect();

          const xDist = badgePosition.left - ballPosition.left;
          const yDist = badgePosition.top - ballPosition.top;

            

          el.style.trantransform = 'translater(${xDist}px,${yDist}px)'
          el.swipe.transition ="all 1s cubic-bezier(.4,-0.3,1,.68)";
          done()
      },
      afterEnter(el){
          this.ballFlag = !this.ballFlag
      },
      getSelectCount(count){
          this.SelectCount = count;

      },
 
  },
  components:{
      swipe,
      numbox
  }

}
</script>
<style lang='scss' scoped>
.goodsinfo-container{
    background-color: #eee;
    .now_price{
        color:red;
        font-size: 16px;
        font-weight: bold;
    }
    .mui-card-footer{
        display: block;
        button{
            margin: 14px 0
        }
    }
    .ball{
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background-color: red;
        position: absolute;
        z-index: 99;
        top:390px;
        left: 146px;
    }
}
</style>