import { defineStore } from 'pinia'
import { reactive } from 'vue'
import type { Layout } from '/@/stores/interface'

export const useConfig = defineStore('config', () => {
    const layout: Layout = reactive({
        //全局
        showDrawer: false,
        shrink: false,
        layoutMode: 'Classic',
        isDark: false,
        mainAnimation: 'slide-right',

        //侧边栏
        menuBackground: ['#ffffff', '#1d1e1f'],
        menuColor: ['#303133', '#CFD3DC'],
        menuActiveBackground: ['#ffffff', '#1d1e1f'],
        menuActiveColor: ['#409eff', '#3375b9'],
        menuTopBarBackground: ['#fcfcfc', '#1d1e1f'],
        menuWidth: 260,
        menuDefaultIcon: 'fa fa-circle-o',
        menuCollapse: false,
        menuUniqueOpened: false,
        menuShowTopBar: true,

        //顶栏
        headerBarBackground: [],
        headerBarHoverBackground: [],
        headerBarTabActiveBackground: [],
        headerBarTabActiveColor: [],
        headerBarTabColor: [],
    })

    function menuWidth() {
        if (layout.shrink) {
            return layout.menuCollapse ? '0px' : layout.menuWidth + 'px'
        }
        // 菜单是否折叠
        return layout.menuCollapse ? '64px' : layout.menuWidth + 'px'
    }

    const getColorVal = function (name: keyof Layout): string {
        const colors = layout[name] as string[]
        if (layout.isDark) {
            return colors[1]
        } else {
            return colors[0]
        }
    }
    const setLayout = (name: keyof Layout, value: any) => {
        ;(layout[name] as any) = value
    }
    return { layout, getColorVal, menuWidth, setLayout }
})
