import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '@/components/home.vue'
import Test from '@/components/test.vue'
import MaxInt from '@/components/maxint.vue'
import ModeNum from '@/components/modenum.vue'
import ProductDetails from '@/components/ProductDetails/ProductDetails.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
    { path: '/', component: Home },
    { path: '/test', component: Test },
    { path: '/maxint', component: MaxInt },
    { path: '/modenum', component: ModeNum },
    { name: 'ProductDetails', path: '/productdetails/:productName/:productImage/:freeShipping', component: ProductDetails, props: true },
]

const router = new VueRouter({
  routes
})

export default router
