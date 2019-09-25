//放路由的配置檔
import Vue from 'vue';
import VueRouter from 'vue-router';
//官方的元件
// import HelloWorld from '@/components/HelloWorld';
import Login from '@/components/pages/Login';
import Dashboard from '@/components/Dashboard';
import Products from '@/components/pages/Products';

//自訂的分頁元件

Vue.use(VueRouter); //會在 Vue 中增加<router-view/> 與 <router-link/> 這兩個組件
//啟用它

export default new VueRouter({
    routes:[
    {
        path:'*',    //*代表任意值
        redirect:'/login' //使用 redirect 是將用戶導回正確的路徑 ，避免用戶進入不存在的頁面
      
    },
    // {
    //  name:'HelloWorld',//元件呈現的名稱
    //  path:'/',//對應的虛擬路徑
    //  component:HelloWorld,//對應的元件
    //  meta: { requiresAuth: true }
    // },
    {
        name:'Login',//元件呈現的名稱
        path:'/login',//對應的虛擬路徑
        component:Login,//對應的元件
    },
    {
        name:'Dashboard',//元件呈現的名稱
        path:'/dashboard',//對應的虛擬路徑
        component:Dashboard,//對應的元件
        children:[

            {
            name:'Products',//元件呈現的名稱
            path:'products',//對應的虛擬路徑
            component:Products,//對應的元件
            meta: { requiresAuth: true }
            }
        ]
        
    },
   
]
});

