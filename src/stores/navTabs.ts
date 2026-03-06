import { defineStore } from 'pinia'
import type { NavTabs } from '/@/stores/interface'
import { reactive } from 'vue'

export const useNavTabs = defineStore('navTabs', () => {
    const state: NavTabs = reactive({
        activeIndex: 0,
        activeRoute: null,
        authNode: new Map(),
        tabFullScreen: false,
        tabsView: [],
        tabsViewRoutes: [],
    })

    return { state }
})
