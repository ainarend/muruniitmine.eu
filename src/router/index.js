import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'avaleht',
    component: () => import('../views/AvalehtView.vue'),
    meta: {
      title: 'MuruNiitmine.eu – Professionaalne muruniitmine Tartus ja Lõuna-Eestis',
      description: 'MuruNiitmine.eu – professionaalne muruniitmine, trimmerdamine, hekkide pügamine ja haljastustööd Tartus, Tartumaal ja Lõuna-Eestis. Helista: 55 986 002.',
    },
  },
  {
    path: '/meist',
    name: 'meist',
    component: () => import('../views/MeistView.vue'),
    meta: {
      title: 'Meist – MuruNiitmine.eu',
      description: 'MuruNiitmine.eu meeskond – professionaalsed haljastustööd Tartus ja Lõuna-Eestis juba kaheksandat aastat.',
    },
  },
  {
    path: '/hinnakiri',
    name: 'hinnakiri',
    component: () => import('../views/HinnakiriView.vue'),
    meta: {
      title: 'Hinnakiri – MuruNiitmine.eu',
      description: 'MuruNiitmine.eu hinnakiri – muruniitmine käsiniidukiga 15€/h, murutraktoriga 25€/h, trimmerdamine 20€/h. Soodsad hinnad Tartus.',
    },
  },
  {
    path: '/teenused',
    name: 'teenused',
    component: () => import('../views/TeenusedView.vue'),
    meta: {
      title: 'Teenused – MuruNiitmine.eu',
      description: 'Muruniitmine, trimmerdamine, hekkide pügamine, puude lõikamine, võsalõikus, aedade ehitus ja tänavakivide paigaldus Tartus.',
    },
  },
  {
    path: '/kontakt',
    name: 'kontakt',
    component: () => import('../views/KontaktView.vue'),
    meta: {
      title: 'Kontakt – MuruNiitmine.eu',
      description: 'Võtke meiega ühendust: telefon 55 986 002, e-mail info@muruniitmine.eu. Tellimusi võetakse vastu kella 8–22.',
    },
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/',
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

router.afterEach((to) => {
  document.title = to.meta.title || 'MuruNiitmine.eu'
  const desc = document.querySelector('meta[name="description"]')
  if (desc && to.meta.description) {
    desc.setAttribute('content', to.meta.description)
  }
})

export default router
