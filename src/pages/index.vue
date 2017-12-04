<template>
<el-container style="height: 100vh; border: 1px solid #eee">

  <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
  	<div class = "top-logo"></div>
    <el-menu
      default-active="1"
	  :unique-opened="true"
	  :router="true"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>大棚</span>
        </template>
        <el-menu-item-group> 
          <el-menu-item index="/index/shalter?i=1">网关信息</el-menu-item>
          <el-menu-item index="1-2">网关信息</el-menu-item>
          <el-menu-item index="1-3">网关信息</el-menu-item>
          <el-menu-item index="1-4">网关信息</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>大田</span>
        </template>
        <el-menu-item-group> 
          <el-menu-item index="2-1">网关信息</el-menu-item>
          <el-menu-item index="2-2">网关信息</el-menu-item>
          <el-menu-item index="2-3">网关信息</el-menu-item>
          <el-menu-item index="2-4">网关信息</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="3">
        <i class="el-icon-setting"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
    </el-menu>
  </el-aside>
  
  <el-container>
    <el-header style="text-align: right; font-size: 12px">
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>退出</el-dropdown-item>
          
        </el-dropdown-menu>
      </el-dropdown>
      <span>王小虎</span>
    </el-header>
    
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</el-container>
</template>
<script >
	import {getCookie,removeCookie,setTitle,getStorage,setStorage,removeStorage} from '../config/util'
	import {mapState,mapActions} from 'vuex'
	export default {
	  
	  data(){
	    return {

	    }
	  },
	  computed:{


	  },
	  methods:{
	  	
	  	logout(){
	  		
            this.$router.push({name:'Login'});
	  	},
	  	
	  	
	  },
	  beforeMount(){
	  	
	  },

	  mounted(){
	  	
	  	
	  }
	}
</script>
<style lang ='scss' scoped>
@import 'src/scss/mixin';
/* .router-fade-enter-active, .router-fade-leave-active {
  	transition: all .3s;
}
.router-fade-enter {
  	opacity: 0;
  	transform:translateY(400px);
}
.router-fade-leave-active{
	opacity: 0;
  	transform:translateY(-400px);
} */
.top-logo{
	@include wh(100%,100px);
}
.el-header{
	background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
}
</style>