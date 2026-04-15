<template>
    <div class="nav-tabs" ref="tabScrollbarRef">

    </div>
</template>

<script setup lang="ts">
import { nextTick, onMounted, reactive, useTemplateRef } from 'vue'
import { useRoute, useRouter, onBeforeRouteUpdate, type RouteLocationNormalized } from 'vue-router'
import { useConfig } from '/@/stores/config'
import { useNavTabs } from '/@/stores/navTabs'
import { useTemplateRefsList } from '@vueuse/core'

const route = useRoute()
const router = useRouter()
const config = useConfig()
const navTabs = useNavTabs()

</script>

<style scoped lang="scss">
.dark {
    .close-icon {
        color: v-bind('config.getColorVal("headerBarTabColor")') !important;
    }
    .ba-nav-tab.active {
        .close-icon {
            color: v-bind('config.getColorVal("headerBarTabActiveColor")') !important;
        }
    }
}
.nav-tabs {
    overflow-x: auto;
    overflow-y: hidden;
    margin-right: var(--ba-main-space);
    scrollbar-width: none;

    &::-webkit-scrollbar {
        height: 5px;
    }
    &::-webkit-scrollbar-thumb {
        background: #eaeaea;
        border-radius: var(--el-border-radius-base);
        box-shadow: none;
        -webkit-box-shadow: none;
    }
    &::-webkit-scrollbar-track {
        background: v-bind('config.layout.layoutMode == "Default" ? "none":config.getColorVal("headerBarBackground")');
    }
    &:hover {
        &::-webkit-scrollbar-thumb:hover {
            background: #c8c9cc;
        }
    }
}
.ba-nav-tab {
    white-space: nowrap;
    height: 40px;
}
</style>
