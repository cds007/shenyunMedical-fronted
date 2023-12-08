<template>
  <div>
    <div class="container">
      <div class="container">
        <el-form :model="form" label-width="120px">
          <el-form-item label="请选择您的模型">
            <el-select v-model="form.model" placeholder="请选择您的模型">
              <el-option label="PPLCNet" value="PPLCNet" />
              <el-option label="ResNet18" value="ResNet18" />
              <el-option label="ResNet34" value="ResNet34" />
              <el-option label="ResNet50" value="ResNet50" />
              <el-option label="ResNet101" value="ResNet101" />
              <el-option label="Xception41" value="Xception41" />
            </el-select>
          </el-form-item>
          <el-form-item label="自定义预训练">
            <el-radio-group v-model="form.isPreTrain" class="ml-4">
              <el-radio label="yes" size="small">是</el-radio>
              <el-radio label="no" size="small">否</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="预训练模型选择">
            <el-select v-model="form.preModel" placeholder="预训练模型选择">
              <el-option label="IMAGENET" value="IMAGENET" />
              <el-option label="不使用预训练模型" value="notUse" />
            </el-select>
          </el-form-item>
          <el-form-item label="| 选择模型参数:" class="text-red-500">
          </el-form-item>
          <el-form-item label="图像输入尺寸">
            <el-col :span="11">
              <el-input v-model="form.width" placeholder="请输入宽(px)"/>
            </el-col>
            <el-col :span="2" class="text-center">
              <span class="text-gray-500">-</span>
            </el-col>
            <el-col :span="11">
              <el-input v-model="form.height" placeholder="请输入高(px)"/>
            </el-col>
          </el-form-item>
          <el-form-item label="是否使用GPU">
            <el-radio-group v-model="form.isGPU" class="ml-4">
              <el-radio label="yes" size="small">是</el-radio>
              <el-radio label="no" size="small">否</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="| 选择训练参数:" class="text-red-500">
          </el-form-item>
          <el-form-item label="迭代轮数">
            <el-input-number v-model="form.epoch"  @change="handleChange" />
          </el-form-item>
          <el-form-item label="学习率">
            <el-input-number v-model="form.learningRate" :step="0.000001" @change="handleChange" />
          </el-form-item>
          <el-form-item label="批大小">
            <el-input-number v-model="form.batchSize" @change="handleChange" />
          </el-form-item>
          <el-form-item label="| 选择优化策略:" class="text-red-500">
          </el-form-item>
          <el-form-item label="数据增强">
            <el-switch v-model="form.dataStrong" />
          </el-form-item>
          <el-form-item label="随机亮度">
            <el-radio-group v-model="form.ranBright" class="ml-4">
              <el-radio label="yes" size="small">开</el-radio>
              <el-radio label="no" size="small">关</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="随机对比度">
            <el-radio-group v-model="form.ranContrast" class="ml-4">
              <el-radio label="yes" size="small">开</el-radio>
              <el-radio label="no" size="small">关</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="随机水平翻转">
            <el-radio-group v-model="form.ranHF" class="ml-4">
              <el-radio label="yes" size="small">开</el-radio>
              <el-radio label="no" size="small">关</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="随机垂直翻转">
            <el-radio-group v-model="form.ranVF" class="ml-4">
              <el-radio label="yes" size="small">开</el-radio>
              <el-radio label="no" size="small">关</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="随机饱和度">
            <el-radio-group v-model="form.ranSaturation" class="ml-4">
              <el-radio label="yes" size="small">开</el-radio>
              <el-radio label="no" size="small">关</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="随机色调">
            <el-radio-group v-model="form.ranHue" class="ml-4">
              <el-radio label="yes" size="small">开</el-radio>
              <el-radio label="no" size="small">关</el-radio>
            </el-radio-group>
          </el-form-item>

        </el-form>
        <el-row class="mb-4">
          <el-popconfirm title="确定启动?启动后不可更改配置">
            <template #reference>
              <el-button type="primary">启动训练</el-button>
            </template>
          </el-popconfirm>
          <el-button type="success">保存</el-button>
        </el-row>
      </div>


    </div>
  </div>
</template>

<script setup lang="ts" name="dataTrain">
import { ref, reactive } from 'vue';
import { ElMessage, ElMessageBox } from 'element-plus';
//@ts-ignore
import { Delete, Edit, Search, Plus } from '@element-plus/icons-vue';
import {getRankOfKeyword, getKeywordByTime, getAllKeySearch, getHistorySearchTime} from '../../api';
import request from "../../utils/request";
import { onMounted } from 'vue';
import * as echarts from 'echarts';

//属性定义区域############################################################################
//表单数据
const form = reactive({
  //需要的数据
  model:'',
  isPreTrain:'yes',
  preModel:'',
  width:'',
  height:'',
  isGPU:'yes',
  epoch:10,
  learningRate:0.00625000,
  batchSize:16,
  dataStrong:true,
  ranBright:'yes',
  ranContrast:'yes',
  ranHF:'yes',
  ranVF:'yes',
  ranSaturation:'no',
  ranHue:'no',

})






//函数定义区域############################################################################
//提交表单
const onSubmit = () => {
  console.log('submit!')
}
const handleChange = (value: number) => {
  console.log(value)
}




















</script>

<style scoped>
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
.chart{
  height: 350px;

}
.section{
  padding:20px;
  background-color: white;
  border: 1px solid #ebeef5;
  box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
}

.table-td-thumb {
  display: block;
  margin: auto;
  width: 40px;
  height: 40px;
}
</style>
