import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Test from '@/components/test'
import MaxInt from '@/components/maxint'
import ModeNum from '@/components/modenum'
Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', component: Home },
    { path: '/test', component: Test },
    { path: '/maxint', component: MaxInt },
    { path: '/modenum', component: ModeNum }
  ]
})
