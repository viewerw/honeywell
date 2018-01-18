<<template>
    <div class="login">
        <div class="logo">
          <img src="../../assets/images/Honeywell_Logo.png">
        </div>
        <el-form class="user-form self-form noRequired" :model="formData" ref="user-form">
            <el-form-item label="用户名" prop="username" :rules="{required:true,message:'请输入用户名',trigger:'blur'}">
                <el-input type="text" class="self-input" v-model="formData.username"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password" :rules="{required:true,message:'请输入密码',trigger:'blur'}">
                <el-input type="password" class="self-input" v-model="formData.password"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button class="submit-btn self-btn" @click="login">登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                formData:{
                    username:'',
                    password:''
                },
            }
        },
        methods:{
            login(){
                let _error = true;
                this.$refs['user-form'].validate((valid)=>{
                    if(valid) {
                        _error = false;
                    }
                })
                if(_error) return;
                this.$router.push({name:'index'})
            }
        }
    }
</script>

<style lang="scss" scoped>
    .login{
        width:100%;
        height:100%;
        background-image:url(../../assets/images/login/bg.png);
        background-position: center center;
        background-repeat: no-repeat;
        .logo{
          width: max-content;
          margin-left: auto;
          position: absolute;
          margin-right: auto;
          left: 0;
          right: 0;
          top: calc(50% - 12rem);
        }
        .user-form{
            width: 480px;
            margin: 0 auto;
            position: absolute;
            top:50%;
            left: 50%;
            transform: translate(-50%,-50%);
            .submit-btn{
                width: 100%;
                color: #fff;
                background-color: #7EB338;
                border: 3px solid #7EB338;
            }
        }
    }
</style>
