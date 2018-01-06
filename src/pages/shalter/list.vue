<template>
    <div>
      <Header :overview = overview></header>
      <div class="shalter-list-container">
        <div class="util-bar">
          <el-input
            v-model="search.name">
            <i slot="prefix" class="el-input__icon el-icon-search"></i>
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
            prop="id"
            label="网关序列号">
          </el-table-column>
          <el-table-column
            width="100"
            >
            <template slot-scope="scope">
              <i class="el-icon-edit cp"></i>
              <i class="el-icon-view cp"></i>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
</template>

<script>
    import Header from './header'
    export default{
      data(){
        return {
          search:{
            name:''
          },
          overview:{
            title:'大棚温室管理',
            items:['修改大棚名', '建立大棚、网关关联',]
          },
          list:[
            {
              name:'草莓大棚',
              id:'12342424'
            },
            {
              name:'葡萄玻璃温室',
              id:'12342424'
            },
          ]
        }
      },
      computed:{
        _list(){
          return this.list.filter(val => {
              return val.name.indexOf(this.search.name)>-1;
            });
        }
      },
      components:{
        Header,
      },
    }
</script>

<style rel="stylesheet/scss" lang="scss">
  .shalter-list-container{
    padding: 1.5rem;
    .util-bar{
      border-left:1px solid #e0e0e0;
      border-top:1px solid #e0e0e0;
      border-right:1px solid #e0e0e0;
      padding-left:30px;
      .el-input{
        font-size:1rem;
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
          padding-left:30px;
         }
      }
      td{
        &:nth-child(1){
           padding-left:30px;
         }
      }
    }
  }
</style>
