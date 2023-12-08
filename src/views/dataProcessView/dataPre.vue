<template>
  <div>
    <div class="container">
      <el-form :model="form" label-width="120px">
        <el-form-item label="请选择数据集">
          <el-select v-model="form.datasets" placeholder="请选择您的数据集">
            <el-option label="蔬菜" value="vegetables" />
            <el-option label="动物" value="animal" />
            <el-option label="汽车" value="car" />
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


<!--        <el-form-item label="Activity time">-->
<!--          <el-col :span="11">-->
<!--            <el-date-picker-->
<!--                v-model="form.date1"-->
<!--                type="date"-->
<!--                placeholder="Pick a date"-->
<!--                style="width: 100%"-->
<!--            />-->
<!--          </el-col>-->
<!--          <el-col :span="2" class="text-center">-->
<!--            <span class="text-gray-500">-</span>-->
<!--          </el-col>-->
<!--          <el-col :span="11">-->
<!--            <el-time-picker-->
<!--                v-model="form.date2"-->
<!--                placeholder="Pick a time"-->
<!--                style="width: 100%"-->
<!--            />-->
<!--          </el-col>-->
<!--        </el-form-item>-->
<!--        <el-form-item label="Instant delivery">-->
<!--          <el-switch v-model="form.delivery" />-->
<!--        </el-form-item>-->
<!--        <el-form-item label="Activity type">-->
<!--          <el-checkbox-group v-model="form.type">-->
<!--            <el-checkbox label="Online activities" name="type" />-->
<!--            <el-checkbox label="Promotion activities" name="type" />-->
<!--            <el-checkbox label="Offline activities" name="type" />-->
<!--            <el-checkbox label="Simple brand exposure" name="type" />-->
<!--          </el-checkbox-group>-->
<!--        </el-form-item>-->
<!--        <el-form-item label="Resources">-->
<!--          <el-radio-group v-model="form.resource">-->
<!--            <el-radio label="Sponsor" />-->
<!--            <el-radio label="Venue" />-->
<!--          </el-radio-group>-->
<!--        </el-form-item>-->
<!--        <el-form-item label="Activity form">-->
<!--          <el-input v-model="form.desc" type="textarea" />-->
<!--        </el-form-item>-->
<!--        <el-form-item>-->
<!--          <el-button type="primary" @click="onSubmit">Create</el-button>-->
<!--          <el-button>Cancel</el-button>-->
<!--        </el-form-item>-->
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

  //以下是测试数据:
  // name: '',
  // region: '',
  // date1: '',
  // date2: '',
  // delivery: false,
  // type: [],
  // resource: '',
  // desc: '',
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
