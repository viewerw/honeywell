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
        </div>
        <el-table
          :data="_list"
          stripe
          class="self-table-normal self-table"
          style="width:100%"
          >
          <el-table-column
            prop="name"
            label="大棚名">
          </el-table-column>
          <el-table-column
            prop="gateway"
            label="网关序列号">
          </el-table-column>
          <el-table-column
            prop="gatewayName"
            label="网关名">
          </el-table-column>
          <el-table-column
            width="100"
            >
            <template slot-scope="scope">
              <i class="el-icon-edit cp pr20 act-btn" @click="edit(scope.row.id)"></i>
              <i class="el-icon-view cp act-btn" @click="goDetail"></i>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <el-dialog :visible.sync="editVisible" class="self-dialog">
        <div slot="title" class="title">大棚修改</div>
        <el-form :model="editForm">
          <el-form-item label="大棚名" :label-width="labelWidth">
            <el-input v-model="editForm.name"></el-input>
          </el-form-item>
          <el-form-item label="网关序列号" :label-width="labelWidth">
            <el-select placeholder="选择网关序列号" style="width:100%;" value="111111" disabled>
              <el-option label="111111" value="1" selected></el-option>
              <el-option label="222222" value="2"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="网关名" :label-width="labelWidth">
            <el-select placeholder="选择网关名" style="width:100%;" value="网关1" disabled>
              <el-option label="网关1" value="1"></el-option>
              <el-option label="网关2" value="2"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="editVisible = false">取 消</el-button>
          <el-button type="primary" @click="editVisible = false">确 定</el-button>
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
          labelWidth:'120px',
          search:{
            name:''
          },
          editForm:{
            id:'',
            name:'',
            gateway:'',
          },
          overview:{
            title:'大棚温室管理',
            items:['修改大棚名', '建立大棚、网关关联',]
          },
          list:[
            {
              id:1,
              name:'草莓大棚',
              gatewayName:'网关1',
              gateway:'12342424'
            },
            {
              id:2,
              name:'葡萄玻璃温室',
              gatewayName:'网关1',
              gateway:'12342424'
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
  .shalter-edit-dialog{
    .el-dialog{
      width: 30rem;
      border: 2px solid #7eb338;
      .el-dialog__body{
        padding-left: 2rem;
        padding-right: 2rem;
        .el-form-item__label{
        }
      }
      .el-button{
      }
    }
    .title{
      text-align: center;
    }
  }
</style>
