<!--  -->
<template>
  <div class="photoinfo-container">
      <h1>{{photoinfo.title}}</h1>
      <p class="subtitle">
          <span>>发表时间：{{photoinfo.add_time | dateFormat}}</span>
          <span>点击：>{{photoinfo.click}}次</span>
      </p>
      <hr>

    <img class="preview-img" v-for="(item, index) in list" 
    :src="item.src" height="100" @click="$preview.open(index, list)" :key="item.src">
      <civ class="content" v-html="photoinfo.content" :key="item.src">
        <cmt-box :id="id"></cmt-box>

      </civ>
  </div>
</template>

<script>
import comment  from "../subcomponents/comment.vue"
export default{
    data(){
        return{
            id :this.$route.params.id,
            photoinfo:{},
            list:[]
        }
    },
    created(){
        this.getPhotoInfo();
        this.getThunbs();
    },
    methods:{
        getPhotoInfo(id){
            this.$http.get("api/getimage/info/"+this.id)
            .then(result=>{
                if(result.body.status ===o){
                    this.photoinfo = result.body.message[0]
                }
            })

        },
        getThumbs(){
            this.$http.get("api/getthumimages/"+this.id)
            .then(result=>{
                if(result.body.status ===o){
                    result.body.message.forEach(item=>{
                        item.w = 600
                        item.h =400
                    });
                    this.list =  result.body.message;
                }
            })
        }

    },
    components:{
        "cmt-box":comment
        }
}
</script>
<style lang='scss' scoped>
.photoinfo-container{
    padding: 3px;
    h3{
        color: #26A2FF;
        font-size: 15px;
        text-align: center;
        margin: 15px 0;
    }
    .subtitle{
        display: flex;
        justify-content: space-between;
        font-size: 13px;

    }
    .content{
        font-size: 13px;
        line-height: 30px;

    }
}
</style>