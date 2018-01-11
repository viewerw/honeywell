<template>
    <div class="left-side">
        <div class="header">
            <div class="title">
                <img src="">
            </div>
            <div class="info">
                <p>温度：25 ℃</p>
                <p>湿度：60%</p>
                <p>风力：1级</p>
            </div>
        </div>
        <div class="menu">
            <self-menu></self-menu>
        </div>
        <div class="user">
            <p>用户名：admin</p>
            <p class="cp"><span @click="logout">退出</span></p>
        </div>
        <!--<div class="slide-bar" :class="slideOpen?'open':''" @click="toggleSlide"></div>-->
        <div class="new-slide-bar" :class="slideOpen?'open':''" @click="toggleSlide">
          <i class="iconfont" :class="slideOpen?'icon-close':'icon-slidebar'"></i>
        </div>
    </div>
</template>
<script >
    import selfMenu from '../../components/menu'
    export default{
        data(){
          return {
            slideOpen:true,
          }
        },
        components:{selfMenu},
        methods:{
            logout(){
                this.$router.push({name:'login'})
            },
            toggleSlide(){
                this.slideOpen = !this.slideOpen;
                this.$emit('toggle');
            }
        }
    }
</script>
<style lang ='scss' scoped>

    .left-side{
        height: 100%;
        background-color: #404040;
        color:#fff;
        .header{
            height:14rem;
            .title{
                padding:2.5rem 2.5rem;
                img{
                    width:10.5rem;
                    height: 3rem;
                }
            }
            .info{
                padding-left:1rem;
                padding-bottom:1.5rem;
                p{
                    font-size: 1.05rem;
                    line-height: 1.45rem;
                }
            }
        }
        .menu{
            height: calc(100% - 19rem);
            background-color: transparent;
            border-right-color: transparent;
            overflow-y: auto;
        }
        .user{
            position: absolute;
            width: 100%;
            bottom: 0;
            height: 5rem;
            font-size: 1rem;
            background-color: #5B5B5B;
            color:#b0b0b0;
            p{
                line-height: 2.1rem;
                padding-left: 1rem;
                &:nth-child(1){
                    padding-top: 0.5rem;
                }
            }
        }
        .new-slide-bar{
            position: fixed;
            z-index: 100;
            left: 1rem;
            top: 1rem;
            i{
              font-size: 1.5rem;
              color: #2c2c2c;
              font-weight: bold;
              cursor: pointer;
            }
            &.open{
                left: 17.25rem;
            }
        }
        .slide-bar{
            cursor: pointer;
            display: block;
            position: absolute;
            z-index: 100;
            right: -13px;
            top: 50%;
            width: 13px;
            height: 0;
            margin: -25px 0 0;
            padding: 50px 0 0;
            overflow: hidden;
            transition: width 0.1s, right 0.1s;
            -webkit-animation: width 0.1s, right 0.1s;
            -moz-animation: width 0.1s, right 0.1s;
            -o-animation: width 0.1s, right 0.1s;
            background: url(../../assets/images/slide-icon.png) no-repeat right -110px;
            &:hover{
                width: 20px;
                right: -20px;
            }
            &.open{
                background-position: 0 -60px;
                right: 0;
                &:hover{

                }
            }
        }
    }
</style>
