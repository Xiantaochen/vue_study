<!--  -->
<template>
  <div class="goods-list">
      <div class="goods-item">
               <img src="" alt="">
      <h1 class="title"></h1>
      <div class="info">
          <p class="price">
              <span class="now">299</span>
              <span class="old">399</span>
          </p>
          <p class="sell">
              <span></span>
              <span></span>
          </p>
          </div>
      </div>
 
  </div>
</template>

<script>

</script>
<style lang='scss' scoped>
.goods-list{
    display: flex;
    flex-wrap: wrap;
    padding: 8px;
    justify-content: space-between;
    padding: 2px;
    .goods-item{
        border: 1px solid #ccc;
        box-shadow: 0 0 8px #ccc;
        width: 49%;
        margin: 4px 0;
        img{
            width: 100%;
        }
        .title{
            font-size: 14px;
        }
        .info{
            background-color: #eee;
            p{
                margin: 0;
                padding: 5px;
            }
            .price{
                .now{
                    color: red;
                    font-weight: bold;
                    font-size: 16px;
                }
                .old{
                    text-decoration: line-through;
                    font-size: 12px;
                    margin-left: 10px;
                }
            }
            .sell{
                display: flex;
                justify-content: 13px;

            }
        }
        
    }
}
</style>