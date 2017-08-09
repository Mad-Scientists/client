import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import SignUp from '@/components/SignUp';
import Login from '@/components/Login';
import Profile from '@/components/Profile';
import auth from '../lib/auth';

Vue.use(Router);

function requireAuth(to, from, next) {
  if (!auth.getCurrentUser()) {
    next({
      path: '/login'
    });
  } else {
    next();
  }
}

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
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile,
      beforeEnter: requireAuth
    }
  ],
});
