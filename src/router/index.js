import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/Formulario',
    name: 'Formulario',
    component: () => import(/* webpackChunkName: "about" */ '../views/Formulario.vue'),
  },
  { 
    path: '/Modalidade',
    name: 'Modalidade',
    component: () => import(/* webpackChunkName: "about" */ '../views/Modalidade.vue'),
  },
  {
    path: '/login_user',
    name: 'login_user',
    component: () => import(/* webpackChunkName: "about" */ '../views/login_user.vue'),
    meta: {showFooter: false, showNavbar: false} 
  },
  {
    path: '/redef_senha',
    name: 'redef_senha',
    component: () => import(/* webpackChunkName: "about" */ '../views/redef_senha.vue'),
    meta: {showFooter: false, showNavbar: false} 
  },
  {
    path: '/senha',
    name: 'senha',
    component: () => import(/* webpackChunkName: "about" */ '../views/senha.vue'),
    meta: {showFooter: false, showNavbar: false}
  },
  {
    path: '/adm_dashboard',
    name: 'adm_dashboard',
    component: () => import(/* webpackChunkName: "about" */ '../views/adm_dashboard.vue'),
    meta: {showFooter: false, showNavbar: false}
  },
  {
    path: '/relatorio',
    name: 'relatorio',
    component: () => import(/* webpackChunkName: "about" */ '../views/relatorio.vue'),
    meta: {showFooter: false, showNavbar: false}
  },
  {
    path: '/turmas',
    name: 'turmas',
    component: () => import(/* webpackChunkName: "about" */ '../views/turmas.vue'),
    meta: {showFooter: false, showNavbar: false}
  },
  {
    path: '/eventos',
    name: 'eventos',
    component: () => import(/* webpackChunkName: "about" */ '../views/eventos.vue'),
    meta: {showFooter: false, showNavbar: false}
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
