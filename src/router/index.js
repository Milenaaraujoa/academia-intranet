import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Modalidade from '@/views/Modalidade.vue'
import Formulario from '@/views/Formulario.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { showMenu: false }
  },
  {
    path: '/Formulario',
    name: 'Formulario',
    component: Formulario,
    meta: { showMenu: false }
  },
  {
    path: '/Modalidade',
    name: 'Modalidade',
    component: Modalidade,
    meta: { showMenu: false }
  },
  {
    path: '/login_user',
    name: 'login_user',
    component: () => import('../views/login_user.vue'),
    meta: { showFooter: false, showNavbar: false, showMenu: false }
  },
  {
    path: '/redef_senha',
    name: 'redef_senha',
    component: () => import('../views/redef_senha.vue'),
    meta: { showFooter: false, showNavbar: false, showMenu: false }
  },
  {
    path: '/senha',
    name: 'senha',
    component: () => import('../views/senha.vue'),
    meta: { showFooter: false, showNavbar: false, showMenu: false }
  },
  {
    path: '/adm_dashboard',
    name: 'adm_dashboard',
    component: () => import('../views/adm_dashboard.vue'),
    meta: { showFooter: false, showNavbar: false, showMenu: false }
  },
  {
    path: '/relatorio',
    name: 'relatorio',
    component: () => import('../views/relatorio.vue'),
    meta: { showFooter: false, showNavbar: false, showMenu: false }
  },
  {
    path: '/turmas',
    name: 'turmas',
    component: () => import('../views/turmas.vue'),
    meta: { showFooter: false, showNavbar: false, showMenu: false }
  },
  {
    path: '/eventos',
    name: 'eventos',
    component: () => import('../views/eventos.vue'),
    meta: { showFooter: false, showNavbar: false, showMenu: false }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
