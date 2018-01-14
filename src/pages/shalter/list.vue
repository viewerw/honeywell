<template>
    <div>
      <Header :overview = overview></header>
      <div class="shalter-list-container">
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
          class="shalter-list-table"
          style="width:100%"
          >
          <el-table-column
            prop="name"
            style="padding-left: 30px"
            label="大棚名">
          </el-table-column>
          <el-table-column
            prop="gateway"
            label="网关序列号">
          </el-table-column>
          <el-table-column
            width="100"
            >
            <template slot-scope="scope">
              <i class="el-icon-edit cp" @click="edit(scope.row.id)"></i>
              <i class="el-icon-view cp" @click="goDetail"></i>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <el-dialog :visible.sync="editVisible" class="shalter-edit-dialog">
        <div slot="title" class="title">大棚修改</div>
        <el-form :model="editForm">
          <el-form-item label="大棚名" :label-width="labelWidth">
            <el-input v-model="editForm.name"></el-input>
          </el-form-item>
          <el-form-item label="网关序列号" :label-width="labelWidth">
            <el-select v-model="editForm.region" placeholder="选择网关序列号" style="width:100%;">
              <el-option label="111111" value="1"></el-option>
              <el-option label="222222" value="2"></el-option>
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
    import Header from './header'
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
              gateway:'12342424'
            },
            {
              id:2,
              name:'葡萄玻璃温室',
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
          font-size: 1rem;
        }
      }
      .el-button{
        font-size: 1rem;
      }
    }
    .title{
      text-align: center;
      font-size: 1.2rem;
    }
  }
  .shalter-list-container{
    padding: 1.5rem;
    .util-bar{
      border-left:1px solid #e0e0e0;
      border-top:1px solid #e0e0e0;
      border-right:1px solid #e0e0e0;
      padding-left:1.5rem;
      .el-input{
        font-size:1rem;
        padding-left:1rem;
        width:15rem;
        input{
          border: none;
        }
      }
    }
    .shalter-list-table{
      border-left:1px solid #e0e0e0;
      border-right:1px solid #e0e0e0;
      border-bottom:1px solid #e0e0e0;
      font-size:1rem;
      th{
        background-color: #f7f7f7;
        &:nth-child(1){
          padding-left:1.5rem;
         }
      }
      td{
        &:nth-child(1){
           padding-left:1.5rem;
         }
      }
    }
  }
</style>
