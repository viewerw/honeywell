<template>
    <div class="watering-map">
      <div class="info">
        <div class="title">灌溉系统</div>
        <div class="context">
          <p>园区灌溉系统总览</p>
          <p>水阀控制</p>
          <p>泵站设备信息</p>
        </div>
      </div>
      <div class="main-map">
        <div class="pipe1 pipe">
        </div>
        <div class="pipe2 pipe">
        </div>
        <div class="pipe3 pipe">
        </div>
        <div class="pipe4 pipe">
        </div>
        <div class="water-mac-s water-mac-s1 disable">
          <div class="pt"></div>
          <div class="sf"></div>
          <div class="water-popover water-popover1">
            软枣猕猴桃园
            <el-switch
              v-model="waterSwitch1"
              active-color="#7eb338"
              inactive-color="#d0d0d0">
            </el-switch>
          </div>
        </div>
        <div class="water-mac-s water-mac-s2 disable">
          <div class="pt"></div>
          <div class="sf"></div>
          <div class="water-popover water-popover2">
            樱桃区水阀
            <el-switch
              v-model="waterSwitch2"
              active-color="#7eb338"
              inactive-color="#d0d0d0">
            </el-switch>
          </div>
        </div>
        <div class="water-mac-s water-mac-s3 disable">
          <div class="pt"></div>
          <div class="sf"></div>
          <div class="water-popover water-popover3">
            蓝莓2区水阀
            <el-switch
              v-model="waterSwitch3"
              active-color="#7eb338"
              inactive-color="#d0d0d0">
            </el-switch>
          </div>
        </div>
        <div class="water-mac-s water-mac-s4 disable">
          <div class="pt"></div>
          <div class="sf"></div>
          <div class="water-popover water-popover4">
            蓝莓1区水阀
            <el-switch
              v-model="waterSwitch4"
              active-color="#7eb338"
              inactive-color="#d0d0d0">
            </el-switch>
          </div>
        </div>
        <div class="water-mac-s water-mac-s5 disable">
          <div class="pt"></div>
          <div class="sf"></div>
          <div class="water-popover water-popover5">
            玻璃温室水阀2
            <el-switch
              v-model="waterSwitch5"
              active-color="#7eb338"
              inactive-color="#d0d0d0">
            </el-switch>
          </div>
        </div>
        <div class="water-mac-s water-mac-s6 disable">
          <div class="pt"></div>
          <div class="sf"></div>
          <div class="water-popover water-popover6">
            玻璃温室水阀1
            <el-switch
              v-model="waterSwitch6"
              active-color="#7eb338"
              inactive-color="#d0d0d0">
            </el-switch>
          </div>
        </div>
        <div class="water-mac-s water-mac-s7 disable">
          <div class="pt"></div>
          <div class="sf"></div>
          <div class="water-popover water-popover7">
            草莓大棚南水阀
            <el-switch
              v-model="waterSwitch7"
              active-color="#7eb338"
              inactive-color="#d0d0d0">
            </el-switch>
          </div>
        </div>
        <div class="water-mac-s water-mac-s8 disable">
          <div class="pt"></div>
          <div class="sf"></div>
          <div class="water-popover water-popover8">
            草莓大棚北水阀
            <el-switch
              v-model="waterSwitch8"
              active-color="#7eb338"
              inactive-color="#d0d0d0">
            </el-switch>
          </div>
        </div>
        <div class="water-mac-s water-mac-s9 disable">
          <div class="pt"></div>
          <div class="sf"></div>
          <div class="water-popover water-popover9">
            草莓大棚总水阀
            <el-switch
              v-model="waterSwitch9"
              active-color="#7eb338"
              inactive-color="#d0d0d0">
            </el-switch>
          </div>
        </div>
        <div class="bz bz1 disable">
          <div class="sf"></div>
          <div class="water-popover water-popover12" :class="bzOpen?'able':''">
            <i :class="bzOpen?'el-icon-arrow-up':'el-icon-arrow-down'" style="margin-right: 5px;"></i>泵站变频控制启动开关
            <el-switch
              v-model="bzOpen"
              active-color="#7eb338"
              inactive-color="#d0d0d0">
            </el-switch>
            <div class="wzText">
              <div style="width:50%;">
                流量：2m/s
              </div>
              <div style="width:50%;">
                流量：2m/s
              </div>
              <div style="width:50%;">
                流量：2m/s
              </div>
              <div style="width:50%;">
                流量：2m/s
              </div>
              <div style="width:50%;">
                流量：2m/s
              </div>
            </div>
          </div>
        </div>
        <div class="bz bz2 disable">
          <div class="sf"></div>
          <div class="water-popover water-popover10">
            草莓大棚总水阀
            <el-switch
              v-model="waterSwitch10"
              active-color="#7eb338"
              inactive-color="#d0d0d0">
            </el-switch>
          </div>
        </div>
        <div class="bz bz3 disable">
          <div class="sf"></div>
          <div class="water-popover water-popover11">
            玫瑰花区水阀
            <el-switch
              v-model="waterSwitch11"
              active-color="#7eb338"
              inactive-color="#d0d0d0">
            </el-switch>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default{
        data(){
            return {
              waterSwitch1:false,
              waterSwitch2:false,
              waterSwitch3:false,
              waterSwitch4:false,
              waterSwitch5:false,
              waterSwitch6:false,
              waterSwitch7:false,
              waterSwitch8:false,
              waterSwitch9:false,
              waterSwitch10:false,
              waterSwitch11:false,
              bzOpen:true
            }
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .watering-map{
    background-image: url(../../assets/images/map_gray.png);
    height:100vh;
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    position:relative;
    .main-map{
      position: absolute;
      width: 54%;
      height: 65%;
      bottom: 8%;
      right: 18%;
      .water-popover{
        position: absolute;
        width:max-content;
        font-size:14px;
        box-shadow: 2px 2px 6px rgba(0,0,0,.12);
        background-color: #fff;
        padding: 4px;
        .el-switch{
          vertical-align: sub;
        }
        &.water-popover1{
           bottom: -40px;
           left: -39px;
          &::before{
             content: '';
             position: absolute;
             width: 0;
             height: 0;
             border-right: 6px solid transparent;
             border-bottom: 9px solid #fff;
             border-left: 6px solid transparent;
             top: -9px;
             left: 50px;
          }
        }
        &.water-popover2{
           bottom: -40px;
           left: -39px;
           padding: 4px;
           background-color: #fff;
          &::before{
             content: '';
             position: absolute;
             width: 0;
             height: 0;
             border-right: 6px solid transparent;
             border-bottom: 9px solid #fff;
             border-left: 6px solid transparent;
             top: -9px;
             left: 50px;
           }
         }
        &.water-popover3{
           bottom: -40px;
           left: -39px;
           padding: 4px;
           background-color: #fff;
          &::before{
             content: '';
             position: absolute;
             width: 0;
             height: 0;
             border-right: 6px solid transparent;
             border-bottom: 9px solid #fff;
             border-left: 6px solid transparent;
             top: -9px;
             left: 50px;
           }
         }
        &.water-popover4{
           bottom: -40px;
           left: -39px;
           padding: 4px;
           background-color: #fff;
            &::before{
               content: '';
               position: absolute;
               width: 0;
               height: 0;
               border-right: 6px solid transparent;
               border-bottom: 9px solid #fff;
               border-left: 6px solid transparent;
               top: -9px;
               left: 50px;
             }
         }
        &.water-popover5{
           bottom: -9px;
           left: -154px;
           padding: 4px;
           background-color: #fff;
          &::before{
             content: '';
             position: absolute;
             width: 0;
             height: 0;
             top: 8px;
             right: -10px;
             border-top: 6px solid transparent;
             border-left: 10px solid #fff;
             border-bottom: 5px solid transparent;
           }
         }
        &.water-popover6{
           bottom: -9px;
           left: -154px;
           padding: 4px;
           background-color: #fff;
          &::before{
             content: '';
             position: absolute;
             width: 0;
             height: 0;
             top: 8px;
             right: -10px;
             border-top: 6px solid transparent;
             border-left: 10px solid #fff;
             border-bottom: 5px solid transparent;
           }
         }
        &.water-popover7{
           bottom: -9px;
           left: -154px;
           padding: 4px;
           background-color: #fff;
            &::before{
               content: '';
               position: absolute;
               width: 0;
               height: 0;
               top: 8px;
               right: -10px;
               border-top: 6px solid transparent;
               border-left: 10px solid #fff;
               border-bottom: 5px solid transparent;
             }
         }
        &.water-popover8{
           left: -33px;
           padding: 4px;
           background-color: #fff;
           top: -42px;
          &::before{
             content: '';
             position: absolute;
             width: 0;
             height: 0;
             border-left: 6px solid transparent;
             border-right: 6px solid transparent;
             border-top: 9px solid #fff;
             bottom: -9px;
             left: 50px;
           }
         }
        &.water-popover9{
           bottom: -10px;
           right: 51px;
           padding: 4px;
           background-color: #fff;
           transform: rotateY(180deg);
            &::before{
               content: '';
               position: absolute;
               width: 0;
               height: 0;
               border-top: 6px solid transparent;
               border-right: 9px solid #fff;
               border-bottom: 6px solid transparent;
               top: 5px;
               left: -9px;
             }
         }
        &.water-popover10{
           bottom: -3px;
           right: -164px;
           padding: 4px;
           background-color: #fff;
          &::before{
             content: '';
             position: absolute;
             width: 0;
             height: 0;
             border-top: 6px solid transparent;
             border-right: 9px solid #fff;
             border-bottom: 6px solid transparent;
             top: 7px;
             left: -9px;
           }
         }
        &.water-popover11{
           bottom: -40px;
           left: 4px;
           padding: 4px;
           background-color: #fff;
          &::before{
             content: '';
             position: absolute;
             width: 0;
             height: 0;
             border-right: 6px solid transparent;
             border-bottom: 9px solid #fff;
             border-left: 6px solid transparent;
             top: -9px;
             left: 11px;
           }
         }

        &.water-popover12{
           bottom: -43px;
           left: 3px;
           padding: 4px;
           background-color: #fff;
           width: 208px;
          .wzText{
            display: none;flex-wrap: wrap;padding: 7px;
          }
          &.able{
            bottom: -119px;
            border:2px solid #7eb338;
            .wzText{
              display: flex;
            }
            &::before{
              border-bottom-color: #7eb338;
             }
           }
          &::before{
             content: '';
             position: absolute;
             width: 0;
             height: 0;
             border-right: 6px solid transparent;
             border-bottom: 9px solid #fff;
             border-left: 6px solid transparent;
             top: -9px;
             left: 8px;
           }
        }
      }
      .bz{
        position:absolute;
        background-image: url(../../assets/images/watering/bz.png);
        width: 4.5%;
        height: 6%;
        background-size: 100% 100%;
        &.disable{
          .sf{
            background-image: url(../../assets/images/watering/sfd-disable.png);
          }
         }
        .sf{
          background-image: url(../../assets/images/watering/sfd-able.png);
          position: absolute;
          width: 52%;
          height: 65%;
          top: 22%;
          right: 21%;
          background-position: center center;
          background-repeat: no-repeat;
          background-size: 100% 100%;
        }
      }
      .bz1{
        top: 50.3%;
        left: 67%;
      }
      .bz2{
        top: 26.3%;
        left: 77.6%;
        background-image: none;
      }
      .bz3{
        top: 42.9%;
        left: 71.8%;
        background-image: none;
      }
      .water-mac-s{
        position:absolute;
        width: 4%;
        height: 4%;
        &.disable{
            .pt{
              background-image: url(../../assets/images/watering/pt-disable.png);
            }
            .sf{
              background-image: url(../../assets/images/watering/sfx-disable.png);
            }
         }
        .pt{
          background-image: url(../../assets/images/watering/pt-able.png);
          width: 37%;
          height: 64%;
          background-size: 100% 100%;
          top: 43%;
          position: absolute;
        }
        .sf{
          background-image: url(../../assets/images/watering/sfx-able.png);
          width: 63%;
          height: 100%;
          background-size: 100% 100%;
          top: -2%;
          position: absolute;
          right: 0;
        }
      }
      .water-mac-s1{
        left: 13%;
        top: 47.2%;
      }
      .water-mac-s2{
        left: 26%;
        top: 62.5%;
      }
      .water-mac-s3{
        left: 40%;
        top: 54.5%;
      }
      .water-mac-s4{
        left: 51%;
        top: 67.5%;
      }
      .water-mac-s5{
        left: 64%;
        top: 42%;
      }
      .water-mac-s6{
        left: 66%;
        top: 31.7%;
      }
      .water-mac-s7{
        left: 75%;
        top: 22.7%;
      }
      .water-mac-s8{
        left: 77.5%;
        top: 13.9%;
      }
      .water-mac-s9{
        left: 85%;
        top: 37.1%;
        transform: rotateY(180deg);
      }
      .pipe{
        position: absolute;
        background-size:100% 100% ;
      }
      .pipe1{
        background-image: url(../../assets/images/watering/pipe1-able.png);
        width: 52%;
        height: 21%;
        top: 50.1%;
        left: 17%;
      }
      .pipe2{
        background-image: url(../../assets/images/watering/pipe2-able.png);
        height: 25%;
        width: 16%;
        left: 69%;
        top: 30.4%;
      }
      .pipe3{
        background-image: url(../../assets/images/watering/pipe3-able.png);
        width: 8%;
        height: 13%;
        top: 34.6%;
        left: 68%;
      }
      .pipe4{
        background-image: url(../../assets/images/watering/pipe4-able.png);
        width: 3%;
        height: 14%;
        top: 17%;
        left: 79%;
      }
    }
    .info{
      background-color: rgba(0,0,0,0.50);
      padding: 1rem;
      color:#fff;
      font-size: .9rem;
      width:10rem;
      top: 4rem;
      left: 4rem;
      position:absolute;
      .title{
        font-weight: bold;
        padding-bottom: .5rem;
        font-size: 1.2rem;
      }
      .context{
        line-height: 1.5rem;
      }
    }
  }
</style>

