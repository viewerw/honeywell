import Vue from 'vue'
import Router from 'vue-router'
import Login from '../pages/login'
import AuthRouterView from '../pages/index/routerView'
import Page401 from '../pages/error/401'
import Index from '../pages/index'
import ShalterRouterView from '../pages/shalter/routerView'
import ShalterDetail from '../pages/shalter/detail'
import ShalterList from '../pages/shalter/list'




Vue.use(Router)

const router =  new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path : '/',
      name:'auth-routerView',
      component : AuthRouterView,
      redirect:'index',
      children:[{
        path : '/index',
        name:'index',
        component : Index
      },
      {
        path:"/shalter",
        name:"shalter",
        redirect:'shalter/list',
        component: ShalterRouterView,
        children:[{
          path:'list',
          name:'shalterList',
          component:ShalterList
        },{
          path:'detail',
          name:'shalterDetail',
          component:ShalterDetail
        }]
      },{
        path:'/401',
        name:'401',
        component:Page401,
      }]
    }
  ]
});

export default router;
