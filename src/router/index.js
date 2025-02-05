import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: { showMenu: false }
  },
  {
    path: '/Formulario',
    name: 'Formulario',
    component: () => import('../views/Formulario.vue'),
    meta: { showMenu: false }
  },
  {
    path: '/Modalidade',
    name: 'Modalidade',
    component: () => import('../views/Modalidade.vue'),
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
    meta: { showFooter: false, showNavbar: false }
  },
  {
    path: '/relatorio',
    name: 'relatorio',
    component: () => import('../views/relatorio.vue'),
    meta: { showFooter: false, showNavbar: false }
  },
  {
    path: '/turmas',
    name: 'turmas',
    component: () => import('../views/turmas.vue'),
    meta: { showFooter: false, showNavbar: false }
  },
  {
    path: '/eventos',
    name: 'eventos',
    component: () => import('../views/eventos.vue'),
    meta: { showFooter: false, showNavbar: false}
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router
