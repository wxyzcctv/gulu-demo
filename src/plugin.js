import Toast from './toast'

let currentToast
export default {
    install(Vue, options) {
        Vue.prototype.$toast = function (message, taostOptions) {
            if(currentToast){
                currentToast.close()
            }
            currentToast = creatToast({Vue,message,propsData:taostOptions})
        }
    }
}

function creatToast({Vue,message,propsData}){
    const Constructor = Vue.extend(Toast)
    const toast = new Constructor({propsData})
    toast.$slots.default = [message]
    toast.$mount()
    document.body.appendChild(toast.$el)
    return toast
}