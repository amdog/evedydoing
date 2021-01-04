import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import main from '../views/main.vue'

Vue.use(Vuex)

Vue.use(VueRouter)


let allowRows = parseInt((document.documentElement.clientHeight - 150) / 40)
export const store = new Vuex.Store({
  state: {
    showDefault: true,
    publicAllList: ['s'],
    alert: false,
    alertMessage: '',
    itemsList: [{
      time: 1,
      name: 'mysql+node',
      desc: '学校餐饮后台',
      status: 1
    }, {
      time: 1,
      name: 'mysql+node',
      desc: '学校餐饮后台',
      status: 1
    }, {
      time: 1,
      name: 'mysql+node',
      desc: '学校餐饮后台',
      status: 1
    }, {
      time: 1,
      name: 'mysql+node',
      desc: '学校餐饮后台',
      status: 3
    }, {
      time: 1,
      name: 'mysql+node',
      desc: '学校餐饮后台',
      status: 1
    }, {
      time: 1,
      name: 'mysql+node',
      desc: '学校餐饮后台',
      status: 2
    }, {
      time: 1,
      name: 'mysql+node',
      desc: '学校餐饮后台',
      status: 1
    }]
  },
  mutations: {
    offAlert(state) {
      state.alert = false
    },
    onAlert(state, b) {
      state.alertMessage = b
      state.alert = !state.alert
    },
    turnPage(state, tag) {
      this.commit('onAlert', '0')
      /*       tag==0?
            tag==1? */
    }
  },
  actions: {},
  modules: {}
})

const routes = [{
    path: '/',
    component: main,
    children: [{
      path: '',
      component: () => import('../views/default.vue')
    }, {
      path: 'details',
      component: () => import('../views/details.vue')
    }, {
      path: 'about',
      component: () => import('../views/about.vue')
    }, {
      path: 'release',
      component: () => import('../views/release.vue')
    }]
  },
  {
    path: '/login',
    component: () => import('../views/login.vue')
  },
  {
    path: '/logon',
    component: () => import('../views/logon.vue')
  }
]


export const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes
})


router.beforeEach((to, from, next) => {
  next()
});