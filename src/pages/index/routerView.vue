<template>
    <div class="main-container">
        <div class="left-side">
            <left-side></left-side>
        </div>
        <div class="right-side">
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

            }
        },
        components:{LeftSide}
    }
</script>
<style lang ='scss' scoped>
@import 'src/scss/mixin';
.main-container{
    .left-side{
        border: 1px solid #000;
        height:100vh;
        width: 315px;
        position: fixed;
        top: 0;
        left: 0;
    }
    .right-side{
        margin-left: 315px;
        min-height: 100vh;
    }
}
</style>