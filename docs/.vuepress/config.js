module.exports = {
    base:'/gulu-demo/',
    title: '轮子UI',
    description: '一个好用的UI',
    themeConfig: {
        nav:[
            {text: '主页',link: '/'},
            {text: '文档',link: '/guide/'},
            {text: '交流',link: 'https://www.vue-js.com/'},
        ],
        sidebar: [
            {
                title: '入门',
                children:[
                    '/install/',
                    '/get-started/',
                ]
            },
            {
                title: '组件',
                children:[
                    '/components/button',
                    '/components/input',
                    '/components/tabs',
                    '/components/layout',
                    '/components/popover',
                    '/components/grid',
                    '/components/toast',
                ]
            }
            
          ]
    }
    
}