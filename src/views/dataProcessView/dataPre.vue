<template>
  <div>
    <div class="container">
      <el-form :model="form" label-width="120px">
        <el-form-item label="请选择数据集">
          <el-select v-model="form.datasets" placeholder="请选择您的数据集">
            <el-option label="肺部MRI数据集-D001" value="1" />
            <el-option label="脑肿瘤超声波数据集-D002" value="2" />
            <el-option label="眼部超声波数据集-D003" value="3" />
          </el-select>
        </el-form-item>
        <el-form-item label="标签类别数">
          <el-input v-model="form.label_num" />
        </el-form-item>
        <el-form-item label="数据集详情">
          <el-input v-model="form.datasets_detail" />
        </el-form-item>
        <el-form-item label="训练集数量">
          <el-input v-model="form.train_num" />
        </el-form-item>
        <el-form-item label="验证集数量">
          <el-input v-model="form.val_num" />
        </el-form-item>
        <el-form-item label="测试集数量">
          <el-input v-model="form.test_num" />
        </el-form-item>
      </el-form>
      <el-row class="mb-4">
        <el-popconfirm title="确定点击?点击后不可更改配置">
          <template #reference>
            <el-button type="primary">下一步</el-button>
          </template>
        </el-popconfirm>
        <el-button type="success">保存</el-button>
      </el-row>
    </div>
  </div>
</template>

<script setup lang="ts" name="dataPre">
import { ref, reactive } from 'vue';
import { ElMessage, ElMessageBox} from 'element-plus';
//请求
import request from "../../utils/request";
import { onMounted } from 'vue';
import * as echarts from 'echarts';

//属性定义区域############################################################################
//表单数据
const form = reactive({
  datasets: '',
  //标签类别数
  label_num: '6',
  //数据集详情
  datasets_detail: '',
  //训练集数量
  train_num: '840',
  //验证集数量
  val_num: '240',
  //测试集数量
  test_num: '120',

})






//函数定义区域############################################################################
const handleChange = (value:any) => {
  console.log(value)
}
const onSubmit = () => {
  console.log('submit!')
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
