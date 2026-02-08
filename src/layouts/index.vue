<template>
    <component :is="layoutMode"></component>
</template>

<script setup lang="ts">
import { ref } from 'vue'
// 导入布局容器组件
import Default from './container/default.vue'

// 简化布局模式，默认使用default
const layoutMode = ref('Default')

// 注册组件
defineOptions({
    components: { Default},
})
</script>