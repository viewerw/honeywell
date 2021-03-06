import Vue from 'vue'
import Router from 'vue-router'
import Login from '../pages/login'
import AuthRouterView from '../pages/index/routerView'
import Page401 from '../pages/error/401'
import Index from '../pages/index'
import ShalterRouterView from '../pages/shalter/routerView'
import ShalterDetail from '../pages/shalter/detail'
import ShalterList from '../pages/shalter/list'
import FieldRouterView from '../pages/field/routerView'
import FieldDetail from '../pages/field/detail'
import FieldTree from '../pages/field/orgTree'
import UserRouterView from '../pages/user/routerView'
import UserList from '../pages/user/list'
import waterRouterView from '../pages/watering/routerView'
import waterMap from '../pages/watering/map'

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
          path:"/field",
          name:"field",
          component: FieldRouterView,
          children:[{
            path:'detail',
            name:'fieldDetail',
            component:FieldDetail
          },{
            path:'tree',
            name:'fieldTree',
            component:FieldTree
          }]
        },{
          path:"/watering",
          name:"watering",
          component: waterRouterView,
          children:[{
            path:'map',
            name:'wateringMap',
            component:waterMap
          }]
        },{
          path:"/user",
          name:"user",
          redirect:'user/list',
          component: UserRouterView,
          children:[{
            path:'list',
            name:'userList',
            component:UserList
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
