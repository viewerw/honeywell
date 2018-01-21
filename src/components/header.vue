<template>
	<div class = "header-bg">
        <div class = "overview">
            <div class = "title">
                {{overview.title}}
            </div>
            <div class = "detail">
                <p v-for="item in overview.items">{{item}}</p>
            </div>
        </div>
	</div>
</template>
<script type="text/javascript">
	export default{
		data(){
			return{

			}
		},
        props:['overview']
	}
</script>
<style lang = "scss" scoped>
.header-bg{
    background-image: url('../assets/images/shalterHeader.png');
    width: 100%;
    height:250px;
    background-size: cover;
    padding-top: 100px;
    box-sizing: border-box;
    .overview{
        margin:0 auto ;
        background-color:rgba(0,0,0,0.5);
        height:150px;
        padding:40px 20px 0 ;
        box-sizing:border-box;
        width:max-content;
        .title {
            display: inline-block;
            height:80%;
            font-family: PingFangSC-Medium;
            font-size: 40px;
            color: #FFFFFF;
            letter-spacing: 0;
            vertical-align: top;
            margin-right:30px;
        }
        .detail {
            display: inline-block;
            height:80%;
            font-family: PingFangSC-Light;
            font-size: 18px;
            color: #FFFFFF;
            vertical-align: top;
            white-space: pre;
        }
    }
}
</style>
