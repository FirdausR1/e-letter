const routes = [
  { 
    path: '/', 
    component: () => import('@/pages/login.vue'),

    children: [
      {
        path: 'home',
        alias: '',
        name: 'Home',
        component: () => import('@/pages/Home.vue')
      },
      {
        path: 'profil',
        alias: '',
        name: 'profil',
        component: () => import('@/pages/Profil.vue')
      },
      {
        path: 'pengajuan',
        alias: '',
        name: 'pengajuan surat',
        component: () => import('@/pages/Pengajuan.vue')
      },

      {
        path: 'riwayat',
        alias: '',
        name: 'riwayat surat',
        component: () => import('@/pages/Riwayat.vue')
      },
      {
        path: 'settings',
        alias: '',
        name: 'Setting',
        component: () => import('@/pages/Setting.vue')
      }
    ]
  },
  
]

export default routes