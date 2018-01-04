<template>
    <div class="leftSide">
        <div class="header">
            <div class="title"></div>
            <div class="info"></div>
        </div>
        <div class="menu"></div>
        <div class="user"></div>
    </div>
</template>
<script >
    export default{

    }
</script>
<style lang ='scss' scoped>
    .leftSide{
        height: 100%;
        .header{
            height: 200px;
            border-bottom: 1px solid #000;
            .title{
                
            }
            .info{

            }
        }
        .menu{
            height: calc(100% - 300px);
            border: 1px solid #000;
        }
        .user{
            position: absolute;
            bottom: 0;
            height: 100px;
        }
    }
</style>