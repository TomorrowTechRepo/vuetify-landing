import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import(/* webpackChunkName: "home" */ '@/views/home/Index'),
    },
    {
      path: '/blog',
      name: 'Blog',
      component: () => import(/* webpackChunkName: "blog" */ '@/views/blog/Index'),
    },
    {
      path: '/posts/:slug',
      name: 'Post',
      component: () => import(/* webpackChunkName: "posts" */'@/views/posts/Index'),
    },
    {
      path: '/sample-page',
      name: 'Sample',
      component: () => import(/* webpackChunkName: "sample" */'@/views/sample/Index'),
    },
  ],
})

// Bootstrap Analytics
// Set in .env
// https://github.com/MatteoGabriele/vue-analytics
if (process.env.VUE_APP_GOOGLE_ANALYTICS) {
  Vue.use(require('vue-analytics').default, {
    id: process.env.VUE_APP_GOOGLE_ANALYTICS,
    router,
    autoTracking: {
      page: process.env.NODE_ENV !== 'development',
    },
  })
}

export default router
