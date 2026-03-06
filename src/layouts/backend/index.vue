<template>
    <component :is="config.layout.layoutMode"></component>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { useConfig } from '/@/stores/config'

import Default from '/@/layouts/backend/container/default.vue'
import Classic from '/@/layouts/backend/container/classic.vue'

// 注册需要动态渲染的布局组件，确保 :is 能找到对应的组件（Vue3 中动态组件需显式注册）。
defineOptions({
    components: { Default, Classic },
})

const config = useConfig()
</script>
