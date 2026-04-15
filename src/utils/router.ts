import { ElNotification } from 'element-plus'
import type { RouteLocationRaw, RouteRecordRaw } from 'vue-router'
import { isNavigationFailure, NavigationFailureType } from 'vue-router'
// import { i18n } from '/@/lang/index'
import router from '/@/router/index'
import { useConfig } from '/@/stores/config'
import { closeShade } from '/@/utils/pageShade'
/**
 * 导航失败有错误消息的路由push
 * @param to — 导航位置，同 router.push
 */
export const routePush = async (to: RouteLocationRaw) => {
    try {
        const failure = await router.push(to)
        if (isNavigationFailure(failure, NavigationFailureType.aborted)) {
            ElNotification({
                message: 'utils.Navigation failed, navigation guard intercepted!',
                type: 'error',
            })
        } else if (isNavigationFailure(failure, NavigationFailureType.duplicated)) {
            ElNotification({
                message: 'utils.Navigation failed, it is at the navigation target position!',
                type: 'warning',
            })
        }
    } catch (error) {
        ElNotification({
            message: 'utils.Navigation failed, invalid route!',
            type: 'error',
        })
        console.error(error)
    }
}

/**
 * 获取第一个菜单
 */
export const getFirstRoute = (routes: RouteRecordRaw[]): false | RouteRecordRaw => {
    const routerPaths: string[] = []
    const routers = router.getRoutes()
    routers.forEach((item) => {
        if (item.path) routerPaths.push(item.path)
    })
    let find: boolean | RouteRecordRaw = false
    for (const key in routes) {
        if (routes[key].meta?.type == 'menu' && routerPaths.indexOf(routes[key].path) !== -1) {
            return routes[key]
        } else if (routes[key].children && routes[key].children?.length) {
            find = getFirstRoute(routes[key].children!)
            if (find) return find
        }
    }
    return find
}

/**
 * 打开侧边菜单
 * @param menu 菜单数据
 */
export const onClickMenu = (menu: RouteRecordRaw) => {
    switch (menu.meta?.menu_type) {
        case 'iframe':
        case 'tab':
            routePush(menu.path)
            break
        case 'link':
            window.open(menu.path, '_blank')
            break

        default:
            ElNotification({
                message: 'utils.Navigation failed, the menu type is unrecognized!',
                type: 'error',
            })
            break
    }

    const config = useConfig()
    if (config.layout.shrink) {
        closeShade(() => {
            config.setLayout('menuCollapse', true)
        })
    }
}

/**
 * 获取菜单唯一标识
 * @param menu 菜单数据
 * @param prefix 前缀
 */
export const getMenuKey = (menu: RouteRecordRaw, prefix = '') => {
    // 判断：如果传入的前缀 prefix 是空字符串
    if (prefix === '') {
        // 就把 路由的路径(menu.path) 赋值给 prefix 作为默认前缀
        prefix = menu.path
    }
    // 模板字符串拼接，返回最终生成的唯一key
    // 拼接规则：prefix - 路由name - 路由meta.id（没有id则为空）
    return `${prefix}-${menu.name as string}-${menu.meta && menu.meta.id ? menu.meta.id : ''}`
}
