<template>
    <div class="home-page">
        <el-card class="welcome-card">
            <div class="welcome-content">
                <h1>欢迎使用 BuildAdmin 后台管理系统</h1>
                <p>极简版模板 · 基于 Vue3 + Element Plus 构建</p>
            </div>
            <div class="stats-box">
                <el-row :gutter="20">
                    <el-col :span="6">
                        <el-card shadow="hover" class="stat-item">
                            <div class="stat-value">89</div>
                            <div class="stat-label">今日访问</div>
                        </el-card>
                    </el-col>
                    <el-col :span="6">
                        <el-card shadow="hover" class="stat-item">
                            <div class="stat-value">1256</div>
                            <div class="stat-label">总用户数</div>
                        </el-card>
                    </el-col>
                    <el-col :span="6">
                        <el-card shadow="hover" class="stat-item">
                            <div class="stat-value">36</div>
                            <div class="stat-label">待处理任务</div>
                        </el-card>
                    </el-col>
                    <el-col :span="6">
                        <el-card shadow="hover" class="stat-item">
                            <div class="stat-value">99%</div>
                            <div class="stat-label">服务器负载</div>
                        </el-card>
                    </el-col>
                </el-row>
            </div>
        </el-card>
    </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.home-page {
    width: 100%;
    height: 100%;
}
.welcome-card {
    height: 100%;
}
.welcome-content {
    text-align: center;
    padding: 20px 0;
    border-bottom: 1px solid #e6e6e6;
    margin-bottom: 20px;
}
.welcome-content h1 {
    color: #333;
    margin: 0 0 10px 0;
}
.welcome-content p {
    color: #666;
    margin: 0;
}
.stats-box {
    padding: 0 20px;
}
.stat-item {
    text-align: center;
}
.stat-value {
    font-size: 24px;
    font-weight: bold;
    color: #409eff;
    margin: 10px 0;
}
.stat-label {
    color: #666;
    font-size: 14px;
}
</style>