<template>
    <div class="index">
      <div class="pre">
        <el-tooltip class="mark" content="软枣猕猴桃区" placement="top" effect="light" :value="mark" popper-class="self-tip" :manual="true">
          <el-button class="point" name="1"></el-button>
        </el-tooltip>
        <el-tooltip class="mark" content="樱桃区" placement="bottom" effect="light" :value="mark" popper-class="self-tip" :manual="true">
          <el-button class="point" name="2"></el-button>
        </el-tooltip>
        <el-tooltip class="mark" content="蓝莓二区" placement="top" effect="light" :value="mark" popper-class="self-tip" :manual="true">
          <el-button class="point" name="3"></el-button>
        </el-tooltip>
        <el-tooltip class="mark" content="蓝莓一区" placement="bottom" effect="light" :value="mark" popper-class="self-tip" :manual="true">
          <el-button class="point" name="4"></el-button>
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
              mark:false
            }
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
  .index{
      width: 100%;
      height: 100vh;
      background-image: url(../../assets/images/index/map.png);
      background-size: cover;
      background-position-y: 66%;
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

