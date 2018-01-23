<template>
    <div>
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
					title:'大田概况',
					items:['大棚内分南北两个区域',
						'装备有一个网关',
						'十四个传感器',
						'十三个控制器']
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
<style >



</style>
