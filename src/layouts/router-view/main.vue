<template>
    <el-main class="layout-main">
        <el-scrollbar class="layout-main-scrollbar">
            <router-view />
        </el-scrollbar>
    </el-main>
</template>

<script setup lang="ts"></script>

<style scoped>
.layout-main {
    padding: 20px !important;
    overflow: hidden;
    width: 100%;
    height: calc(100vh - 60px);
    background-color: #f5f7fa;
}
.layout-main-scrollbar {
    width: 100%;
    height: 100%;
}
</style>
