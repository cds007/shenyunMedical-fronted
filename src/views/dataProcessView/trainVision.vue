<template>
  <div>
    <div class="container">
      <el-form>
        <el-form-item label="| 当前训练进度:" style="font-size: small;color: #409EFF;">
          <el-link type="primary" @click="dialogVisible = true">查看训练日志</el-link>
          <el-link type="danger"  @click="dialogVisibleError = true">查看错误日志</el-link>
        </el-form-item>
        <el-form-item label="当前状态">
          <text style="font-size: small;color: #409EFF;">{{form.trainState}}</text>
        </el-form-item>
        <el-form-item label="完成进度">
        </el-form-item>
        <div class="demo-progress">
          <el-progress :percentage="form.percentage" />
        </div>
        <el-form-item label="迭代轮数">
          <text style="font-size: small;color: #409EFF;">{{form.epoch}}/10</text>
        </el-form-item>
        <el-form-item label="已运行时间">
          <text style="font-size: small;color: #67C23A;">{{form.hour}}小时{{form.minute}}分钟{{form.second}}秒</text>
        </el-form-item>
        <el-form-item label="训练集">
          <el-row>
            <el-col :span="8">
              <el-card class="box-card">
                <template #header>
                  <div class="card-header">
                    <text style="font-size: small;color: #000000;">训练集loss</text>
                  </div>
                </template>
                <text style="font-size: small;color: #606266;text-align: center">{{form.trainLoss}}</text>
              </el-card>
            </el-col>
            <el-col :span="8">
              <el-card class="box-card">
                <template #header>
                  <div class="card-header">
                    <text style="font-size: small;color: #000000;">top1准确率</text>
                  </div>
                </template>
                <text style="font-size: small;color: #606266;text-align: center">{{form.top1}}</text>
              </el-card>
            </el-col>
            <el-col :span="8">
              <el-card class="box-card">
                <template #header>
                  <div class="card-header">
                    <text style="font-size: small;color: #000000;">top5准确率</text>
                  </div>
                </template>
                <text style="font-size: small;color: #606266;text-align: center">{{form.top5}}</text>
              </el-card>
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item label="测试集">
          <el-row>
            <el-col :span="12">
              <el-card class="box-card">
                <template #header>
                  <div class="card-header">
                    <text style="font-size: small;color: #000000;">top1准确率</text>
                  </div>
                </template>
                <text style="font-size: small;color: #606266;text-align: center">{{form.testTop1}}</text>
              </el-card>
            </el-col>
            <el-col :span="12">
              <el-card class="box-card">
                <template #header>
                  <div class="card-header">
                    <text style="font-size: small;color: #000000;">top5准确率</text>
                  </div>
                </template>
                <text style="font-size: small;color: #606266;text-align: center">{{form.testTop5}}</text>
              </el-card>
            </el-col>
          </el-row>
        </el-form-item>
      </el-form>
      <el-row class="mb-4">
        <el-popconfirm title="确定中止?中止后不可更改配置">
          <template #reference>
            <el-button type="primary">中止训练</el-button>
          </template>
        </el-popconfirm>
        <el-button type="{{modelEvalState}}" :disabled="true">模型评估</el-button>
      </el-row>
    </div>

    <el-dialog
        v-model="dialogVisible"
        title="训练日志"
        width="30%"
        :before-close="handleClose"
    >
      <p>{{dialogContent}}</p>
      <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="dialogVisible = false">
          关闭
        </el-button>
      </span>
      </template>
    </el-dialog>

    <el-dialog
        v-model="dialogVisibleError"
        title="错误日志"
        width="30%"
        :before-close="handleCloseError"
    >
      <p>{{dialogContentError}}</p>
      <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisibleError = false">取消</el-button>
        <el-button type="primary" @click="dialogVisibleError = false">
          关闭
        </el-button>
      </span>
      </template>
    </el-dialog>

  </div>


</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
import { ElMessage, ElMessageBox } from 'element-plus';
import request from "../../utils/request";

// 属性定义区域############################################################################
// 表单数据
const form = reactive({
  //需要的数据
  trainState:'训练中',
  percentage:20,
  epoch:'3',
  //运行小时
  hour:'2',
  //运行分钟
  minute:'30',
  //运行秒数
  second:'30',
  //训练集loss
  trainLoss:'0.0255',
  //top1准确率
  top1:'1.0000',
  //top5准确率
  top5:'1.0000',
  //测试集top1准确率
  testTop1:'0.9458',
  //测试集top5准确率
  testTop5:'1.0000',
})
//模型评估状态
const modelEvalState = ref('info')
//模型评估是否可点击
const modelEvalDisabled = ref('true')
//弹窗是否可见
const dialogVisible = ref(false)
//查看训练日志的内容
const dialogContent = ref('los5=0.033121,acc1=1.000000,acc5=1.000000,lr=0.000787,\n' +
    'time_each_step=0.13s,eta=0:0:52\n' +
    '2023-12-0722:10:48NFO]TRAIN]Epoch=4/10,Step=6/52\n' +
    'los5=0.248616,acc1=0.937500,acc5=1.000000,lr=0.000782\n' +
    'time_each_step=0.14s,eta=0:0:53\n' +
    '2023-12-0722:10:491NFO]TRAIN]Epoch=4/10,Step=8/52,\n' +
    'loss=0.104204,acc1=1.000000,acc5=1.000000,Ir=0.000777,\n' +
    'time_each_step=0.13s,eta=0:0:52\n' +
    '2023-12-0722:10:49lNFO]TRAIN]Epoch=4/10,Step=10/52,\n' +
    'lo55=0.145374,acc1=1.000000,acc5=1.000000,lr=0.000771,\n' +
    'time_each_step=0.14s,eta=0:0:55\n' +
    '2023-12-0722:10:49[INFO][TRAIN]Epoch:=4/10,Step=12/52,\n' +
    'loss=0.272593,acc1=0.937500,acc5=1.000000,lr=0.000766\n' +
    'time_each_step=0.14s,eta=0:0:52\n' +
    '2023-12-0722:10:49lNFO]TRAIN]Epoch=4/10,Step=14/52\n' +
    'loss=0.312723,acc1=0.875000,acc5=1.000000,lr=0.000761,\n' +
    'time_each_step=0.14s,eta=0:0:53\n' +
    '2023-12-0722:10:50lNFO]TRAIN]Epoch=4/10,Step=16/52,\n' +
    'loss=0.164099,acc1=0.937500,acc5=1.000000,lr=0.000756\n' +
    'time_each_step=0.14s,eta=0:0:53');
//弹窗是否可见
const dialogVisibleError = ref(false)
//查看训练日志的内容
const dialogContentError = ref('los5=0.033121,acc1=1.000000,acc5=1.000000,lr=0.000787,\n' +
    'time_each_step=0.13s,eta=0:0:52\n' +
    '2023-12-0722:10:48NFO]TRAIN]Epoch=4/10,Step=6/52\n' +
    'los5=0.248616,acc1=0.937500,acc5=1.000000,lr=0.000782\n' +
    'time_each_step=0.14s,eta=0:0:53\n' +
    '2023-12-0722:10:491NFO]TRAIN]Epoch=4/10,Step=8/52,\n' +
    'loss=0.104204,acc1=1.000000,acc5=1.000000,Ir=0.000777,\n' +
    'time_each_step=0.13s,eta=0:0:52\n' +
    '2023-12-0722:10:49lNFO]TRAIN]Epoch=4/10,Step=10/52,\n' +
    'lo55=0.145374,acc1=1.000000,acc5=1.000000,lr=0.000771,\n' +
    'time_each_step=0.14s,eta=0:0:55\n' +
    '2023-12-0722:10:49[INFO][TRAIN]Epoch:=4/10,Step=12/52,\n' +
    'loss=0.272593,acc1=0.937500,acc5=1.000000,lr=0.000766\n' +
    'time_each_step=0.14s,eta=0:0:52\n' +
    '2023-12-0722:10:49lNFO]TRAIN]Epoch=4/10,Step=14/52\n' +
    'loss=0.312723,acc1=0.875000,acc5=1.000000,lr=0.000761,\n' +
    'time_each_step=0.14s,eta=0:0:53\n' +
    '2023-12-0722:10:50lNFO]TRAIN]Epoch=4/10,Step=16/52,\n' +
    'loss=0.164099,acc1=0.937500,acc5=1.000000,lr=0.000756\n' +
    'time_each_step=0.14s,eta=0:0:53');







//函数定义区域############################################################################
const handleClose = (done: () => void) => {
  ElMessageBox.confirm('确定关闭训练日志吗?')
      .then(() => {
        done()
      })
      .catch(() => {
        // catch error
      })
}
const handleCloseError = (done: () => void) => {
  ElMessageBox.confirm('确定关闭错误日志吗?')
      .then(() => {
        done()
      })
      .catch(() => {
        // catch error
      })
}





</script>

<style scoped>
.normalText {
  font-size: small;
  color: #409EFF;
}
.demo-progress .el-progress--line {
  margin-bottom: 15px;
  width: 350px;
}
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.box-card {
  width: 110px;
  margin-right: 20px;
}



.el-link {
  margin-right: 8px;
}
.el-link .el-icon--right.el-icon {
  vertical-align: text-bottom;
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
