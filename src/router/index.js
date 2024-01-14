import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TerminalView from '../views/TerminalView.vue'
import MonitoramentoView from '../views/MonitoramentoView.vue'
import CaseView from '../views/CaseView.vue'
import LoginView from '../views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/terminal',
      name: 'terminal',
      component: TerminalView
    },
    {
      path: '/monitor',
      name: 'monitor',
      component: MonitoramentoView
    },
    {
      path: '/case',
      name: 'case',
      component: CaseView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
 
  ]
})

export default router
