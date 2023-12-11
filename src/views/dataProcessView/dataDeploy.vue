<template>
  <div>
    <div class="container">
      <el-form>
        <el-form-item label="| 模型发布配置:">
        </el-form-item>
        <el-form-item label="项目名称">
          <el-input v-model="form.proName" placeholder="请输入项目名称"/>
        </el-form-item>
        <el-form-item label="存储路径">
          <el-input v-model="form.proPath" placeholder="请输入项目名称"/>
        </el-form-item>
        <el-upload
            v-model:file-list="fileList"
            class="upload-demo"
            action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
            multiple
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :before-remove="beforeRemove"
            :limit="3"
            :on-exceed="handleExceed"
        >
          <el-button type="primary">上传文件路径</el-button>
          <template #tip>
            <div class="el-upload__tip">
            </div>
          </template>
        </el-upload>

      </el-form>
    </div>
  </div>
</template>

<script setup lang="ts" name="dataDeploy">
import { ref, reactive } from 'vue';
import { ElMessage, ElMessageBox } from 'element-plus';
//@ts-ignore
import { Delete, Edit, Search, Plus } from '@element-plus/icons-vue';
import {deleteUserById, fetchDataByWord, getAllUsers, getUserByName, postUser, putUser} from '../../api';
import request from "../../utils/request";
import { onMounted } from 'vue';
import * as echarts from 'echarts';
import type { UploadProps, UploadUserFile } from 'element-plus'

//属性定义区域############################################################################
const form = reactive({
  proName: '',
  //存储路径
  proPath: 'F:\\D2\\下载',
})

const fileList = ref<UploadUserFile[]>([

])

//函数定义区域############################################################################
const handleRemove: UploadProps['onRemove'] = (file, uploadFiles) => {
  console.log(file, uploadFiles)
}

const handlePreview: UploadProps['onPreview'] = (uploadFile) => {
  console.log(uploadFile)
}

const handleExceed: UploadProps['onExceed'] = (files, uploadFiles) => {
  ElMessage.warning(
      `The limit is 3, you selected ${files.length} files this time, add up to ${
          files.length + uploadFiles.length
      } totally`
  )
}

const beforeRemove: UploadProps['beforeRemove'] = (uploadFile, uploadFiles) => {
  return ElMessageBox.confirm(
      `Cancel the transfer of ${uploadFile.name} ?`
  ).then(
      () => true,
      () => false
  )
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
.table-td-thumb {
  display: block;
  margin: auto;
  width: 40px;
  height: 40px;
}
</style>


