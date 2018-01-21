<template>
	<div class = "minitor-video">
        <el-button @click = "showVideo">{{minitor.name}}<i class="el-icon-caret-right" style="padding-left:20px "></i></el-button>
        <el-dialog :title="minitor.name" :visible.sync="dialogTableVisible" @close="stopVideo" class="shalter-edit-dialog" width="50%">
            <video ref = "video" :src = "src" autoplay controls></video>
            <div class="mutilSrc">
              <div v-for="item in minitor.urls" :class="src===item.value?'active':''" @click="switchSrc(item.value)">{{item.name}}</div>
            </div>
        </el-dialog>
	</div>
</template>
<script type="text/javascript">
	export default{
    data(){
      return{
        dialogTableVisible:false,
        src:''
      }
    },
    props:['minitor'],
    mounted(){
      this.src = this.minitor.urls[0].value
    },
    methods:{
      showVideo(){
        this.dialogTableVisible = true;
      },
      stopVideo(){
        this.$refs.video.pause();
      },
      switchSrc(src){
        this.src = src;
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
          margin-bottom: 20px;
        }
        .mutilSrc{
          display: flex;
          width: 300px;
          margin: 0 auto;
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background-color: #4e4e4e;
          color: #fff;
          line-height: 30px;
          &>div{
              flex: 1;
              text-align: center;
              cursor:pointer;
            &.active{
              color:#7eb338;
             }
            }
        }
    }
</style>
