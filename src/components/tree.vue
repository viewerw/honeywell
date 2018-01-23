<template>
    <div>
        <!--<el-popover
            ref="popover"
            placement="top"
            trigger="hover"
            popper-class="self-popover"
            :value="switchPopover"
            v-model="switchPopover">
            <div class="popover-warn"><i class="iconfont icon-warn"></i></div>
            <div class="popover-content">
                <div class="close" @click="switchPopover=false">
                <i class="el-icon-close"></i>
                </div>
                <div class="content">
                <div class="title">控制器开关提醒</div>
                <div class="tip">确定要打开水阀<span @click="switchPopover=false">确认开启</span></div>
                </div>
            </div>
        </el-popover>-->
    <div class = "tree-overview">
        <div style="flex:1;display:flex" >
            <div style="flex:3" class="ver first">
                <div class="demo">{{treeData.label}}</div>
            </div>
        </div>
        <div style="flex:1" class="son">
            <div v-for = "(item,index) in node1" :style="{flex:item.grandChildLength}" class="ver" :class = "computedClassSon(index,node1)">
                <div class="demo">{{item.label}}</div>
            </div>
        </div>
        <div style="flex:1" class="son">
            <template v-for="it in node2">
                <div v-for = "(item,index) in it" :style="{flex:item.childrens.length}" class="ver" :class = "computedClassSon(index,it)">
                    <div class="demo"><span style = "display:flex;align-items:center">
                             <img class = "editimg" src = "../assets/images/edit.png" @click = "showEditDialog"/>
                             <span>
                            {{item.label}}
                             </span>
                        </span></div>
                </div>
            </template>
        </div>

        <div style="flex:2.2">
            <template v-for="(it,index0) in node3">
                <div class="unit ver last" v-for = "(item,index) in it" :key="index0*10+index" :class = "computedClassSon(index,it)">
                    <div class="last-node">
                       
                        <span style = "display:flex;align-items:center">
                             <img class = "editimg" src = "../assets/images/edit.png"  @click = "showEditDialog"/>
                             <span>
                            {{item.label}}
                             </span>
                        </span>
                        <el-popover
                            
                            placement="top"
                            trigger="hover"
                            popper-class="self-popover"
                            :value="switchPopover"
                            >
                            <div class="popover-warn"><i class="iconfont icon-warn"></i></div>
                            <div class="popover-content">
                                <div class="close" @click="switchPopover=false">
                                <i class="el-icon-close"></i>
                                </div>
                                <div class="content">
                                <div class="title">控制器开关提醒</div>
                                <div class="tip">确定要打开水阀<span @click="switchPopover=false">确认开启</span></div>
                                </div>
                            </div>
                            <el-switch
                                slot = "reference"
                               
                                v-model="item.value"
                                active-color="#7eb338"
                                inactive-color="#444444">
                            </el-switch>
                        </el-popover>
                        
                        </div>
                </div>
            </template>
        </div>
    </div>
    <!--修改控制器名-->
    <el-dialog class="shalter-edit-dialog" :visible.sync="editDialogSensorVisible" width="30%"  @close="editDialogSensorVisible=false">
      <div slot="title" class="title">修改控制器名</div>
      <el-form>
        <el-form-item label="控制器名：" label-width="100px">
          <el-input></el-input>
        </el-form-item>
      </el-form>
			<span slot="footer" class="dialog-footer">
				<el-button type="text" style = "width:100px;font-size:25px;font-weight:bold;margin-right:30px" @click="editDialogSensorVisible=false">确 定</el-button>
			</span>
    </el-dialog>
    </div>
</template>

<script>
    export default{
        data(){
            return {
                switchPopover:false,
                editDialogSensorVisible:false,
            }
        },
        props:['treeData'],
        computed:{
            node1(){
                let node1 = this.treeData.childrens;
                let count = 0;
                node1.map(item0=>{
                    item0.childrens.map(item=>{
                        item.childrens.map(it=>{
                            count++;
                        })
                    })
                    item0.grandChildLength = count;
                    count=0;
                })
                console.log('node1')
                console.log(node1)
                return node1;
            },
            node2(){
                let node2 = [];
                this.node1.map(item=>{
                    node2.push(item.childrens)
                })
                console.log('node2')
                console.log(node2)
                return node2;
            },
            node3(){
                let node3 = [];
                this.node2.map(item=>{
                    item.map(it=>{
                        node3.push(it.childrens);
                    })
                    
                })
                return node3;
            }
        },
        methods:{
            computedClassSon(index,node){
                if(node.length===1){
                    return '';
                }else if(node.length===2){
                    if(index===0){
                        return 'hoz1';
                    }else {
                        return 'hoz'
                    }
                }else if(node.length>=3){
                    if(index===0){
                        return 'hoz1';
                    }else if(index ===node.length-1){
                        return 'hoz'
                    }else {
                        return 'hoz0'
                    }
                }
            },
            showEditDialog(){
                this.editDialogSensorVisible = true;
            }
        }
    }
</script>

<style lang="scss" >
.tree-overview {
    
    padding:50px;
    box-sizing:border-box;
        width:100%;
        display:flex;
    div{
        margin: 0;
        padding: 0;
        position: relative;
      }
      .ver::before{
        position: absolute;
        width: 100%;
        border-bottom: 3px solid #707070;
        content: '';
        top:50%;
      }
      .ver.last::before{
        position: absolute;
        width: 50%;
        border-bottom: 3px solid #707070;
        content: '';
        top:50%;
      }
      .ver.first::before{
        position: absolute;
        width: 50%;
        border-bottom: 3px solid #707070;
        content: '';
        top:50%;
        right:0;
      }
      .hoz::after{
        position: absolute;
        height: 50%;
        bottom: 50%;
        left:0;
        border-left:3px solid #707070 ;
        content: '';
      }
      .hoz0::after{
        position: absolute;
        height: 100%;
        left:0;
        border-left:3px solid #707070 ;
        content: '';
      }
      .hoz1::after{
        content: '';
        position: absolute;
        height: 50%;
        top: 50%;
        left: 0;
        border-left:3px solid #707070 ;
      }


      .son{
        display: flex;
        flex-direction: column;
      }
      .son{
        display: flex;
        flex-direction: column;
      }

      .unit{
        width: 100%;
        height: 55px;
      }
      .demo{
          text-align: center;
          display: flex;
          justify-content: space-between;
         align-items: center;
         padding-left:10px;
         box-sizing:border-box;
        width: 180px;
        height: 50px;
        position: absolute;
        margin: auto;
        left: 0px;
        right: 0;
      bottom: 0;
        top: 0;
        background-color: #e0e0e0;
        z-index: 99;
      }
      .last-node{
          display: flex;
          justify-content: space-between;
         align-items: center;
         padding:0 10px;
         box-sizing:border-box;
          width: 400px;
        height: 50px;
        position: absolute;
        margin: auto;
        left: 0px;
        right: 0;
      bottom: 0;
        top: 0;
        background-color: #e0e0e0;
        z-index: 99;
      }
      .editimg{
          width:30px;
          margin-right:10px;
      }
}
</style>