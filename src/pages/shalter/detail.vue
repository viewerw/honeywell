<template>
	<div>
		<Header :overview = overview></header>
    <el-popover
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
    </el-popover>
		<div class = "container">
			<div class = "minitor">
				<minitor-video v-for = "minitor in minitors" :minitor="minitor"></minitor-video>
			</div>
			<el-table
				:data="getwayTable"
				border
				style="width: 100%">
				<el-table-column
					prop="name"
					label="设备名称"
					width="180">
				</el-table-column>
				<el-table-column
					prop="id"
					label="序列号"
					width="180">
				</el-table-column>
				<el-table-column
					prop="status"
					label="设备状态">
				</el-table-column>
				<el-table-column label="操作">
					<template slot-scope = "scope">
            <div class="tr pr20">
              <i class="el-icon-edit" @click = "changeGetwayName"></i>
            </div>
					</template>
				</el-table-column>
			</el-table>
			<div class= "sensor">
				<div class = "sensor-title">传感器1</div>
			<el-table
				:data="sensorTable"
				default-expand-all
				style="width: 100%">
          <el-table-column type="expand">
                <template class = "" slot-scope="props">
                <el-row class ="expand-row" v-for = "sensor in props.row.group">
                  <el-col :span = "4">{{sensor.name}}</el-col>
                  <el-col :span = "4">{{sensor.degree}}(<span class="goChart" @click="dialogChartVisible=true">历史曲线</span>)</el-col>
                  <el-col :span = "4">{{sensor.id}}</el-col>
                  <el-col :span = "4">{{sensor.status}}</el-col>
                  <el-col :span = "4">{{sensor.time}}</el-col>
                  <el-col :span = "4">
                    <div class="cell">
                      <div class="tr pr20">
                        <i class="el-icon-edit"></i></div>
                      </div>
                  </el-col>
                </el-row>
                </template>
           </el-table-column>
          <el-table-column label="设备名称">
             <template  slot-scope="scope">
               <span>{{scope.row.name}}</span>
             </template>
           </el-table-column>
          <el-table-column label="读数">
             <template slot-scope="scope">
                <el-select size = "mini" v-model="scope.row.threshold" placeholder="请选择">
                  <el-option
                  v-for="item in thresholds"
                  :key="item.id"
                  :label="item.label"
                  :value="item.id">
                    <span style="float: left">{{ item.label }}</span>
                    <i  style = "float:right;margin-top:10px;" @click.stop = "editThreshold(item.label,item.value,item.id)" class=" icon-position el-icon-edit "></i>
                  </el-option>
                  <el-option style = "background:#7eb338;color:#ffffff;">
                    <span  @click.stop= "addNewThreshold"><i class="el-icon-plus"></i>添加阈值设定</span>
                  </el-option>
              </el-select>
             </template>
           </el-table-column>
          <el-table-column label="序列号"></el-table-column>
          <el-table-column label="设备状态"></el-table-column>
          <el-table-column label="更新时间"></el-table-column>
          <el-table-column :render-header="renderSensorOptionHeader">
            <template slot-scope = "scope">
              <div class="tr pr20">
                <i class="el-icon-delete" @click = "deleteGroup('sensor',scope.row.id,scope.row.name)"></i>
              </div>
            </template>
          </el-table-column>
			</el-table>
			</div>
		<!--控制器-->
		<div class= "control">
				<div class = "control-title">控制器1</div>
			<el-table
				:data="controlTable"
				default-expand-all
				style="width: 100%">
          <el-table-column type="expand">
            <template class = "" slot-scope="props">
            <el-row class ="expand-row" v-for = "(sensor,index) in props.row.group">
              <span style="width:20%" >{{sensor.name}}</span>
              <span style="width:20%">{{sensor.id}}</span>
              <span style="width:20%">{{sensor.status}}</span>
              <span style="width:20%">{{sensor.time}}</span>
              <span style="width:18%">
                <div class="cell">
                  <div class="tr pr20">
                    <el-switch
                      v-if="sensor.switch !== undefined"
                      v-model="sensor.switch"
                      v-popover:popover
                      active-color="#13ce66"
                      inactive-color="#ff4949">
                    </el-switch>
                    <div class="open-close" v-else>
                      <div class="open-close-open">开</div>
                      <div class="open-close-close">关</div>
                      <div class="open-close-stop">停</div>
                    </div>
                  </div>
                </div>
              </span>
            </el-row>
            </template>
          </el-table-column>
          <el-table-column label="设备名称">
             <template  slot-scope="scope">
               <span>{{scope.row.name}}</span>
             </template>
           </el-table-column>
          <el-table-column label="序列号"></el-table-column>
          <el-table-column label="设备状态"></el-table-column>
          <el-table-column label="最后更新时间"></el-table-column>
          <el-table-column :render-header="renderSensorOptionHeader" >
            <template slot-scope = "scope" >
              <div class="tr pr20">
                <i class="el-icon-delete" @click = "deleteGroup('sensor',scope.row.id,scope.row.name)"></i>
              </div>
            </template>
          </el-table-column>
			</el-table>
			</div>
		</div>
		<!--网关名-->
		<el-dialog title = "网关名修改" :visible.sync="dialogGetwayVisible" width="30%"  @close="closeGetwayDialog">
			<span>网关名</span>
			<el-input v-model = "getwayName" size = "small" style = "width:250px"></el-input>
			<span slot="footer" class="dialog-footer">
				<el-button type="text" style = "width:100px;font-size:30px;font-weight:bold;margin-right:30px" @click="getwayBtnSure">确 定</el-button>
			</span>
		</el-dialog>
		<!--传感器分组名-->
		<el-dialog title = "创建组" :visible.sync="dialogSensorGroupVisible" width="30%"  @close="sensorGroupName = ''">
			<span>组名</span>
			<el-input v-model = "sensorGroupName" size = "small" style = "width:250px"></el-input>
			<span slot="footer" class="dialog-footer">
				<el-button type="text" style = "width:100px;font-size:30px;font-weight:bold;margin-right:30px" @click="sensorGroupBtnSure">确 定</el-button>
			</span>
		</el-dialog>
		<!-- 阈值弹框-->
		<el-dialog  :visible.sync="dialogThresholdVisible" width="60%" @close="closeThresholdsDialog">
			<div class ="dialog-top">
				<span>传感器阈值名</span>
				<el-input v-model = "thresholdName" size = "small" style = "width:250px"></el-input>
			</div>
      <threshold-set title ="空气温度阈值设定" :values = "[4,3,2,1]" :value.sync = "newThreshold[0]"></threshold-set>
			<threshold-set title ="空气温度阈值设定" :values = "[4,3,2,1]" :value.sync = "newThreshold[1]"></threshold-set>
			<threshold-set title ="空气温度阈值设定" :values = "[4,3,2,1]" :value.sync = "newThreshold[2]"></threshold-set>
			<threshold-set title ="空气温度阈值设定" :values = "[4,3,2,1]" :value.sync = "newThreshold[3]"></threshold-set>
			<threshold-set title ="空气温度阈值设定" :values = "[4,3,2,1]" :value.sync = "newThreshold[4]"></threshold-set>
			<threshold-set title ="空气温度阈值设定" :values = "[4,3,2,1]" :value.sync = "newThreshold[5]"></threshold-set>
			<threshold-set title ="空气温度阈值设定" :values = "[4,3,2,1]" :value.sync = "newThreshold[6]"></threshold-set>
			<span slot="footer" class="dialog-footer">
				<el-button type="text" style = "width:100px;font-size:30px;font-weight:bold;margin-right:30px" @click="btnSure">确 定</el-button>
			</span>
        </el-dialog>

    <el-dialog  :visible.sync="dialogChartVisible"  @close="dialogChartVisible=false">
      <div class="chart-container">
        <div class="title">空气湿度传感器历史曲线</div>
        <div class="date">
          {{dateText}}
          <el-date-picker
            class="date-picker"
            value-format="yyyy-MM-dd"
            v-model="date"
            type="date"
            placeholder="选择日期">
          </el-date-picker>
        </div>
        <div class="chart-div" id="chart"></div>
      </div>
    </el-dialog>
	</div>
</template>
<script type="text/javascript">
import Header from './header'
import MinitorVideo from './minitor-video'
import ThresholdSet from './thresholdSet'
import moment from 'moment'
import echarts from 'echarts'
	export default{
		data(){
			return{
        chart:null,
        date:'',
        switchPopover:false,
				overview:{
					title:'大棚概况',
					items:['大棚内分南北两个区域',
						'装备有一个网关',
						'十四个传感器',
						'十三个控制器']
					},
				minitors:[{
					name:'视频监控南',
					url:'http://vjs.zencdn.net/v/oceans.mp4'
				},{
					name:'视频监控北',
					url:'http://vjs.zencdn.net/v/oceans.mp4'
				}],
				getwayTable:[{name:'草莓大棚网关',id:'1234567890ABC',status:'在线'}],
				thresholds:[{label:'阈值1',id:1,value:[1,2,3,4,3,2,1]},{label:'阈值2',id:2,value:[4,2,3,4,3,2,4]}],
				sensorTable:[{name:'传感器南',threshold:1,group:[{name:'空气温度传感器',degree:'37',id:'adbvkljljl1345',status:'在线',time:'2018年1月1日 08:00',},{name:'空气温度传感器1',degree:'371',id:'adbvkljljl1345',status:'离线',time:'2018年1月1日 08:00',}]},{name:'传感器南',group:[{name:'空气温度传感器',degree:'37',id:'adbvkljljl1345',status:'在线',time:'2018年1月1日 08:00',}]}],
				controlTable:[{name:'水阀',group:[{name:'水阀南',id:'adbvkljljl1345',status:'在线',time:'2018年1月1日 08:00',switch:true},{name:'水阀北',id:'34325325235',status:'在线',time:'2018年1月1日 09:00',switch:false}]},
          {name:'遮阳帘',group:[{name:'外遮阳帘',id:'adbvkljljl1345',status:'在线',time:'2018年1月1日 08:00'}]}],
				thresholdName:'',
				newThreshold:[],
				dialogThresholdVisible:false,
        dialogChartVisible:false,
				thresholdId:100,
				isEditing:false,
				editId:-1,

				dialogGetwayVisible:false,
				getwayName:'',

				dialogSensorGroupVisible:false,
				sensorGroupName:'',
			}
		},
    created(){
      this.date = moment().format('YYYY-MM-DD');
    },
		components:{
			Header,
			MinitorVideo,
			ThresholdSet
			},
    computed:{
      dateText(){
        let _date = this.date.split('-');
        return _date[0]+'年'+_date[1]+'月'+_date[2]+'日'
      }
    },
    watch:{
      dialogChartVisible(val){
        if(val&&!this.chart){
          this.initChart();
        }
      }
    },
		methods:{
      initChart(){
        let dom = this.$el.querySelector('#chart');
        echarts.init(dom);
      },
      setOptions(val){
        let option = {
          tooltip : {
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
              label: {
                backgroundColor: '#6a7985'
              }
            }
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis : [
            {
              type : 'category',
              boundaryGap : false,
              data : ['周一','周二','周三','周四','周五','周六','周日']
            }
          ],
          yAxis : [
            {
              type : 'value'
            }
          ],
          series : [
            {
              name:'邮件营销',
              type:'line',
              stack: '总量',
              data:[120, 132, 101, 134, 90, 230, 210]
            },
          ]
        };
      },
			changeGetwayName(){

			},
			addNewThreshold(){
				this.dialogThresholdVisible = true;
			},
			btnSure(){
				if(this.isEditing){
					if(this.editId!==-1){
						this.thresholds.map((item)=>{
							return this.editId===item.id?Object.assign(item,{label:this.thresholdName,value:this.newThreshold}):item;
						})
					}
					console.log(this.thresholds)
					this.dialogThresholdVisible = false;
				}else{
					this.thresholdId++;
					this.thresholds.push({label:this.thresholdName,id:this.thresholdId,value:this.newThreshold});
					this.dialogThresholdVisible = false;
				}


			},
			editThreshold(name,value,id){
				this.isEditing = true;
				this.editId = id;
				this.thresholdName = name;
				this.newThreshold = value;
				console.log(this.newThreshold)
				this.dialogThresholdVisible = true;
			},
			closeThresholdsDialog(){
				this.thresholdName = '';
				this.newThreshold = [];
				this.isEditing = false;
				this.editId = -1;
			},
			changeGetwayName(){
				this.getwayName = this.getwayTable[0].name;
				this.dialogGetwayVisible = true;
			},
			closeGetwayDialog(){
				this.getwayName = '';
			},
			getwayBtnSure(){
				this.getwayTable[0].name = this.getwayName;
				this.getwayName = '';
				this.dialogGetwayVisible = false;
			},
			renderSensorOptionHeader(h){
				return h('div',{class:'tr pr20 w100'},[h('i',{class:'el-icon-plus',on: {click: this.addNewSensorGroup},},)]);
			},
			addNewSensorGroup(){
				this.dialogSensorGroupVisible  = true;
			},
			sensorGroupBtnSure(){
				this.sensorTable.push({name:this.sensorGroupName,threshold:1,group:[]});
				this.dialogSensorGroupVisible  = false;
			},
			deleteGroup(type,id,name){
				this.$confirm(`确认删除"${name}"?`,{
					type:'warning',
					showCancelButton:false,
				})
			}
		}

	}
</script>
<style lang="scss">
  .self-popover{
    height: 5rem;
    width: 14rem;
    padding: 0;
    border: 1px solid #f37021;
    .popover-warn{
      position: absolute;
      left: 0px;
      height: 100%;
      width: 3rem;
      line-height: 5rem;
      background-color: #f37021;
      text-align: center;
      i{
        color: #fff;
        font-size: 1.1rem;
      }
    }
    .popover-content{
      position: absolute;
      right: 0;
      height: 100%;
      width: calc(100% - 3rem);
      .close{
        position: absolute;
        right:.3rem;
        top:.3rem;
        cursor:pointer;
        i{
          font-size: 1rem;;
        }
      }
      .content{
        .title{
          font-size: 1rem;
          margin-top: 1rem;
          margin-left: 1rem;
          color: #000;
        }
        .tip{
          color: #c2c2c2;
          font-size: .7rem;
          margin-left: 1rem;
          margin-top: .6rem;
          span{
            color: #f37021;
            margin-left: .7rem;
            cursor: pointer;
          }
        }
      }
    }
  }
</style>
<style lang = "scss" scoped>
	.el-table__body-wrapper{
		overflow:hidden !important;
	}
  .chart-container{
    width: 100%;
    height: 20rem;
    .title{
      font-size: 1.5rem;
      text-align: center;
    }
    .date{
      font-size: 1rem;
      margin: 0 auto;
      width: 8rem;
      text-align: center;
      position: relative;
      margin-top: 1rem;
      .date-picker{
        position: absolute;
        width: 100%;
        height: 100%;
        top: 1px;
        right: 0;
        opacity: 0;
      }
    }
    .chart-div{
      width: 100%;
      height: calc(100% - 4rem);
      margin-top: 1rem;
    }
  }
	.container {
		padding:30px 30px;
		.minitor {
			margin-bottom:30px;
		}
		.sensor{
			margin:30px 0;
      .goChart{
        color: #909399;
        text-decoration: underline;
        cursor: pointer;
      }
			.sensor-title {
				width:100%;
				height:40px;
				background-color:#E0E0E0;
				font-family: PingFangSC-Light;
				font-size: 20px;
				color: #000000;
				line-height:40px;
				padding-left:50px;
				box-sizing:border-box;
			}
			.expand-row {
				margin-bottom:30px
			}
			.expand-row:last-child{
				margin-bottom:0px;
			}

		}
		.control{
			margin:30px 0;
      .open-close{
        &>div{
            margin: 0 .5rem;
            color: #fff;
            display: inline-block;
            padding: .3rem;
            border-radius: 100%;
            cursor: pointer;
            line-height: .8rem;;
        }
        .open-close-open{
          background-color: #13ce66;
          margin-left: 0;
        }
        .open-close-close{
          background-color: #13ce66;
        }
        .open-close-stop{
          background-color: #ff4949;
          margin-right: 0;
        }
      }
			.control-title {
				width:100%;
				height:40px;
				background-color:#E0E0E0;
				font-family: PingFangSC-Light;
				font-size: 20px;
				color: #000000;
				line-height:40px;
				padding-left:50px;
				box-sizing:border-box;
			}
			.expand-row {
				margin-bottom:30px
			}
			.expand-row:last-child{
				margin-bottom:0px;
			}
		}


	}
	.dialog-top{
		margin-bottom:30px;
			span{
				font-size:20px;
				font-weight:bold;
			}
		}
</style>
