<template>
    <div class="main-container" :class="close?'left-close':''">
        <div class="left-side trans">
            <left-side @toggle="toggleSlide"></left-side>
        </div>
        <div class="right-side trans">
            <router-view></router-view>
        </div>
    </div>
</template>
<script >
    /**
     * 登录后的视图容器
     */
    import LeftSide from './leftSide'
    export default{
        data(){
            return{
                close:false
            }
        },
        methods:{
            toggleSlide(){
              this.close = !this.close;
            }
        },
        components:{LeftSide}
    }
</script>
<style lang ='scss' scoped>
@import 'src/scss/mixin';
.trans {
  transition: all 0.2s;
  -moz-transition: all 0.2s;
  -ms-transition: all 0.2s;
  -o-transition: all 0.2s;
  -webkit-transition: all 0.2s;
}
.main-container{
    .left-side{
        height:100vh;
        width: 16.25rem;
        position: fixed;
        top: 0;
        left: 0;
        z-index:9;
    }
    .right-side{
        margin-left: 16.25rem;
        min-height: 100vh;
        z-index: 8;
    }
    &.left-close{
       .left-side{
         left: -16.25rem;
       }
       .right-side{
         margin-left: 0;
       }
     }
}
</style>
