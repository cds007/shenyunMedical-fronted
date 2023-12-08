<template>
	<div class="container">
		<div class="plugins-tips" style="text-align: center">
      <h1>“深云”基于MedicalSeg模型的全流程 3D 医学影像分割平台</h1>
      <br>
      <div>
        <img src="../assets/img/shenyunlogo.jpg" >
      </div>
    </div>
    <div class="plugins-tips">
      <p style="color: #000000;font-size: medium ">深云是一个<strong>全流程 3D 医学影像分割平台</strong>，用于处理医学图像并生成精确的分割结果。我们提供了一套完整的工具和流程，使用户能够进行数据预处理、模型训练、训练可视化、模型评估、模型部署和后处理等操作，以实现全流程医学图像的自动分割。</p>
    </div>
    <div class="plugins-tips">
      <h2>功能特点</h2>
      <ul style="margin-left: 40px; color: #000000;font-size: medium ">
        <li>数据预处理:支持医学图像的预处理操作，如图像增强、裁剪、缩放等，以提高模型训练的效果。</li>
        <li>模型训练:支持自定义模型的训练，用户可以根据自己的需求和数据集特点进行模型设计和训练。</li>
        <li>训练可视化:可视化展示训练过程中的训练损失、验证损失和准确率等指标。</li>
        <li>模型评估:支持使用各种评价指标对模型进行评估，如Dice系数、精确度、召回率等。提供可视化展示评估结果，包括混淆矩阵、准确率-召回率曲线等。</li>
        <li>模型部署:提供模型导出和加载功能，方便在不同平台和环境中使用模型。</li>
      </ul>
    </div>
    <div class="plugins-tips">
      <h2>使用指南</h2>
      <br>
      <p style="color: #000000;font-size: medium ">请参考项目文档中提供的详细使用指南，了解如何使用该平台的各个功能和流程。文档中包含了示例代码、演示视频和详细说明，帮助用户快速上手和使用平台。</p>
    </div>
    <div class="plugins-tips">
      <h2>联系方式</h2>
      <br>
      <p style="color: #000000;font-size: medium ">如果你有任何问题或反馈，请通过以下方式联系我们：</p>
      <ul style="margin-left: 40px; color: #000000;font-size: medium ">
        <li>邮件:    <a href="mailto:2205175277@qq.com">2205175277@qq.com</a></li>
      </ul>
      <br>
      <p style="color: #000000;font-size: medium ">我们将尽快回复你的消息。</p>
    </div>
    <div class="plugins-tips">
      <h2>常见问题</h2>
      <br>
      <h3>1. 如何使用自己的数据集？</h3>
      <br>
      <p style="color: #000000;font-size: medium ">你可以将自己的数据集按照平台的要求进行组织，并在配置文件中指定数据集的路径。然后，重新运行平台，即可导入自己的数据集进行训练和推理。</p>
      <br>
      <h3>2. 如何评估模型的性能？</h3>
      <br>
      <p style="color: #000000;font-size: medium ">我们提供了多种评估指标和可视化展示功能，你可以选择适合你的任务和需求的评估方法。通过评估指标和可视化结果，你可以了解模型的准确度、召回率等性能指标，并对模型进行优化和改进。</p>
    </div>
	</div>
</template>

<script setup lang="ts" name="donate">
</script>

<style>
ul li::marker{
  font-size: 30px;
}


</style>
