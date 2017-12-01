import Vue from 'vue'
import Router from 'vue-router'
import Home from '../page/home.vue'
import Admin from '../page/admin.vue'
import userIndex from '../components/cUserHome.vue'
import userAbout from '../components/cUserAbout.vue'
import dashboardHome from '../components/cAdminHome.vue'
import dashboardSettings from '../components/cAdminSettings.vue'

Vue.use(Router)

export const router = new Router ({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home,
      children: [
        {
          path: '',
          name: 'index',
          component: userIndex
        },
        {
          path: '/about',
          name: 'about',
          component: userAbout
        }
      ]
    },
    {
      path: '/admin',
      component: Admin,
      children: [
        {
          path: '',
          name: 'admin',
          component: dashboardHome
        },
        {
          path: '/admin/settings',
          name: 'adminSettings',
          component: dashboardSettings
        }
      ]
    }
  ]
})
