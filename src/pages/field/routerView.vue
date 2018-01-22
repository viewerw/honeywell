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
				label:'jljll',
				value:'',
				childrens:[{label:'son1',childrens:[{label:'son2',childrens:[{label:'son3'},{label:'son3'},{label:'son3'}]},{label:'son2',childrens:[{label:'son3'},{label:'son3'},{label:'son3'}]}]},{label:'son1',childrens:[{label:'son2',childrens:[{label:'son3'},{label:'son3'},{label:'son3'}]},{label:'son2',childrens:[{label:'son3'},{label:'son3'},{label:'son3'}]}]}]
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
