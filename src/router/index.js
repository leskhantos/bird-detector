import {createWebHashHistory, createRouter} from 'vue-router'
import Main from '../components/Main.vue'
import Menu from '../components/Menu.vue'
import Introduction from '../components/Introduction.vue'
import StartDetect from '../components/StartDetect.vue'


export default createRouter({
    history: createWebHashHistory(),
    routes:[
        {
            path:'/',
            name:'main',
            component: Main
        },
        {
            path:'/menu',
            name:'menu',
            component: Menu
        },
        {
            path:'/introduction',
            name:'introduction',
            component: Introduction
        },
        {
            path:'/start-detect',
            name:'start-detect',
            component: StartDetect
        }
    ]
})