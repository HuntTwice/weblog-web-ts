<template>
    <el-container class="layout-container">
        <!-- 侧边栏 -->
        <Aside />
        <el-container class="content-wrapper">
            <!-- 头部 -->
            <Header />
            <!-- 主内容区 -->
            <Main />
        </el-container>
    </el-container>
</template>

<script setup lang="ts">
import Aside from '../components/aside.vue'
import Header from '../components/header.vue'
import Main from '../router-view/main.vue'
</script>

<style scoped>
.layout-container {
    height: 100vh;
    width: 100%;
}
.content-wrapper {
    flex-direction: column;
    width: 100%;
    height: 100%;
}
</style>