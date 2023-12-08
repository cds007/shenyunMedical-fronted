<template>
	<div>
		<el-row :gutter="20">
			<el-col :span="8">
				<el-card shadow="hover" class="mgb20" style="height: 252px">
					<div class="user-info">
						<el-avatar :size="120" :src="imgurl" />
						<div class="user-info-cont">
              <!--修改了用户名-->
							<div class="user-info-name">cds007</div>
              <!--修改了用户角色-->
							<div>普通用户</div>
						</div>
					</div>
					<div class="user-info-list">
						上次登录时间：
						<span>2022-12-06</span>
					</div>
					<div class="user-info-list">
						上次登录地点：
						<span>长沙</span>
					</div>
				</el-card>
				<el-card shadow="hover" style="height: 252px">
					<template #header>
						<div class="clearfix">
							<span>训练任务完成进度</span>
						</div>
					</template>
          <!--修改成了任务完成进度-->
<!--          <div v-for="(item, index) in hotWords" class="item-view">-->
<!--            {{item.name}}<el-progress :percentage="setItemProgress(item)" color="#f56c6c"></el-progress>-->
<!--          </div>-->
          肺部MRI图像分割-A001<el-progress :percentage="100" color="#f1e05a"></el-progress>
          <br>
          脑肿瘤超声波图像分割-A002<el-progress :percentage="100"></el-progress>
          <br>
          眼部超声波图像分割-A003<el-progress :percentage="25.9" color="#f56c6c"></el-progress>
				</el-card>
			</el-col>
			<el-col :span="16">
				<el-row :gutter="20" class="mgb20">
					<el-col :span="8">
						<el-card shadow="hover" :body-style="{ padding: '0px' }">
							<div class="grid-content grid-con-1">
								<el-icon class="grid-con-icon"><User /></el-icon>
								<div class="grid-cont-right">
									<div class="grid-num">2</div>
									<div>我的项目</div>
								</div>
							</div>
						</el-card>
					</el-col>
					<el-col :span="8">
						<el-card shadow="hover" :body-style="{ padding: '0px' }">
							<div class="grid-content grid-con-2">
								<el-icon class="grid-con-icon"><ChatDotRound /></el-icon>
								<div class="grid-cont-right">
                  <!-- 修改了数据集数量 -->
									<div class="grid-num">2</div>
									<div>我的数据集</div>
								</div>
							</div>
						</el-card>
					</el-col>
					<el-col :span="8">
						<el-card shadow="hover" :body-style="{ padding: '0px' }">
							<div class="grid-content grid-con-3">
								<el-icon class="grid-con-icon"><Goods /></el-icon>
								<div class="grid-cont-right">
                  <!-- 修改了任务 -->
									<div class="grid-num">1</div>
									<div>正在进行的任务</div>
								</div>
							</div>
						</el-card>
					</el-col>
				</el-row>
				<el-card shadow="hover" style="height: 403px">
					<template #header>
						<div class="clearfix">
							<span>待办事项</span>
							<el-button style="float: right; padding: 3px 0" text>添加</el-button>
						</div>
					</template>

					<el-table :show-header="false" :data="todoList" style="width: 100%">
						<el-table-column width="40">
							<template #default="scope">
								<el-checkbox v-model="scope.row.status"></el-checkbox>
							</template>
						</el-table-column>
						<el-table-column>
							<template #default="scope">
								<div
									class="todo-item"
									:class="{
										'todo-item-del': scope.row.status
									}"
								>
									{{ scope.row.title }}
								</div>
							</template>
						</el-table-column>
					</el-table>
				</el-card>
			</el-col>
		</el-row>
		<el-row :gutter="20">
			<el-col :span="12">
				<el-card shadow="hover">
					<schart ref="bar" class="schart" canvasId="bar" :options="options"></schart>
				</el-card>
			</el-col>
			<el-col :span="12">
				<el-card shadow="hover">
					<schart ref="line" class="schart" canvasId="line" :options="options2"></schart>
				</el-card>
			</el-col>
		</el-row>
	</div>
</template>

<script setup lang="ts" name="dashboard">
import Schart from 'vue-schart';
import {onMounted, reactive, ref} from 'vue';
import imgurl from '../assets/img/img.jpg';
import {fetchData2, getAllOperation, getAllSearchTimes, getHotWords} from "../api";

interface hotItem {
  name:string;
  percent:number;
}
//设置常量
const name = localStorage.getItem('ms_username');
const role: string = name === 'admin' ? '超级管理员' : '普通用户';
//总搜索次数
let allSearchTimes = ref(120);
//
let operationTotal = ref(150);
//页数
const pageTotal = ref(0);

let item1:hotItem = {
  name:'长沙',
  percent:52.56
}
let item2:hotItem = {
  name:'湖南',
  percent:27.44
}
let item3:hotItem = {
  name:'快手',
  percent:15.00
}
let item4:hotItem = {
  name:'华为',
  percent:5.00
}
const hotWords = ref([]);
// @ts-ignore
hotWords.value.push(item1);
// @ts-ignore
hotWords.value.push(item2);
// @ts-ignore
hotWords.value.push(item3);
// @ts-ignore
hotWords.value.push(item4);
console.log(hotWords)

//设置进度条
const setItemProgress = (data:hotItem) => {
      if (data.percent > 100) {
        return 100
      } else {
        return data.percent
      }
}
//请求1:查询所有关键词的总搜索次数接口
const getData1 = () => {
  getAllSearchTimes().then(res => {
    allSearchTimes.value = res.data.data;
    pageTotal.value = res.data.data!=undefined&&res.data.data!=null&&res.data.data.length;
  });
};

//请求2:查询所有系统消息的条数接口
const getData2 = () => {
  getAllOperation().then(res => {
    operationTotal.value = res.data.data;
    pageTotal.value = res.data.data!=undefined&&res.data.data!=null&&res.data.data.length;
  });
};

//请求3:查询前五个热词的列表的接口
const getData3 = () => {
  getHotWords().then(res => {
    console.log('getData3!')
    console.log("res,",res)
    console.log("data,",res.data.data)
    let dataArray = res.data.data;
    hotWords.value.splice(0,hotWords.value.length) //清空
    let sum=0;
    for (let i = 0; i < dataArray.length-1; i++) {
      sum+=dataArray[i][1]
    }
    for (let i = 0; i < dataArray.length-1; i++) {
      console.log(dataArray[i])
      let name = dataArray[i][0]
      let s = dataArray[i][1]
      // @ts-ignore
      let per = parseInt(s/sum*100.0)
      let item:hotItem = {
        name:name,
        percent:per
      }
      // @ts-ignore
      hotWords.value.push(item);
    }
  });
};

//获取上周日期
var currentDate = new Date();
var oneWeekAgo = new Date(currentDate.getTime() - 7 * 24 * 60 * 60 * 1000);
var formattedOneWeekAgo = oneWeekAgo.toLocaleDateString();
console.log(formattedOneWeekAgo); // 输出格式化后的日期字符串，例如 "11/27/2023"（根据浏览器的本地化设置可能有所不同）

//todo:首页图表数据获取
const options = {
	type: 'bar',
	title: {
		text: '最近一周的图像分割任务训练频度'
	},
	xRorate: 25,
	labels: ['周一', '周二', '周三', '周四', '周五'],
	datasets: [
		{
			label: '训练数量',
			data: [2, 1, 1, 1, 1]
		},
	]
};



//todo:首页图表数据获取
const options2 = {
	type: 'line',
	title: {
		text: '最近几个月的图像分割任务训练频度'
	},
	labels: ['7月', '8月', '9月', '10月', '11月'],
	datasets: [
    {
      label: '训练数量',
      data: [7, 15, 34, 22, 32]
    },
	]
};

//存前端写死
const todoList = reactive([
	{
		title: '完善数据预处理功能',
		status: false
	},
	{
		title: '增加更多的医学图像分割模型',
		status: false
	},
	{
		title: '优化训练过程和性能',
		status: false
	},
	{
		title: '引入自动化超参数调优',
		status: false
	},
	{
		title: '支持多模态图像处理',
		status: true
	},
	{
		title: '加强模型评估和可解释性',
		status: true
	}
]);


//初始化调用函数
getData3();
getData1();
getData2();



</script>

<style scoped>
.el-row {
	margin-bottom: 20px;
}

.grid-content {
	display: flex;
	align-items: center;
	height: 100px;
}

.grid-cont-right {
	flex: 1;
	text-align: center;
	font-size: 14px;
	color: #999;
}

.grid-num {
	font-size: 30px;
	font-weight: bold;
}

.grid-con-icon {
	font-size: 50px;
	width: 100px;
	height: 100px;
	text-align: center;
	line-height: 100px;
	color: #fff;
}

.grid-con-1 .grid-con-icon {
	background: rgb(45, 140, 240);
}

.grid-con-1 .grid-num {
	color: rgb(45, 140, 240);
}

.grid-con-2 .grid-con-icon {
	background: rgb(100, 213, 114);
}

.grid-con-2 .grid-num {
	color: rgb(100, 213, 114);
}

.grid-con-3 .grid-con-icon {
	background: rgb(242, 94, 67);
}

.grid-con-3 .grid-num {
	color: rgb(242, 94, 67);
}

.user-info {
	display: flex;
	align-items: center;
	padding-bottom: 20px;
	border-bottom: 2px solid #ccc;
	margin-bottom: 20px;
}

.user-info-cont {
	padding-left: 50px;
	flex: 1;
	font-size: 14px;
	color: #999;
}

.user-info-cont div:first-child {
	font-size: 30px;
	color: #222;
}

.user-info-list {
	font-size: 14px;
	color: #999;
	line-height: 25px;
}

.user-info-list span {
	margin-left: 70px;
}

.mgb20 {
	margin-bottom: 20px;
}

.todo-item {
	font-size: 14px;
}

.todo-item-del {
	text-decoration: line-through;
	color: #999;
}

.schart {
	width: 100%;
	height: 300px;
}
</style>
