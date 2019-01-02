import Vue from 'vue'
import Router from 'vue-router'

import Home from '../components/Home'
import Ridl from '../components/Ridl'
import Founders from '../components/Founders'
import Vision from '../components/Vision'
import Apps from '../components/Apps'
import Press from '../components/Press'
import vbclass from 'vue-body-class'

Vue.use( Router,vbclass )

console.log(vbclass);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/ridl',
      name: 'Ridl',
      meta: { bodyClass: 'ridl' },
      component: Ridl
    },
    {
      path: '/founders',
      name: 'Founders',
      component: Founders
    },
    {
      path: '/vision',
      name: 'Vision',
      component: Vision
    },
    {
      path: '/apps',
      name: 'Apps',
      component: Apps
    },
    {
      path: '/press',
      name: 'Press',
      component: Press
    }
  ]
})