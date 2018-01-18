<template>
    <div class="process-switch fr" :status="status">
      <div class="switch-onOff fl">
        <span class="text"><span>{{status===4?'开启中':'关闭中'}}</span><i class="el-icon-loading"></i></span>
        <div class="option-btn l b-close" :class="status===0?'disable':''">
          <div class="out"></div>
          <div class="inside">关</div>
          <div class="left"></div>
          <div class="right"></div>
        </div>
        <div class="option-btn r b-open" :class="status===0?'disable':''">
          <div class="out"></div>
          <div class="inside">开</div>
          <div class="left"></div>
          <div class="right"></div>
        </div>
      </div>
      <div class="stop fr" :class="(status===4||status===5)?'':'disable'">停</div>
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
    .disable{
      cursor: not-allowed!important;
    }
    &[status="0"]{
     .switch-onOff{
        .text{
          display: none;
        }
       .option-btn{
        .out,.left,.right{
          display: none;
        }
        .inside{
          color: #FFF;
          background-color: #f0f0f0;
        }
       }
     }
      .stop{
        background-color: #f0f0f0;
        color: #fff;
      }
    }

  &[status="1"]{
    .switch-onOff{
      .text{
        display: none;
      }
      .option-btn{
        .out,.left,.right{
          display: none;
        }
        &.b-close{
            .inside{
              border: 1px solid #000;
              color: #000;
              background-color: #fff;
            }
         }
      }
    }
    .stop{
      background-color: #f0f0f0;
      color: #fff;
    }
  }

  &[status="2"]{
    .switch-onOff{
      .text{
        display: none;
      }
      .option-btn{
        .out,.left,.right{
          display: none;
        }
        &.b-open{
          .inside{
            border: 1px solid #000;
            color: #000;
            background-color: #fff;
          }
         }
      }
    }
    .stop{
      background-color: #f0f0f0;
      color: #fff;
    }
  }

  &[status="3"]{
    .switch-onOff{
      .text{
        display: none;
      }
      .option-btn{
        .out,.left,.right{
          display: none;
        }
      }
    }
    .stop{
      background-color: #f0f0f0;
      color: #fff;
    }
  }

  &[status="4"]{
    .switch-onOff{
      text-align:left;
      .text{
        padding-left: 15px;
      }
      .option-btn{
        &.b-open{
           cursor: not-allowed;
         }
        &.b-close{
            display: none;
         }
      }
    }
  }
  &[status="5"]{
    .switch-onOff{
      text-align:right;
      .text{
        padding-right: 15px;
      }
      .option-btn{
        &.b-open{
           display: none;
         }
        &.b-close{
          cursor: not-allowed;
         }
      }
    }
  }
    .switch-onOff{
      width:110px;
      height: 30px;
      margin-top: 5px;
      color: #000;
      background-color: #e0e0e0;
      border-radius: 30px;
      position: relative;
      line-height:30px;
      text-align: center;
    }
    .stop{
      display: inline-block;
      width: 30px;
      height:30px;
      text-align: center;
      background-color: red;
      color: #fff;
      line-height: 30px;
      border-radius: 100%;
      margin-top: 5px;
    }
    .option-btn{
      position: relative;
      width: 40px;
      height: 40px;
      display:inline-block;
      color:#fff;
      text-align:center;
      line-height:28px;
      position:absolute;
      cursor: pointer;
      top:-5px;
      &.l{
        left: -5px;
       }
       &.r{
        right: -5px;
        }
      .out{
        background-color: #000;
        width: 100%;
        height:100%;
        position: absolute;
        border-radius: 100%;
        z-index: 1;
      }
      .left{
        width:calc(51% + 1px);
        height: 100%;
        position: absolute;
        border-radius: 100%;
        left:-1px;
        z-index: 2;
        background-color: #ffc826;
        border-radius: 500px 0 0 500px;
        transform: rotate(0deg);
        transform-origin: 100% 50%;
      }
      .right{
        width:calc(51% + 1px);
        height: 100%;
        position: absolute;
        right: -1px;
        z-index: 2;
        background-color: #ffc826;
        border-radius: 0 500px 500px 0;
        transform: rotate(0deg);
        transform-origin: 0 50%;
      }
      .inside{
        background-color: #7eb238;
        width: 75%;
        height:75%;
        margin: auto;
        right: 0;
        left: 0;
        top:0;
        bottom:0;
        position: absolute;
        z-index:3;
        border-radius: 100%;
      }
    }
    .stop{
      cursor: pointer;
    }
  }
</style>

