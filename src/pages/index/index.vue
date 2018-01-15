<template>
    <div class="index">
      <div class="pre">
        <div class="info">
          <div class="title">农场介绍</div>
          <div class="context">
            土山土水生态农业园是在著名的农业专家赵亚夫的悉心指导下，以及世界500强的跨国公司霍尼韦尔的科技支持下，建立的智慧农业示范基地。它包括农业科技示范，农产品深加工，有机农业科普展览，及休闲观光农业旅游四大板块。
          </div>
        </div>
        <el-tooltip class="mark" placement="top" effect="light" :value="mark" popper-class="self-tip" :manual="true">
          <div slot="content">
            软枣猕猴桃区
            <div class="num top" @click="showMore=!showMore;fakeAction1();">
              <span :class="showMore?'hide':''">4</span>
              <i class="el-icon-close" :class="showMore?'':'hide'"></i>
            </div>
            <div class="tip-content" :class="showMore?'':'hide'">
              <p>面积：15m</p>
              <p>气温：11</p>
              <p>水分：50%</p>
              <p>光照：10100Lux</p>
            </div>
          </div>
          <el-button class="point" name="1">
          </el-button>
        </el-tooltip>
        <el-tooltip class="mark" content="樱桃区" placement="bottom" effect="light" :value="mark" popper-class="self-tip" :manual="true">
          <el-button class="point" name="2" @mouseover="tipOver"></el-button>
        </el-tooltip>
        <el-tooltip class="mark" content="蓝莓二区" placement="top" effect="light" :value="mark" popper-class="self-tip" :manual="true">
          <el-button class="point" name="3"></el-button>
        </el-tooltip>
        <el-tooltip class="mark" content="蓝莓一区" placement="bottom" effect="light" :value="mark" popper-class="self-tip" :manual="true">
          <el-button class="point" name="4" ></el-button>
        </el-tooltip>
        <el-tooltip class="mark" content="树葡萄温室" placement="top" effect="light" :value="mark" popper-class="self-tip" :manual="true">
          <el-button class="point" name="5"></el-button>
        </el-tooltip>
        <el-tooltip class="mark" content="泵站" placement="bottom" effect="light" :value="mark" popper-class="self-tip" :manual="true">
          <el-button class="point" name="6"></el-button>
        </el-tooltip>
        <el-tooltip class="mark" content="视频监控" placement="bottom" effect="light" :value="mark" popper-class="self-tip" :manual="true">
          <el-button class="point" name="7"></el-button>
        </el-tooltip>
        <el-tooltip class="mark" content="草莓大棚" placement="top" effect="light" :value="mark" popper-class="self-tip" :manual="true">
          <el-button class="point" name="8"></el-button>
        </el-tooltip>
        <el-tooltip class="mark" content="玫瑰花园" placement="bottom" effect="light" :value="mark" popper-class="self-tip" :manual="true">
          <el-button class="point" name="9"></el-button>
        </el-tooltip>
      </div>
    </div>
</template>
<script >
    export default{
        data(){
            return{
              mark:false,
              showMore:false,
            }
        },
        methods:{
          tipOver(val){
            console.log('维维豆奶');
          },
          fakeAction1(){
            this.mark=false;
            setTimeout(()=>{
              this.mark=true;
            })
          },
        },
        mounted(){
          setTimeout(()=>this.mark = true);
        }
    }
</script>
<style lang ='scss'>
  .self-tip{
    font-size: 1rem;
  }
  .num{
    position: absolute;
    cursor: pointer;
    top: -10px;
    background-color: red;
    color: #fff;
    text-align: center;
    width: 25px;
    height: 25px;
    line-height: 26px;
    border-radius: 15px;
    right: -10px;
    &.bottom{
      top: auto;
      bottom: -10px;
    }
  }
  .tip-content{
      margin-top:0.3rem;
      font-size: 0.8rem;
    }
  .index{
      width: 100%;
      height: 100vh;
      background-image: url(../../assets/images/index/map.png);
      background-size: cover;
      background-position-y: 66%;
      .info{
        background-color: rgba(0,0,0,0.50);
        padding: 1rem;
        color:#fff;
        font-size: 1rem;
        width:20rem;
        top: 6rem;
        left: 4rem;
        position:absolute;
        .title{
          font-weight: bold;
          padding-bottom: .5rem;;
        }
        .context{
          line-height: 1.5rem;
        }
      }
      .pre{
          width: 100%;
          height: 100%;
          position: relative;
          .point{
              width: 16px;
              height: 16px;
              background-color: #000;
              border-radius: 10px;
              display: block;
              padding: 0;
              position: absolute;
              &[name="1"]{
                 top: 52%;
                 left: 33%;
               }
              &[name="2"]{
                 top: 64%;
                 left: 42%;
               }
              &[name="3"]{
                 top: 58%;
                 left: 51%;
               }
              &[name="4"]{
                 top: 63%;
                 left: 58%;
               }
              &[name="5"]{
                 top: 47%;
                 left: 69%;
               }
              &[name="6"]{
                 top: 54.8%;
                 left: 67.5%;
               }
              &[name="7"]{
                 top: 83%;
                 left: 72.5%;
               }
              &[name="8"]{
                 top: 31%;
                 left: 75%;
               }
              &[name="9"]{
                 top: 45%;
                 left: 79%;
               }

          }
      }
  }
</style>

