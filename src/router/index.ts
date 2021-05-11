import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '@/components/Home/Home.vue'
import Test from '@/components/test.vue'
import MaxInt from '@/components/maxint.vue'
import ModeNum from '@/components/modenum.vue'
import ProductDetails from '@/components/ProductDetails/ProductDetails.vue'
import Cart from '@/components/Cart/Cart.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
    { name: 'home', path: '/', component: Home },
    { path: '/test', component: Test },
    { path: '/maxint', component: MaxInt },
    { path: '/modenum', component: ModeNum },
    { name: 'ProductDetails', path: '/productdetails', component: ProductDetails },
    { name: 'cart', path: '/cart', component: Cart },
]

const router = new VueRouter({
  routes
})

export default router
