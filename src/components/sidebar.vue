<template>
	<div class="sidebar">
		<el-menu
			class="sidebar-el-menu"
			:default-active="onRoutes"
			:collapse="sidebar.collapse"
			background-color=""
			text-color="#000000"
			active-text-color="#20a0ff"
			unique-opened
			router
		>
			<template v-for="item in items">
				<template v-if="item.subs">
					<el-sub-menu :index="item.index" :key="item.index" v-permiss="item.permiss">
						<template #title>
							<el-icon>
								<component :is="item.icon"></component>
							</el-icon>
							<span>{{ item.title }}</span>
						</template>
						<template v-for="subItem in item.subs">
							<el-sub-menu
								v-if="subItem.subs"
								:index="subItem.index"
								:key="subItem.index"
								v-permiss="item.permiss"
							>
								<template #title>{{ subItem.title }}</template>
								<el-menu-item v-for="(threeItem, i) in subItem.subs" :key="i" :index="threeItem.index">
									{{ threeItem.title }}
								</el-menu-item>
							</el-sub-menu>
							<el-menu-item v-else :index="subItem.index" v-permiss="item.permiss">
								{{ subItem.title }}
							</el-menu-item>
						</template>
					</el-sub-menu>
				</template>
				<template v-else>
					<el-menu-item :index="item.index" :key="item.index" v-permiss="item.permiss">
						<el-icon>
							<component :is="item.icon"></component>
						</el-icon>
						<template #title>{{ item.title }}</template>
					</el-menu-item>
				</template>
			</template>
		</el-menu>
	</div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useSidebarStore } from '../store/sidebar';
import { useRoute } from 'vue-router';

const items = [
	{
		icon: 'Odometer',
		index: '/dashboard',
		title: '系统首页',
		permiss: '1'
	},
  {
    icon: 'Edit',
    index: '2',
    title: '模型训练流程',
    permiss: '4',
    subs: [
      {
        icon: 'Calendar',
        index: '/dataPre',
        title: '数据准备',
        permiss: '2'
      },
      {
        icon: 'DocumentCopy',
        index: '/dataTrain',
        title: '模型训练',
        permiss: '3'
      },
      {
        icon: 'InfoCircle',
        index: '/trainVision',
        title: '训练可视化',
        permiss: '3'
      },
      {
        icon: 'PieChart',
        index: '/dataEval',
        title: '模型评估',
        permiss: '11'
      },
      {
        icon: 'Warning',
        index: '/dataDeploy',
        title: '模型部署',
        permiss: '13'
      },
    ]
  },
  {
    icon: 'Calendar',
    index: '/myProject',
    title: '我的项目',
    permiss: '13'
  },
  {
    icon: 'PieChart',
    index: '/myDataset',
    title: '我的训练集',
    permiss: '13'
  },
	// {
	// 	icon: 'Edit',
	// 	index: '3',
	// 	title: '表单相关',
	// 	permiss: '4',
	// 	subs: [
	// 		{
	// 			index: '/form',
	// 			title: '基本表单',
	// 			permiss: '5'
	// 		},
	// 		{
	// 			index: '/upload',
	// 			title: '文件上传',
	// 			permiss: '6'
	// 		},
	// 		{
	// 			index: '4',
	// 			title: '三级菜单',
	// 			permiss: '7',
	// 			subs: [
	// 				{
	// 					index: '/editor',
	// 					title: '富文本编辑器',
	// 					permiss: '8'
	// 				},
	// 				{
	// 					index: '/markdown',
	// 					title: 'markdown编辑器',
	// 					permiss: '9'
	// 				}
	// 			]
	// 		}
	// 	]
	// },
	// {
	// 	icon: 'Setting',
	// 	index: '/icon',
	// 	title: '自定义图标',
	// 	permiss: '10'
	// },
	{
		icon: 'CoffeeCup',
		index: '/settings',
		title: '设置和说明',
		permiss: '14'
	}
];

const route = useRoute();
const onRoutes = computed(() => {
	return route.path;
});

const sidebar = useSidebarStore();
</script>

<style scoped>
.sidebar {
	display: block;
	position: absolute;
	left: 0;
	top: 70px;
	bottom: 0;
	overflow-y: scroll;
}
.sidebar::-webkit-scrollbar {
	width: 0;
}
.sidebar-el-menu:not(.el-menu--collapse) {
	width: 250px;
}
.sidebar > ul {
	height: 100%;
}
</style>
