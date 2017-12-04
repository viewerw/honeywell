import Vue from 'vue'
import Router from 'vue-router'

import Login from '../pages/login'
import Index from '../pages/index'




Vue.use(Router)

const router =  new Router({
  routes: [
    {
      path: '/',
      redirect:{name:'Login'}
      
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      
    },
    {
    	path:'/index',
    	name:'Index',
    	component: Index,
    	children:[
    		{
          path:'shalter',
          component:require('../pages/shalter')
        }
    	]
    },
    
  ]
});

export default router;
