import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'
Vue.use(VueRouter)

/*export default new Router({
  routes:[
    {path:'/', redirect:'/login'},
    {path:'/login',component:Login},
    {path:'/home',component:Home}
]
}

)
*/

const routes = [
  {path:'/', redirect:'/login'},
  {path:'/login',component:Login},
  {path:'/home',component:Home}
];

const router = new VueRouter({
  routes: routes      //注意是routes而不是routers,坑就在这里
});


//挂载路由导航守卫
router.beforeEach((to,from,next)=>{
  //to将要访问的路径 。from代表从哪个路径跳转而来 。next是一个函数，表示放行，next()放行 ，next('.login')强制放行
  if(to.path === '/login') return next()
  //获取token
  const tokenStr = window.sessionStorage.getItem("token");
  if(!tokenStr) return next("/login");
  next();
})
export default router;
