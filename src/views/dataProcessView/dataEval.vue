<template>
  <div>
    <div class="container">
      <el-form>
        <el-form-item label="| 各轮保存模型acc1曲线:">
        </el-form-item>
<!--        图表-->
        <el-row :gutter="20">
          <el-col :span="12">
            <el-card shadow="hover">
              <schart ref="line" class="schart" canvasId="line" :options="options"></schart>
            </el-card>
          </el-col>
        </el-row>
        <el-form-item label="| 图表提示:" style="font-size: small;color: #409EFF;">
          <text style="font-size: small;color: #409EFF;">在第{{form.chartTipEpoch}}个epoch时，acc1的值最优，最优值为{{form.chartTipAcc1}}</text>
        </el-form-item>
        <el-form-item label="| 图像分类整体指标:">
        </el-form-item>
        <el-form-item label="预测top1的准确率">
          <text style="font-size: small;color: #409EFF;">{{form.top1}}</text>
        </el-form-item>
        <el-form-item label="预测top5的准确率">
          <text style="font-size: small;color: #409EFF;">{{form.top5}}</text>
        </el-form-item>
        <el-form-item label="整体平均指标">
          <el-table :data="tableData" stripe style="width: 50%">
            <el-table-column prop="precision" label="精准率" width="180" />
            <el-table-column prop="recall" label="召回率" width="180" />
            <el-table-column prop="f1Score" label="F1-score" />
          </el-table>
        </el-form-item>
        <el-form-item label="| 整体分割评估结果:">
          <el-table :data="tableData" stripe style="width: 40%">
            <el-table-column prop="class" label="类别" width="80" />
            <el-table-column prop="precision" label="精准率" width="80" />
            <el-table-column prop="recall" label="召回率" width="80" />
            <el-table-column prop="f1Score" label="F1-score" width="90" />
            <el-table-column prop="AUC" label="AUC" />
          </el-table>
        </el-form-item>
        <el-form-item label="| 模型测试:">
          <el-radio-group v-model="form.testType" class="ml-4">
            <el-radio label="1" size="small">测试集图片测试</el-radio>
            <el-radio label="2" size="small">单张图片测试</el-radio>
            <el-radio label="3" size="small">批量图片测试</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="测试说明">
          <text style="font-size: small;color: #409EFF;">将使用数据集'{{form.datasets}}'中的测试集图片进行测试</text>
        </el-form-item>
        <el-form-item label="">
          <el-button type="primary">启动测试</el-button>
        </el-form-item>
        <el-form-item label="完成进度">
        </el-form-item>
        <div class="demo-progress" style="margin-bottom: 15px;width: 350px;">
          <el-progress :percentage="form.percentage" />
        </div>
        <el-form-item label="">
          <el-link type="primary" :underline="false">预览测试图片</el-link>
        </el-form-item>
        <el-form-item label="| 预训练模型保存:">
        </el-form-item>
        <el-checkbox v-model="form.checked1" label="是否保存为预训练模型" size="large" />
        <el-form-item label="">
        </el-form-item>
      </el-form>
      <el-row class="mb-4">
        <el-button type="primary">导出报告</el-button>
        <el-button type="success">下一步</el-button>
      </el-row>
    </div>
  </div>
</template>

<script setup lang="ts" name="dataEval">
import { ref, reactive } from 'vue';
import { ElMessage, ElMessageBox } from 'element-plus';
import {fetchDataByWord, getAllCompByName, getAllComp, getHistorySearchTime} from '../../api';
import request from "../../utils/request";
import { onMounted } from 'vue';
import * as echarts from 'echarts';
import Schart from 'vue-schart';
//属性定义区域############################################################################
//图表数据
const options = {
  type: 'line',
  title: {
    text: '各轮保存模型acc1曲线'
  },
  labels: ['1', '2', '3', '1', '5','6', '7', '8', '9', '10'],
  datasets: [
    {
      label: 'acc1',
      data: [0.79, 0.89, 0.91, 0.92, 0.93,0.94, 0.942, 0.9458, 0.935, 0.925]
    },
  ],
  startValue: 0.78,
  step: 0.02,
};
//表单数据
const form = reactive({
  //图表提示
  chartTipEpoch: '8',
  chartTipAcc1: '0.9458',
  //预测top1的准确率
  top1: '0.9458',
  //预测top5的准确率
  top5: '1.0000',
  //精准率
  precision: '0.9458',
  //召回率
  recall: '1.0000',
  //F1-score
  f1Score: '0.9458',
  //类别
  class: '1',
  //AUC
  AUC: '0.9458',
  //测试类型
  testType: '1',
  //数据集
  datasets: 'D0003-蔬菜',
  //完成进度
  percentage: '20',
  //check
  checked1: false,
})
//表格1
const tableData = [
  {
    class:'hongxiancai',
    precision: '0.8889',
    recall: '1.0000',
    f1Score: '0.9412',
    AUC:'0.9988'
  },
  {
    class:'huluobo',
    precision: '0.9500',
    recall: '0.9500',
    f1Score: '0.9500',
    AUC:'0.9900'
  },
  {
    class:'xihongshi',
    precision: '0.9500',
    recall: '0.9500',
    f1Score: '0.9500',
    AUC:'0.9900'
  },
  {
    class:'xilanhua',
    precision: '0.9500',
    recall: '0.9500',
    f1Score: '0.9500',
    AUC:'0.9900'
  },
]




//函数定义区域############################################################################

</script>

<style scoped>
.schart {
  width: 100%;
  height: 300px;
}
.handle-box {
  margin-bottom: 20px;
}

.handle-select {
  width: 120px;
}

.handle-input {
  width: 300px;
}
.table {
  width: 100%;
  font-size: 14px;
}
.red {
  color: #ff0000;
}
.mr10 {
  margin-right: 10px;
}
.table-td-thumb {
  display: block;
  margin: auto;
  width: 40px;
  height: 40px;
}
</style>
