import Vue from 'vue'
import Router from 'vue-router'
import discoverMovieDB from '@/components/discoverMovieDB'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'discoverMovies',
      component: discoverMovieDB
    }
  ]
})
