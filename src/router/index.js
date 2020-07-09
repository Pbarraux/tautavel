import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import NotFound from '../views/404.vue';
import GalleryHome from '../views/GalleryHome.vue';
import GalleryLandscapes from '../views/GalleryLandscapes.vue';
import Activities from '../views/Activities.vue';
import i18n from '../i18n';

Vue.use(VueRouter);


const routes = [
  {
    path: '/',
    redirect: `/${i18n.locale}`,
  },
  {
    path: '/:lang',
    component: {
      render(c) { return c('router-view'); },
    },
    children: [
      {
        path: '/',
        name: 'Home',
        component: Home,
      },
      {
        path: '404',
        component: NotFound,
      },
      {
        path: 'maison',
        name: 'maison',
        component: GalleryHome,
      },
      {
        path: 'paysages',
        name: 'paysages',
        component: GalleryLandscapes,
      },
      {
        path: 'activites',
        name: 'activites',
        component: Activities,
      },
      {
        path: '*',
        redirect: '404',
      },
    ],
  },
];
const scrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) {
    // savedPosition is only available for popstate navigations.
    return savedPosition;
  }
  const position = {};

  // scroll to anchor by returning the selector
  if (to.hash) {
    position.selector = to.hash;

    // specify offset of the element
    if (to.hash === '#anchor2') {
      position.offset = { y: 100 };
    }

    // bypass #1number check
    if (/^#\d/.test(to.hash) || document.querySelector(to.hash)) {
      return position;
    }

    // if the returned position is falsy or an empty object,
    // will retain current scroll position.
    return false;
  }

  return new Promise((resolve) => {
    // check if any matched route config has meta that requires scrolling to top
    if (to.matched.some((m) => m.meta.scrollToTop)) {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      position.x = 0;
      position.y = 0;
    }

    // wait for the out transition to complete (if necessary)
    this.app.$root.$once('triggerScroll', () => {
      // if the resolved position is falsy or an empty object,
      // will retain current scroll position.
      resolve(position);
    });
  });
};


const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior,
});

export default router;
