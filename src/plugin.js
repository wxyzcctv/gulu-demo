import Toast from './toast'
export default {
    install(Vue, options) {
        Vue.prototype.$toast = function (message, taostOptions) {
            const Constructor = Vue.extend(Toast)
            const toast = new Constructor({
                propsData:taostOptions
            })
            // 以上两句是要死记硬背的
            toast.$slots.default = [message]
            toast.$mount()
            // 创建好组件之后需要mount一下，不然创建的组件不会起作用
            document.body.appendChild(toast.$el)
            // 将创建的组件的元素添加到body里面
        }
    }
}