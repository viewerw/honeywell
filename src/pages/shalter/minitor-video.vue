<template>
	<div class = "minitor-video">
        <el-button @click = "showVideo">{{minitor.name}}</el-button>
        <el-dialog :title="minitor.name" :visible.sync="dialogTableVisible" @close="stopVideo">
            <video ref = "video" :src = "minitor.url" autoplay controls></video>
        </el-dialog>
	</div>
</template>
<script type="text/javascript">
	export default{
		data(){
			return{
				dialogTableVisible:false
			}
		},
        props:['minitor'],
        methods:{
            showVideo(){
                this.dialogTableVisible = true;
            },
            stopVideo(){
                this.$refs.video.pause();
            }
        }
	}
</script>
<style lang = "scss" scoped>
    .minitor-video{
        display: inline-block;
        margin-right:30px;
        video{
            width:100%;
        }
    }
</style>