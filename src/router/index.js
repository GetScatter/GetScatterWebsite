import Vue from 'vue'
import Router from 'vue-router'

import Home from '../components/Home'
import Ridl from '../components/Ridl'
import Founders from '../components/Founders'
import Vision from '../components/Vision'
import Apps from '../components/Apps'
import BlogHome from '../components/BlogHome'
import BlogPost from '../components/BlogPost'
import vbclass from 'vue-body-class'

Vue.use( Router,vbclass )

// console.log(vbclass);

export default new Router({
  mode: 'history',
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
      path: '/blog/',
      name: 'blog-home',
      component: BlogHome
    },
    {
      path: '/blog/:slug',
      name: 'blog-post',
      component: BlogPost
    }
  ]
})