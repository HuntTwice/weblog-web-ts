<template>
    <el-header class="layout-header">
        <div class="header-left">
            <el-icon class="menu-toggle" size="20"><Menu /></el-icon>
        </div>
        <div class="header-center">
            <!-- 标签页（简化） -->
            <div class="header-tabs">
                <div class="tab-item active">首页</div>
            </div>
        </div>
        <div class="header-right">
            <el-dropdown>
        <span class="user-info">
          <el-icon><User /></el-icon>
          管理员
        </span>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item>个人资料</el-dropdown-item>
                        <el-dropdown-item>退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>
    </el-header>
</template>

<script setup lang="ts">
import { Menu, User } from '@element-plus/icons-vue'
</script>

<style scoped>
.layout-header {
    height: 60px;
    line-height: 60px;
    background-color: #fff;
    border-bottom: 1px solid #e6e6e6;
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.header-left .menu-toggle {
    cursor: pointer;
    color: #666;
}
.header-tabs {
    display: flex;
}
.tab-item {
    padding: 0 20px;
    cursor: pointer;
    color: #666;
}
.tab-item.active {
    color: #409eff;
    border-bottom: 2px solid #409eff;
}
.user-info {
    cursor: pointer;
    color: #666;
    display: flex;
    align-items: center;
    gap: 5px;
}
</style>