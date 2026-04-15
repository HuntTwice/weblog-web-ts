<script lang="ts">
import { createVNode, resolveComponent, defineComponent, computed, type CSSProperties } from 'vue'
import Svg from '/@/components/icon/svg/index.vue'
import { isExternal } from '/@/utils/common'

export default defineComponent({
    name: 'Icon',
    props: {
        name: {
            type: String,
            required: true,
        },
        size: {
            type: String,
            default: '18px',
        },
        color: {
            type: String,
            default: '#000000',
        },
    },
    setup(props) {
        // 计算属性：响应式生成图标样式
        const iconStyle = computed((): CSSProperties => {
            const { size, color } = props
            // 处理 size：确保最终是 px 单位（比如传入 20 会转为 20px）
            let s = `${size.replace('px', '')}px`
            return {
                fontSize: s, // 字体图标通过 fontSize 控制大小
                color: color, // 图标颜色
            }
        })

        // 条件 1：渲染 Element Plus 图标（name 以 el-icon- 开头）
        if (props.name.indexOf('el-icon-') === 0) {
            return () =>
                createVNode(
                    'el-icon',
                    {
                        class: 'icon el-icon', // 自定义类名
                        style: iconStyle.value, // 绑定计算出的样式
                    },
                    [createVNode(resolveComponent(props.name))] // 子节点：解析并渲染 Element 图标组件
                )
        }
        // 条件 2：渲染本地/外部 SVG 图标（name 以 local- 开头 或 是外部链接）
        else if (props.name.indexOf('local-') === 0 || isExternal(props.name)) {
            return () =>
                createVNode(Svg, {
                    name: props.name, //名称
                    size: props.size,
                    color: props.color,
                }) // 直接渲染自定义 Svg 组件，传递属性
        }
        // 条件 3：渲染第三方字体图标（如 Font Awesome，name 是类名）
        else {
            return () =>
                createVNode(
                    'i',
                    {
                        class: [props.name, 'icon'], // 绑定字体图标类名 + 自定义 icon 类
                        style: iconStyle.value,
                    } // 绑定样式
                )
        }
    },
})
</script>
