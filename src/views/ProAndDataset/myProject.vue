<script setup lang="ts">

</script>

<template>
  <div>
    <div class="container">
      <el-form>
        <el-form-item label="">
          <el-button type="primary">新建项目</el-button>
        </el-form-item>
        <el-row :gutter="12">
          <el-col :span="8">
            <el-card class="box-card">
              <template #header>
                <div class="card-header">
                  <span style="margin-right: 40px">肺部MRI图像分割-A001</span>
                  <el-button type="primary" plain>查看</el-button>
                  <el-button type="danger" plain>删除</el-button>
                </div>
              </template>
              2023-12-06 19:10:20
              <template #footer>Footer content</template>
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card class="box-card">
              <template #header>
                <div class="card-header">
                  <span style="margin-right: 10px">脑肿瘤超声波图像分割-A002</span>
                  <el-button type="primary" plain>查看</el-button>
                  <el-button type="danger" plain>删除</el-button>
                </div>
              </template>
              2023-12-06 22:00:00
              <template #footer>Footer content</template>
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card class="box-card">
              <template #header>
                <div class="card-header">
                  <span style="margin-right: 20px">眼部超声波图像分割-A003</span>
                  <el-button type="primary" plain>查看</el-button>
                  <el-button type="danger" plain>删除</el-button>
                </div>
              </template>
              2023-12-07 21:30:23
              <template #footer>Footer content</template>
            </el-card>
          </el-col>
        </el-row>
      </el-form>


    </div>
  </div>
</template>

<style scoped>

</style>
