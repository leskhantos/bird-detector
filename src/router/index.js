import {createWebHashHistory, createRouter} from 'vue-router'
import Main from '../components/Main.vue'
import Menu from '../components/Menu.vue'
import Introduction from '../components/Introduction.vue'
import StartDetect from '../components/StartDetect.vue'
import CopePods from '../components/copepods/CopePods.vue'
import CopePodsCon from '../components/copepods/CopePodsContinue.vue'
import Pelec from '../components/copepods/pelec/Pelec.vue'
import PinkPelec from '../components/copepods/pelec/PinkPelec.vue'
import CrispusPelec from '../components/copepods/pelec/CrispusPelec.vue'


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
        },
        {
            path:'/copepods',
            name:'copepods',
            component: CopePods
        },
        {
            path:'/copepodscontinue',
            name:'copepodscontinue',
            component: CopePodsCon
        },
        {
            path:'/pelec',
            name:'pelec',
            component: Pelec
        },
        {
            path:'/pink-pelec',
            name:'pink-pelec',
            component: PinkPelec
        },
        {
            path:'/crispus-pelec',
            name:'crispus-pelec',
            component: CrispusPelec
        }
    ]
})