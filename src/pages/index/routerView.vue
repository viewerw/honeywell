<template>
    <div class="main-container" :class="close?'left-close':''">
        <div class="left-side trans">
            <left-side @toggle="toggleSlide" @showEditUser="editVisible = true"></left-side>
        </div>
        <div class="right-side trans">
            <router-view></router-view>
        </div>
        <el-dialog :visible.sync="editVisible" class="self-dialog self-main-dialog"  @close="editVisible=false" style="z-index: 3000;">
          <div slot="title" class="title">修改密码</div>
          <el-form :model="editForm">
            <el-form-item label="用户名" :label-width="labelWidth">
              <el-input></el-input>
            </el-form-item>
            <el-form-item label="密码" :label-width="labelWidth">
              <el-input></el-input>
            </el-form-item>
            <el-form-item label="确认密码" :label-width="labelWidth">
              <el-input></el-input>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="editVisible=false">取 消</el-button>
            <el-button type="primary" @click="editVisible=false">确 定</el-button>
          </div>
        </el-dialog>
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
                close:false,
                editVisible:false,
                labelWidth:'90px',
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
<style lang ='scss'>
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
        width: 15.75rem;
        position: fixed;
        top: 0;
        left: 0;
        z-index:9;
    }
    .self-main-dialog{
      z-index: 3000!important;
    }
    .right-side{
        margin-left: 15.75rem;
        min-height: 100vh;
        z-index: 8;
    }
    &.left-close{
       .left-side{
         left: -15.75rem;
       }
       .right-side{
         margin-left: 0;
       }
     }
}
</style>
