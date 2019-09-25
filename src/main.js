// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import axios from 'axios'; //主要Ajax套件
import VueAxios from 'vue-axios'; //將他轉為Vue的套件
import 'bootstrap'; //bootstrap 必須仰賴 jQuery 、 popper才能運行
import 'jquery';



Vue.use(VueAxios, axios) // 必須要在 Vue 設定的進入點(main.js)內使用，外部插件要使用的話都需要用Vue.use
Vue.config.productionTip = false;

axios.defaults.withCredentials = true; //每次發送API時，將sectionCookie 存入 Cookie內

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
})

router.beforeEach((to, from, next) => {  //切換頁面觸發router.beforeEach()
  console.log('to',to,'from',from,'next',next);

  if(to.meta.requiresAuth){   //判斷假如已經登入過，就可以直接貼login網址進入
    const api = `${process.env.APIPATH}/api/user/check`;
    axios.post(api).then(response => {
      console.log(response.data);
      if(response.data.success){
          // vm.$router.push('/');
          next();
      }else{
        next({
          path:'/login'
        });
      }
    });
    console.log('這裡需要驗證');
  }else{
    next(); //避免被導航守衛擋下來
  }

})


