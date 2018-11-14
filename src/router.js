import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Login from './views/Login.vue';
import Logout from './views/Logout.vue';
import Signup from './views/Signup.vue';
import UsersShow from './views/UsersShow.vue';
import UsersEdit from './views/UsersEdit.vue';
import ItemsIndex from './views/ItemsIndex.vue';
import ItemsShow from './views/ItemsShow.vue';
import ItemsEdit from './views/ItemsEdit.vue';
import ReviewsEdit from './views/ReviewsEdit.vue';
import ListsIndex from './views/ListsIndex.vue';
import ListsNew from './views/ListsNew.vue';
import ListsShow from './views/ListsShow.vue';


Vue.use(Router);

export default new Router({
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/login', name: 'login', component: Login},
    { path: "/logout", name: "logout", component: Logout },
    { path: '/signup', name: 'signup', component: Signup },
    { path: '/users/:id', name: 'users-show', component: UsersShow },
    { path: '/users/:id/edit', name: 'users-edit', component: UsersEdit },
    { path: '/items/:name', name: 'items-index', component: ItemsIndex },
    { path: '/items/:id', name: 'items-show', component: ItemsShow },
    { path: '/items/:id/edit', name: 'items-edit', component: ItemsEdit },
    { path: '/reviews/:id/edit', name: 'reviews-edit', component: ReviewsEdit },
    { path: '/lists/:category', name: 'lists-index', component: ListsIndex },
    { path: '/lists/new', name: 'lists-new', component: ListsNew },
    { path: '/lists/:id', name: 'lists-show', component: ListsShow }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   // component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
});
