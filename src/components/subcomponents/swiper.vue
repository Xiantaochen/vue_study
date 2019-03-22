<!--  -->
<template>
  <div>
        <mt-swipe :auto="4000">
  <mt-swipe-item v-for="item in lunbotuList" :key="item.img" >
    <img :src="item.img" alt="" :class="{'full':isfull}">
  </mt-swipe-item>
 
  </mt-swipe>
  </div>
</template>

<script>
export default {
  data () {
    return {
    };
  },
  props:['lunbotuList','isfull']
}

</script>
<style lang='scss' scoped>
.mint-swipe {
  height: 250px;
  // .mint-swipe-item{
  //   &:nth-child(1){
     
  //     background-image: url(/../image/1.jpg);
  //    
  //   }
  //   &:nth-child(2){
  //     background-image: url(/../image/2.jpg);
  //     background-size:100% 100%;
  //   }
  //   &:nth-child(3){
  //     background-image: url(/../image/3.jpg);
  //     background-size:100% 100%;
  //   }
    .mint-swipe-item{
      text-align: center;
    }
  // 
    img{
      // width: 100%;
      height: 100%;
    }
    // }
    .full{
      width: 100%;
    }
  }
</style>