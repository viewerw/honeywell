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
        class="self-table main-table"
				style="width: 100%">
				<el-table-column
					prop="name"
					label="设备名称"
         >
				</el-table-column>
				<el-table-column
					prop="id"
					label="序列号"
	      >
				</el-table-column>
				<el-table-column
					prop="status"
					label="设备状态">
				</el-table-column>
			</el-table>
			<div class="sensor">
				<div class="sensor-title">
          传感器
          <el-select size = "mini" v-model="threshold" placeholder="请选择" style="margin-left: 20px">
            <el-option
              v-for="item in thresholds"
              :key="item.id"
              :label="item.label"
              :value="item.id">
              <span style="float: left">{{ item.label }}</span>
              <i  style = "float:right;margin-top:10px;" @click.stop = "editThreshold(item.label,item.value,item.id)" class=" icon-position el-icon-edit "></i>
            </el-option>
            <el-option style = "background:#7eb338;color:#ffffff;" value="0">
              <span  @click.stop= "addNewThreshold"><i class="el-icon-plus"></i>添加阈值设定</span>
            </el-option>
          </el-select>
        </div>
        <el-table
          :data="sensorTable"
          class="self-table"
          stripe
          style="width: 100%">
          <el-table-column
            prop="name"
            :min-width="130"
            label="设备名称">
          </el-table-column>
          <el-table-column
            :min-width="130"
            label="读数">
            <template slot-scope="scope">
              {{scope.row.value}}(<span class="goChart" @click="dialogChartVisible=true">历史曲线</span>)
            </template>
          </el-table-column>
          <el-table-column
            prop="temperature"
            :min-width="100"
            label="板载温度(℃)">
          </el-table-column>
          <el-table-column
            prop="voltage"
            :min-width="80"
            label="电压(V)">
          </el-table-column>
          <el-table-column
            prop="electricity"
            :min-width="120"
            label="电量(mAh)">
          </el-table-column>
          <el-table-column
            prop="status"
            :min-width="120"
            label="放置状态（X, Y, Z）">
          </el-table-column>
          <el-table-column
            prop="time"
            :min-width="120"
            label="更新时间">
          </el-table-column>
          <el-table-column
            :min-width="120">
            <template slot-scope = "scope" >
              <div class="tr pr20">
                <i class="el-icon-edit pr20 cp act-btn" @click = "dialogSensorVisible=true"></i>
              </div>
            </template>
          </el-table-column>
        </el-table>
			</div>
		<!--控制器-->
		<div class= "control">
				<div class="control-title">控制器</div>
        <el-table
        :data="controlTable"
        class="self-table"
        stripe
        style="width: 100%">
        <el-table-column
          prop="name"
          :min-width="130"
          label="设备名称">
        </el-table-column>
        <el-table-column
          prop="temperature"
          :min-width="100"
          label="板载温度(℃)">
        </el-table-column>
        <el-table-column
          prop="voltage"
          :min-width="80"
          label="电压(V)">
        </el-table-column>
        <el-table-column
          prop="electricity"
          :min-width="120"
          label="电量(mAh)">
        </el-table-column>
        <el-table-column
          prop="status"
          :min-width="120"
          label="放置状态（X, Y, Z）">
        </el-table-column>
        <el-table-column
          prop="time"
          :min-width="120"
          label="更新时间">
        </el-table-column>
        <el-table-column
          label="开关">
          <template slot-scope="scope">
            <el-switch
              v-model="scope.row.switch"
              active-color="#7eb338"
              inactive-color="#d0d0d0">
            </el-switch>
          </template>
        </el-table-column>
        <el-table-column
          :min-width="120">
          <template slot-scope = "scope" >
            <div class="tr pr20">
              <i class="el-icon-edit pr20 cp act-btn" @click = "dialogControlVisible=true"></i>
            </div>
          </template>
        </el-table-column>
      </el-table>
			</div>
		</div>
    <!--修改传感器-->
    <el-dialog class="self-dialog" :visible.sync="dialogSensorVisible" width="30%"  @close="dialogSensorVisible=false">
      <div slot="title" class="title">传感器修改</div>
      <el-form>
        <el-form-item label="传感器名：" label-width="100px">
          <el-input></el-input>
        </el-form-item>
      </el-form>
			<span slot="footer" class="dialog-footer">
				<el-button type="text" style = "width:100px;font-size:25px;font-weight:bold;margin-right:30px" @click="dialogSensorVisible=false">确 定</el-button>
			</span>
    </el-dialog>

    <!--修改控制器-->
    <el-dialog class="self-dialog" :visible.sync="dialogControlVisible" width="30%"  @close="dialogControlVisible=false">
      <div slot="title" class="title">控制器修改</div>
      <el-form>
        <el-form-item label="控制器名：" label-width="100px">
          <el-input></el-input>
        </el-form-item>
      </el-form>
			<span slot="footer" class="dialog-footer">
				<el-button type="text" style = "width:100px;font-size:25px;font-weight:bold;margin-right:30px" @click="dialogControlVisible=false">确 定</el-button>
			</span>
    </el-dialog>

		<!-- 阈值弹框-->
		<el-dialog  class="self-dialog" :visible.sync="dialogThresholdVisible" width="550px" @close="closeThresholdsDialog">
			<div class ="dialog-top tc">
				<span>传感器阈值名</span>
				<el-input v-model = "thresholdName" size = "small" style = "width:250px"></el-input>
			</div>
      <threshold-set title ="空气温度阈值设定" :values = "[4,3,2,1]" :value.sync = "newThreshold[0]" style="margin: 0 auto;display: inherit;"></threshold-set>
			<span slot="footer" class="dialog-footer">
				<el-button type="text" style = "width:100px;font-size:30px;font-weight:bold;margin-right:30px" @click="btnSure">确 定</el-button>
			</span>
        </el-dialog>
    <!-- 报表弹框-->
    <el-dialog  class="self-dialog" :visible.sync="dialogChartVisible" width="800px" @close="dialogChartVisible=false">
      <div class="chart-container">
        <div class="title">土壤湿度传感器历史曲线</div>
        <div class="date">
          <el-date-picker
            ref="date-picker"
            class="date-picker"
            @change="changeDate"
            v-model="date"
            :type="dateType"
            :format="dateOption[dateType].format"
            placeholder="选择周">
          </el-date-picker>
        </div>
        <div class="dateType">
          <div v-for="(value,key) in dateOption" @click="dateType = key" :class="dateType===key?'active':''">{{value.value}}</div>
        </div>
        <div class="chart-div" id="chart">
        </div>
      </div>
    </el-dialog>
	</div>
</template>
<script type="text/javascript">
import Header from './../../components/header'
import MinitorVideo from './../../components/minitor-video'
import ThresholdSet from './../../components/thresholdSet'
import moment from 'moment'
import echarts from 'echarts'
	export default {
		data(){
			return{
        chart:null,
        date:'',
        switchPopover:false,
				overview:{
					title:'大田概况',
					items:['一个土壤含水率传感器',
						'一个电磁水阀',]
					},
				minitors:[{
					name:'实际视频',
					urls:[
            {
              name:'左转',
              value:'http://vjs.zencdn.net/v/oceans.mp4',
            },
            {
              name:'右转',
              value:'http://vjs.zencdn.net/v/oceans1.mp4',
            },
            {
              name:'上转',
              value:'http://vjs.zencdn.net/v/oceans2.mp4',
            },
            {
              name:'下转',
              value:'http://vjs.zencdn.net/v/oceans4.mp4',
            },
          ]
				}],
				getwayTable:[{name:'园区Luro网关',id:'1234567890ABC',status:'在线'}],
				thresholds:[{label:'阈值1',id:1,value:[1,2,3,4,3,2,1]},{label:'阈值2',id:2,value:[4,2,3,4,3,2,4]}],
				sensorTable:[{name:'土壤湿度传感器1',value:'85%',temperature:'40',voltage:'5.5',electricity:'5.5',status:'112, 20, 30',time:'2017年12月28日  12:00'},{name:'土壤湿度传感器2',value:'85%',temperature:'40',voltage:'5.5',electricity:'5.5',status:'112, 20, 30',time:'2017年12月28日  12:00'}],
				controlTable:[{name:'蓝莓一区水阀',temperature:'40',voltage:'5.5',electricity:'5.5',status:'112, 20, 30',time:'2017年12月28日  12:00',switch:true},{name:'蓝莓二区水阀',temperature:'40',voltage:'5.5',electricity:'5.5',status:'112, 20, 30',time:'2017年12月28日  12:00',switch:false}],
				thresholdName:'',
        threshold:1,
				newThreshold:[],
        dialogChartVisible:false,
				thresholdId:100,
				isEditing:false,
				editId:-1,
        dialogThresholdVisible:false,
				dialogGetwayVisible:false,
				getwayName:'',
        dialogSensorVisible:false,
        dialogControlVisible:false,
				sensorGroupName:'',
        dateType:'date',
        dateOption:{
          date:{
            format:'yyyy年MM月dd日',
            valueFormat:'yyyy-MM-dd',
            value:'天'
          },
          week:{
            format:'yyyy年WW周',
            valueFormat:'',
            value:'周'
          },
          month:{
            format:'yyyy年MM月',
            valueFormat:'yyyy-MM',
            value:'月'
          }
        }
			}
		},
    created(){
      this.date = new Date();
    },
		components:{
			Header,
			MinitorVideo,
			ThresholdSet,
			},
    computed:{
    },
    watch:{
      dateType(val){
        console.log(val);
      },
      dialogChartVisible(val){
        if(val&&!this.chart){
          this.$nextTick(()=>{
            this.initChart().setOptions()
          });
        }
      },
    },
		methods:{
      initChart(){
        let dom = this.$el.querySelector('#chart');
        this.chart = echarts.init(dom);
        return this;
      },
      changeDate(val){
        console.log(val)
      },
      setOptions(val){
        let option =  {
          color: ['#81b22f', '#f3d71c', '#f4b9a9'],
          xAxis: {
            type : 'category',
            boundaryGap : false,
            data : ['0:00','2:00','4:00','6:00','8:00','10:00','12:00','14:00','16:00']

          },
          grid: {
            top: '10%',
            bottom: '5%',
            left:0,
            width:'100%',
            containLabel: true
          },
          yAxis: {
            nameGap: 20,
            name: '(%)',
            min: 0,
            max: 100,
            splitNumber: 5,
            type: 'value',
            axisLabel: {
              formatter: '{value}',
            },
            splitLine:{
              lineStyle:{
                color:'#e0e0e0',
                type:'dashed',
                width:2
              }
            }

          },
          tooltip : {
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
              label: {
                backgroundColor: '#6a7985'
              }
            }
          },
          series: [
            {
              name:'危险区域低',
              type: 'line',
              animation: false,
              areaStyle: {
                normal: {}
              },
              lineStyle: {
                normal: {
                  width: 1
                }
              },
              markArea: {
                data: [[{
                  yAxis: '0'
                },
                  {
                    yAxis: '15'
                  }]]
              },

            },
            {
              name: '警戒区域低',
              type: 'line',
              animation: false,
              areaStyle: {
                normal: {}
              },
              lineStyle: {
                normal: {
                  width: 1
                }
              },
              markArea: {
                data: [[{
                  yAxis: '15'
                },
                  {
                    yAxis: '30'
                  }]]
              }
            },
            {
              name: '安全区域',
              type: 'line',
              animation: false,
              areaStyle: {
                normal: {}
              },
              lineStyle: {
                normal: {
                  width: 1
                }
              },
              markArea: {
                data: [[{
                  yAxis: '30'
                },
                  {
                    yAxis: '70'
                  }]]
              }
            },
            {
              name: '警戒区域高',
              type: 'line',
              animation: false,
              areaStyle: {
                normal: {}
              },
              lineStyle: {
                normal: {
                  width: 1
                }
              },
              markArea: {
                data: [[{
                  yAxis: '70'
                },
                  {
                    yAxis: '85'
                  }]]
              }
            },
            {
              name: '危险区域高',
              type: 'line',
              animation: false,
              areaStyle: {
                normal: {}
              },
              lineStyle: {
                normal: {
                  width: 1
                }
              },
              markArea: {
                data: [[{
                  yAxis: '85'
                },
                  {
                    yAxis: '100'
                  }]]
              }
            },
            {
              type:'line',
              stack: '总量',
              lineStyle:{
                normal:{
                  color:'#000'
                }
              },
              itemStyle:{
                normal:{
                  color:'#fff'
                }
              },
              smooth:true,
              areaStyle: {normal: {
                opacity:0,
              }},
              data:[10,19,44,12,66,89,55,70,80]
            },
          ],
        };
        this.chart.setOption(option)
      },
			changeGetwayName(){

			},
      deleteSensor(){
        this.$confirm(`确认从分组中删除该传感器?`,{
          type:'warning',
          showCancelButton:false,
        })
      },
      deleteControl(){
        this.$confirm(`确认从分组中删除该控制器?`,{
          type:'warning',
          showCancelButton:false,
        })
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
				return h('div',{class:'tr pr20 w100 act-btn'},[h('i',{class:'el-icon-plus cp',on: {click: this.addNewSensorGroup},},)]);
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
  .status-online{

  }
  .main-table{
    border: 1px solid #e0e0e0;
    thead{
      border-bottom: 1px solid #e0e0e0;
      th{
        background-color: #f7f7f7;
      }
    }
  }
  .status-offline{
    color:red
  }
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
    .dateType{
      position: absolute;
      background-color: #bfbfbf;
      border-radius: 2rem;
      cursor: pointer;
      top: 3.5rem;
      right: 2rem;
      &>div{
          display: inline-block;
          color: #fff;
          width: 2rem;
          height: 2rem;
          text-align: center;
          line-height: 2rem;
          border-radius: 2rem;
          font-weight:bold;
        &.active{
          background-color: #7eb338;
         }
      }
    }
    .date{
      font-size: 1rem;
      margin: 0 auto;
      width: 9rem;
      text-align: center;
      position: relative;
      margin-top: 1rem;
      height: 2rem;
      .date-picker{
        position: absolute;
        width: 100%;
        height: 100%;
        top: 1px;
        right: 0;
        /*opacity: 0;*/
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
				font-size: 20px;
				color: #000000;
				line-height:40px;
        padding-left: 10px;
				box-sizing:border-box;
			}
		}
  .expand-row {
    padding-left: 50px;
    border-bottom: 1px solid #e0e0e0;
    padding-top: 12px;
    padding-bottom: 12px;
    line-height: 24px;
    &>div{
      padding: 0 10px;
      }
  }
  .expand-row:last-child{
    margin-bottom:0px;
    border-bottom: none;
  }

  .control{
			margin:30px 0;
      .process-switch{

      }
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
				font-size: 20px;
				color: #000000;
				line-height:40px;
				padding-left:10px;
				box-sizing:border-box;
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
