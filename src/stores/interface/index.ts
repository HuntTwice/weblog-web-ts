import type { RouteLocationNormalized, RouteRecordRaw } from 'vue-router'

export interface Layout {
    /* 全局 - s */
    // 是否显示布局配置抽屉
    showDrawer: boolean
    // 是否收缩布局（小屏设备）
    shrink: boolean
    // 后台布局方式，可选值<Default|Classic|Streamline|Double>
    layoutMode: string
    // 后台主页面切换动画，可选值<slide-right|slide-left|el-fade-in-linear|el-fade-in|el-zoom-in-center|el-zoom-in-top|el-zoom-in-bottom>
    mainAnimation: string
    // 是否暗黑模式
    isDark: boolean
    /* 全局 - e */

    /* 侧边栏 - s */
    // 侧边菜单宽度（展开时），单位px
    menuWidth: number
    // 侧边菜单项默认图标
    menuDefaultIcon: string
    // 是否水平折叠收起菜单
    menuCollapse: boolean
    // 是否只保持一个子菜单的展开（手风琴）
    menuUniqueOpened: boolean
    // 显示菜单栏顶栏（LOGO）
    menuShowTopBar: boolean
    // 侧边菜单背景色
    menuBackground: string[]
    // 侧边菜单文字颜色
    menuColor: string[]
    // 侧边菜单激活项背景色
    menuActiveBackground: string[]
    // 侧边菜单激活项文字色
    menuActiveColor: string[]
    // 侧边菜单顶栏背景色
    menuTopBarBackground: string[]
    /* 侧边栏 - e */

    /* 顶栏 - s */
    // 顶栏文字色
    headerBarTabColor: string[]
    // 顶栏背景色
    headerBarBackground: string[]
    // 顶栏悬停时背景色
    headerBarHoverBackground: string[]
    // 顶栏激活项背景色
    headerBarTabActiveBackground: string[]
    // 顶栏激活项文字色
    headerBarTabActiveColor: string[]
    /* 顶栏 - e */
}

export interface NavTabs {
    // 激活 tab 的 index
    activeIndex: number
    // 激活的 tab
    activeRoute: RouteLocationNormalized | null
    // tab 列表
    tabsView: RouteLocationNormalized[]
    // 当前 tab 是否全屏
    tabFullScreen: boolean
    // 从后台加载到的菜单路由列表
    tabsViewRoutes: RouteRecordRaw[]
    // 权限节点
    authNode: Map<string, string[]>
}

export interface SiteConfig {
    // 站点名称
    siteName: string
    // 系统版本号
    version: string
    // 内容分发网络URL
    cdnUrl: string
    // 中心接口地址（用于请求模块市场的数据等用途）
    apiUrl: string
    // 上传配置
    upload: {
        mode: string
        [key: string]: any
    }
    // 顶部导航菜单数据
    headNav: RouteRecordRaw[]
    // 备案号
    recordNumber?: string
    // 内容分发网络URL的参数，格式如 imageMogr2/format/heif
    cdnUrlParams: string

    // 初始化状态
    initialize: boolean
    userInitialize: boolean
}
