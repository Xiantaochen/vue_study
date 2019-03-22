<!--  -->
<template>
  <div class="cmt-container">
      <h3>发布评论</h3>
      <hr>
      <textarea placeholder="最多100多字" v-model="msg"></textarea>
      <mt-button type = "primary" size="large" @click="postComment">发布评论</mt-button>
      <dic class="cmt-list">
        <div class="cmt-item" v-for="(item , i) in comments" :key="item.add_time">
          <div class="cmt-title"></div>
          第{{ i +1}}}楼&nbsp;&nbsp;{{item.user_name}}&nbsp;&nbsp;发布时间： {{item.add_time | dateformat}}
          <div class="cmt-body">
            {{item.content ==='undefined' ? '此用户很懒，嘛都没说':item.content}}
          </div>
        </div>
      </dic>
      <mt-button type = "primary" size="large" plain @click="getMore">加载更多</mt-button>
  </div>
</template>

<script>
import {Toast} from "mint-ui"
export default{
  data(){
    return {
      pageIndex :1,
      comments:[],
      msg:'',
    }
  },
  created(){
    this.getComments()
  },
  methods:{
    getComments(){
      this.$http.get('api/getcomments'+this.id+'?pageindex='+this.pageIndex).then(result=>{
        if(result.body.status ===0){
          //  this.comments = result.body.message;
          this.comments = this.comments.concat(result.body.message)
        }
        else{
          Toast("加载失败")
        }
      })
    },
    getMore(){
      this.pageIndex ++;
      this.getComments()
    },
    postComment(){
      if (this.msg.tim().length ===0){
        return Toast('no comment');
      }


        this.$http.post('api/postcomment/'+this.$route.params.id,{content:this.msg.trim()}
        .then(function(result) {
          if  (result.body.message.status ===0){
            var cmt = {user_name:"匿名用户",
            add_time:Date.now(),
            content:this.msg.trim()};
            this.comments.unshift(cmt);
            this.msg =""

          }
        }))
    }
  },
  props:['id']
}

</script>
<style lang='scss' scoped>
.cmt-container{
  h3{
    font-size: 19px;
  }
  textarea{
    font-size: 14px;
    height: 85;
    margin: 0
  }
  .cmt-list{
    margin: 5px;
    font-size: 13px;
    .cmt-title{
      line-height: 35px;
      background-color: #cccccc;
    }
    .cmt-body{
      line-height: 35px;
      text-indent: 2em;

    }
  }
}
</style>