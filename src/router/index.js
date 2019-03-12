import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/page/Home'
import Index from '@/components/page/Index';
import List from "@/components/page/List";
import typenews from "@/components/page/typenews";
import Video from "@/components/page/Video"
import dy from "@/components/page/dy";
import user from "@/components/page/user";
import login from "@/components/page/login"
import register from "@/components/page/register"
Vue.use(Router)
export default new Router({
  routes: [{
      path: '/',
      redirect: {
        "name": "home"
      }
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      redirect: {
        "name": "index"
      },
      children: [{
          path: '/home/index',
          name: 'index',
          component: Index,
          redirect:{"name":"List"},
          children:[
            {
              path:"/home/index/List",
              name:"List",
              component:List
            },
            {
              path:"/home/index/:type",
              name:"typenews",
              component:typenews
            }
          ]
        },
        {
          path: "/home/video",
          name: "name",
          component: Video

        },
        {
          path: "/home/sub",
          name: "dy",
          component: dy
        }
      ]
    },
    {
      path: "/user",
      name: "user",
      component: user
    },
    {
      path: "/login",
      name: "login",
      component: login
    },
    {
      path: "/register",
      name: "register",
      component: register
    }
  ]
})
