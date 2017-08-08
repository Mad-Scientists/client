import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import SignUp from '@/components/SignUp';
import Profile from '@/components/Profile';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUp,
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile,
    }
  ],
});
