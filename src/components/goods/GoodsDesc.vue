<!--  -->
<template>
  <div class="goodsdesc_container">
      <h3>{{ info.title}}</h3>
      <hr>
      <div class="content" v-html="info.content"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
        info:{}
    };
  },
  created(){
      this.getGoodsDesc()
  },
  methods:{
      getGoodsDesc(){

      }
  }
}

</script>
<style lang='scss' >
.goodsdesc_container{
    h3{
        font-size: 16px;
        color: #226aff;
        text-align: center;
        margin: 15px 0;

    }
    .content{
        img{
            width: 100%;
            padding: 4px;
        }
    }
}
</style>