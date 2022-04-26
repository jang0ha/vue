import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import DataBinding from '../views/DataBinding.vue'

const routes = [
  {
    path: '/', //브라우저에서 접속하는 url 주소를 정의
    name: 'home',
    component: HomeView // 지정된path로 들어왔을 때 보여줄 vue 컴포넌트 , 앞으로 구현할 vue 파일을 연결하고, 해당파일을 실행
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting  >> 라우트 레벨에서 코드를 분할하는 방법
    // this generates a separate chunk (about.[hash].js) for this route  >> 이 라우트에 대한 chunk파일이 분리되어 생성
    // which is lazy-loaded when the route is visited.  >> 이 라우트에 방문했을떄 지연로드 됩니다.
    // component: () => import(
      /* webpackChunkName: "about" */ 
    //   '../views/AboutView.vue'
    // )
    component: AboutView
  },
  {
    path: '/databinding',
    name: 'DataBinding',
    // route level code-splitting  >> 라우트 레벨에서 코드를 분할하는 방법
    // this generates a separate chunk (about.[hash].js) for this route  >> 이 라우트에 대한 chunk파일이 분리되어 생성
    // which is lazy-loaded when the route is visited.  >> 이 라우트에 방문했을떄 지연로드 됩니다.
    component:DataBinding
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
