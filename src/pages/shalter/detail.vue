<template>
	<div>
		<Header :overview = overview></header>
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
			</el-table>
			<div class= "sensor">
				<div class = "sensor-title">传感器</div>
			<el-table
				:data="sensorTable"
				default-expand-all
				style="width: 100%">
				 <el-table-column type="expand">
      				<template class = "" slot-scope="props">
						  <el-row class ="expand-row" v-for = "sensor in props.row.group">
							  <el-col :span = "4">{{sensor.name}}</el-col>
							  <el-col :span = "4">{{sensor.degree}}</el-col>
							  <el-col :span = "4">{{sensor.id}}</el-col>
							  <el-col :span = "4">{{sensor.status}}</el-col>
							  <el-col :span = "4">{{sensor.time}}</el-col>
							  <el-col :span = "4">
								  <i class="el-icon-plus"></i>
								  <i class="el-icon-delete"></i>
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
								:key="item.value"
								:label="item.label"
								:value="item.value">
								<span style="float: left">{{ item.label }}</span>
								<i  style = "float:right;margin-top:10px;" @click.stop = "editThreshold" class=" icon-position el-icon-edit "></i>
								</el-option>
								<el-option >
									<span @click.stop= "addNewThreshold"><i class="el-icon-plus"></i>添加阈值设定</span>
								</el-option>
						</el-select>
					 </template>
				 </el-table-column>
				<el-table-column label="序列号"></el-table-column>
				<el-table-column label="设备状态"></el-table-column>
				<el-table-column label="更新时间"></el-table-column>
				<el-table-column label="操作">
					<template>
						<i class="el-icon-plus"></i>
						<i class="el-icon-delete"></i>
					</template>
				</el-table-column>
			</el-table>
			</div>
		<!--控制器-->
		<div class= "control">
				<div class = "control-title">控制器</div>
			<el-table
				:data="controlTable"
				default-expand-all
				style="width: 100%">
				 <el-table-column type="expand">
      				<template class = "" slot-scope="props">
						  <el-row class ="expand-row" v-for = "sensor in props.row.group">
							  <el-col :span = "4">{{sensor.name}}</el-col>
							  <el-col :span = "4">{{sensor.degree}}</el-col>
							  <el-col :span = "4">{{sensor.id}}</el-col>
							  <el-col :span = "4">{{sensor.status}}</el-col>
							  <el-col :span = "4">{{sensor.time}}</el-col>
							  <el-col :span = "4">
								  <i class="el-icon-plus"></i>
								  <i class="el-icon-delete"></i>
							  </el-col>
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
				<el-table-column label="操作">
					<template>
						<i class="el-icon-plus"></i>
						<i class="el-icon-delete"></i>
					</template>
				</el-table-column>
			</el-table>
			</div>

		</div>

		<!-- 阈值弹框-->
		<el-dialog  :visible.sync="dialogThresholdVisible" @close="closeDialog">
            <threshold-set title ="空气温度阈值设定" :values = "[4,3,2,1]" :value = "4"></threshold-set>
        </el-dialog>
	</div>
</template>
<script type="text/javascript">
import Header from './header'
import MinitorVideo from './minitor-video'
import ThresholdSet from './thresholdSet'
	export default{
		data(){
			return{
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
				thresholds:[{label:'阈值1',value:1},{label:'阈值2',value:2}],
				sensorTable:[{name:'传感器南',threshold:1,group:[{name:'空气温度传感器',degree:'37',id:'adbvkljljl1345',status:'在线',time:'2018年1月1日 08:00',},{name:'空气温度传感器1',degree:'371',id:'adbvkljljl1345',status:'离线',time:'2018年1月1日 08:00',}]},{name:'传感器南',group:[{name:'空气温度传感器',degree:'37',id:'adbvkljljl1345',status:'在线',time:'2018年1月1日 08:00',}]}],
				controlTable:[{name:'传感器南',group:[{name:'空气温度传感器',degree:'37',id:'adbvkljljl1345',status:'在线',time:'2018年1月1日 08:00',},{name:'空气温度传感器1',degree:'371',id:'adbvkljljl1345',status:'离线',time:'2018年1月1日 08:00',}]},{name:'传感器南',group:[{name:'空气温度传感器',degree:'37',id:'adbvkljljl1345',status:'在线',time:'2018年1月1日 08:00',}]}],

				dialogThresholdVisible:false,

			}
		},
		components:{
			Header,
			MinitorVideo,
			ThresholdSet
			},
		methods:{
			addNewThreshold(){
				this.dialogThresholdVisible = true;
			}
		}

	}
</script>
<style lang = "scss" scoped>
	.el-table__body-wrapper{
		overflow:hidden !important;
	}
	.container {
		padding:30px 30px;
		.minitor {
			margin-bottom:30px;
		}
		.sensor{
			margin:30px 0;
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
		

		.icon-position{
			
		}
	}
</style>
