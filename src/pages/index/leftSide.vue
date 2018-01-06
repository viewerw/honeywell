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
            height: 20rem;
            border-bottom: 1px solid #000;
            .title{
                
            }
            .info{

            }
        }
        .menu{
            height: calc(100% - 30rem);
            border: 1px solid #000;
        }
        .user{
            position: absolute;
            bottom: 0;
            height: 10rem;
        }
    }
</style>