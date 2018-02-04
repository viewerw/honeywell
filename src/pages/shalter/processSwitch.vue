<template>
    <div class="process-switch fr" :status="status">
      <span class="up btn">上行</span>
      <span class="stop btn">停</span>
      <span class="down btn">下行</span>
    </div>
</template>

<script>
    export default{
      data(){
        return {
        }
      },
      props:{
        status:{
          type:Number,
          default:0,
        }
      },
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .process-switch{
    width:170px;
    height:40px;
    line-height: 40px;
    text-align:right;
    .btn{
      color: #fff;
      border-radius: 27px;
      background-color: #efefef;
      padding: 5px 7px;
      line-height: initial;
      box-shadow: 2px 2px 6px rgba(0,0,0,.12);
      cursor: pointer;
    }
    .up{
      margin-right: 10px;
      padding-left: 8px;
      padding-right: 8px;
    }
    .stop{
      margin-right: 15px;
    }
    .down{
      padding-left: 8px;
      padding-right: 8px;
    }
    &[status='1']{
      .up{
        background-color: #7eb338;
        box-shadow: inset 2px 2px 6px rgba(0, 0, 0, 0.12);
      }
      .stop{
        color: red;
      }
      .down{
        color: #7eb338;
      }
    }
    &[status='2']{
      .up{
        color: #7eb338;
      }
      .stop{
        color: red;
      }
      .down{
        background-color: #7eb338;
        box-shadow: inset 2px 2px 6px rgba(0, 0, 0, 0.12);
      }
    }
    &[status='3']{
      .up{
        color: #7eb338;
      }
      .stop{
        background-color: red;
        box-shadow: inset 2px 2px 6px rgba(0, 0, 0, 0.12);
      }
      .down{
        color: #7eb338;
      }
    }
  }
</style>

