<template>
  <div>
    <Header :overview = overview></header>
    <div class="list-container">
      <div class="util-bar">
        <el-input
          v-model="search.name">
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
          <i slot="suffix" class="el-input__icon el-icon-close cp" @click="clearSearch" v-show="closeShow"></i>
        </el-input>
        <i class="el-icon-plus fr act-btn cp" style="margin-right: 20px;margin-top: 10px" @click="addVisible=true"></i>
      </div>
      <el-table
        :data="_list"
        stripe
        class="self-table-normal self-table"
        style="width:100%"
      >
        <el-table-column
          prop="name"
          label="用户名">
        </el-table-column>
        <el-table-column
          prop="lastLogin"
          label="最后登录时间">
        </el-table-column>
        <el-table-column
          width="100">
          <template slot-scope="scope">
            <i class="el-icon-edit cp pr20 act-btn" @click="edit(scope.row.id)"></i>
            <i class="el-icon-delete cp act-btn" @click="remove"></i>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-dialog :visible.sync="editVisible" class="self-dialog">
      <div slot="title" class="title">修改用户</div>
      <el-form :model="editForm">
        <el-form-item label="用户名" :label-width="labelWidth">
          <el-input v-model="editForm.name" value="admin"></el-input>
        </el-form-item>
        <el-form-item label="密码" :label-width="labelWidth">
          <el-input v-model="editForm.pwd" value="admin" type="password"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="editVisible = false">取 消</el-button>
        <el-button type="primary" @click="editVisible = false">确 定</el-button>
      </div>
    </el-dialog>
    <el-dialog :visible.sync="addVisible" class="self-dialog">
      <div slot="title" class="title">添加用户</div>
      <el-form :model="editForm">
        <el-form-item label="用户名" :label-width="labelWidth">
          <el-input v-model="editForm.name"></el-input>
        </el-form-item>
        <el-form-item label="密码" :label-width="labelWidth">
          <el-input v-model="editForm.pwd"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="addVisible = false">取 消</el-button>
        <el-button type="primary" @click="addVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  import Header from './../../components/header'
  export default{
    data(){
      return {
        editVisible:false,
        addVisible:false,
        removeVisible:false,
        labelWidth:'80px',
        search:{
          name:''
        },
        editForm:{
          id:'',
          name:'',
          pwd:'',
        },
        overview:{
          title:'人员管理',
          items:['管理用户登录', '添加用户','修改用户','删除用户']
        },
        list:[
          {
            id:1,
            name:'admin',
            lastLogin:'2017年12月28日  12:00',
          },
          {
            id:2,
            name:'user1',
            lastLogin:'2017年12月28日  13:00',
          },
        ]
      }
    },
    computed:{
      _list(){
        return this.list.filter(val => {
            return val.name.indexOf(this.search.name)>-1;
      });
      },
      closeShow(){
        return !!this.search.name||(this.search.name === 0)
      }
    },
    components:{
      Header,
    },
    methods:{
      edit(id){
        this.editVisible = true;
        this.editForm.id = id;
      },
      remove(){
        this.$confirm(`删除该用户?`,{
          type:'warning',
          showCancelButton:false,
        })
      },
      goDetail(){
        this.$router.push({name:'shalterDetail'})
      },
      clearSearch(){
        this.search.name = ''
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss">
</style>
