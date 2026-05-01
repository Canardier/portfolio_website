import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
// import PageQuorix from '../pages/Quorix.vue'
import MentionsLegales from '../pages/MentionsLegales.vue'
import Confidentialite from '../pages/Confidentialite.vue'

const routes = [
  { path: '/', component: Home},
  { path: '/mentions-legales', component: MentionsLegales },
  { path: '/confidentialite', component: Confidentialite },
]

export default createRouter({
  history: createWebHistory(),
  routes
})
