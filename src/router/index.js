import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GameView from'../views/GameView.vue'
import Ranking from '../views/Ranking.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
    },
    {
      path: '/jugar',
      name: 'GameView',
      component:GameView,
    },{
        path:'/ranking',
        name:'Ranking',
        component:Ranking
    }
  ],
})

export default router
