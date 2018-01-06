<template>
    <div class = "threshold-set">
        <div class = "title">
            {{title}}
        </div>
        <div class = "left inline">
            <div style = "margin:9px 0" :class = "{space:index===2}" v-for = "(label,index) in labels" :key ="index" >{{label}}</div>
        </div>
        <div class = "middle inline">
            <div class = "degree-bg"></div>
        </div>
        <div class = "right inline">
            <el-radio-group v-model="value" size="mini" >
                <el-radio style = "display:block;margin-bottom:10px" :class = "{space:index===1}"v-for = "(item,index) in values" v-model="value"  :label="item" border>{{item}}</el-radio>
            </el-radio-group> 
        </div>
    </div>
</template>

<script>
    export default{
        data(){
            return {
                labels:['危险区域','警戒区域','安全区域','警戒区域','危险区域'],

            }
        },
        props:['title','values','value'],
        methods:{

        }
    }
</script>

<style lang="scss" scoped>
    .threshold-set{
        width:200px;
        height:300px;
        display: inline-block;
        .title {
            text-align: center;
            line-height:40px;
            margin-bottom:10px;
        }
        .left{
            padding:5px 0;
            .space{
                margin:20px 0 !important;
            }
        }
        .middle{
            .degree-bg{
                background-image: url(../../assets/images/threshold-bg.png);
                height:200px;
                width:5px;
                margin:0 30px;
                background-size:cover;
            }
            .degree-bg::before{
                content:'高';
                position: relative;
                top:-25px;
                left:-4px;
            }
            .degree-bg::after{
                content:'低';
                position: relative;
                top:178px;
                left:-4px;
            }
            
        }
        .right{
            padding:20px 0;
            .space {
                margin-bottom:40px!important;
            }
        }
        .inline{
            display: inline-block;
            vertical-align: top;
        }
    }
</style>
