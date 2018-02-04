<template>
  <div style="overflow-x: auto;">
    <Header :overview = overview></header>
    <Tree :treeData = treeData></tree>
  </div>
</template>
<script type="text/javascript">
  import Header from '../../components/header'
  import Tree from '../../components/Tree'

  export default {

    data(){
      return {
        overview:{
          title:'大田设备管理',
          items:['大田设备连接框架',
            '修改大田名',
            '修改设备名',
            '查看、控制设备']
        },
        treeData:{
          label:'园区loar网关',
          childrens:[{label:'控制器5811',childrens:[{label:'蓝莓一区',childrens:[{label:'蓝莓1区土壤含水率传感器',showSwitch:false,value:'80%',switch:true},{label:'蓝莓1区土壤含水率传感器',showSwitch:true,value:'80%',switch:true},{label:'蓝莓1区土壤含水率传感器',showSwitch:false,value:'80%',switch:true}]},{label:'蓝莓一区',childrens:[{label:'蓝莓1区土壤含水率传感器',showSwitch:true,value:'80%',switch:true},{label:'蓝莓1区土壤含水率传感器',showSwitch:false,value:'80%',switch:true},{label:'蓝莓1区土壤含水率传感器',showSwitch:true,value:'80%',switch:true}]}]},{label:'控制器5811',childrens:[{label:'蓝莓一区',childrens:[{label:'蓝莓1区土壤含水率传感器',showSwitch:false,value:'80%',switch:true}]}]},{label:'控制器5812',childrens:[{label:'蓝莓一区',childrens:[{label:'蓝莓1区土壤含水率传感器',showSwitch:true,value:'80%',switch:true},{label:'蓝莓1区土壤含水率传感器',showSwitch:false,value:'80%',switch:true},{label:'蓝莓1区土壤含水率传感器',showSwitch:true,value:'80%',switch:true}]},{label:'蓝莓三区',childrens:[{label:'蓝莓1区土壤含水率传感器',showSwitch:false,value:'80%',switch:true},{label:'蓝莓1区土壤含水率传感器',showSwitch:true,value:'80%',switch:true}]}]}]
        }
      }
    },
    components:{
      Header,
      Tree,
    },
    mounted(){

    },
    method:{

    }
  }
</script>
<style>
</style>
