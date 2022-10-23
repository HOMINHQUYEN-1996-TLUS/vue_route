import Vue from 'vue';
import Router from 'vue-router';
import Test from '../components/TestRequest.vue'
import HelloWorld from '../components/HelloWorld.vue'

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/test',
      name: 'Test',
      component: Test
    },
    {
      path: '/home',
      name: 'Home',
      component: HelloWorld
    }
  ]
});