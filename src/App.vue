<template>
  <v-app>
    <v-app-bar
      flat
      app
      :color="topBarColor"
      absolute
    >
      <v-app-bar-nav-icon
        color="white"
        class="hidden-md-and-up"
        @click="drawer = true">
      </v-app-bar-nav-icon>
      <LocalizedLink class="hidden-sm-and-down" to="/">
        <v-btn
          target="_blank"
          text
          class="relative-position"
        >
          <span class="white--text">{{$t('nav.home')}}</span>
          <div class="active-marker" v-if="$route.name === 'Home'"></div>
        </v-btn>
      </LocalizedLink>
      <v-spacer></v-spacer>
      <LocalizedLink class="hidden-sm-and-down" to="/maison">
        <v-btn
          target="_blank"
          text
        >
          <span class="white--text">{{$t('nav.house')}}</span>
          <div class="active-marker" v-if="$route.name === 'maison'"></div>
        </v-btn>
      </LocalizedLink>
      <LocalizedLink class="hidden-sm-and-down" to="/paysages">
        <v-btn
          target="_blank"
          text
        >
          <span class="white--text">{{$t('nav.landscapes')}}</span>
          <div class="active-marker" v-if="$route.name === 'paysages'"></div>
        </v-btn>
      </LocalizedLink>
      <LocalizedLink class="hidden-sm-and-down" to="/activites">
        <v-btn
          target="_blank"
          text
        >
          <span class="white--text">{{$t('nav.activities')}}</span>
          <div class="active-marker" v-if="$route.name === 'activites'"></div>
        </v-btn>
      </LocalizedLink>
      <LocalizedLink class="hidden-sm-and-down" to="/#contact">
        <v-btn
          @click="$vuetify.goTo('#scrollToContact', {
          duration: 700,
          offset: 0,
          easing: 'easeInOutCubic',
        })"
          target="_blank"
          text
        >
          <span class="mr-2 white--text">{{$t('nav.contact')}}</span>
        </v-btn>
      </LocalizedLink>
      <LocaleSwitcher/>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <LocalizedLink to="/">
            <v-list-item>
              <v-list-item-title>{{$t('nav.home')}}</v-list-item-title>
            </v-list-item>
          </LocalizedLink>

          <LocalizedLink to="maison">
            <v-list-item>
              <v-list-item-title>{{$t('nav.house')}}</v-list-item-title>
            </v-list-item>
          </LocalizedLink>

          <LocalizedLink to="paysages">
            <v-list-item>
              <v-list-item-title>{{$t('nav.landscapes')}}</v-list-item-title>
            </v-list-item>
          </LocalizedLink>

          <LocalizedLink to="activites">
            <v-list-item>
              <v-list-item-title>{{$t('nav.activities')}}</v-list-item-title>
            </v-list-item>
          </LocalizedLink>

          <LocalizedLink to="/#contact">
            <v-list-item @click="scrollToContact">
              <v-list-item-title>{{$t('nav.contact')}}</v-list-item-title>
            </v-list-item>
          </LocalizedLink>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-main class="main">
      <router-view/>
    </v-main>
    <v-footer
    color="black"
    padless
  >
    <v-row
      justify="center"
      no-gutters
      class="flex-wrap"
    >
      <LocalizedLink to="/">
        <v-btn
          target="_blank"
          text
        >
          <span class="mr-2 white--text">{{$t('nav.home')}}</span>
        </v-btn>
      </LocalizedLink>
      <LocalizedLink to="/maison">
        <v-btn
          target="_blank"
          text
        >
          <span class="mr-2 white--text">{{$t('nav.house')}}</span>
        </v-btn>
      </LocalizedLink>
      <LocalizedLink to="/paysages">
        <v-btn
          target="_blank"
          text
        >
          <span class="mr-2 white--text">{{$t('nav.landscapes')}}</span>
        </v-btn>
      </LocalizedLink>
      <LocalizedLink to="/activites">
        <v-btn
          target="_blank"
          text
        >
          <span class="mr-2 white--text">{{$t('nav.activities')}}</span>
        </v-btn>
      </LocalizedLink>
      <router-link to="/#contact">
        <v-btn
          @click="$vuetify.goTo('#scrollToContact', {
          duration: 700,
          offset: 0,
          easing: 'easeInOutCubic',
        })"
          target="_blank"
          text
        >
          <span class="mr-2 white--text">{{$t('nav.contact')}}</span>
        </v-btn>
      </router-link>
      <v-col
        class="black py-4 text-center white--text"
        cols="12"
      >
        &#169; 2020 - <router-link to="disclaimer">
          <a style="color:white;">{{$t('nav.legal')}}</a></router-link>
      </v-col>
    </v-row>
  </v-footer>
  </v-app>
</template>

<script>
import '@/styles/main.scss';
import LocaleSwitcher from '@/components/LocaleSwitcher.vue';
import LocalizedLink from '@/components/LocalizedLink.vue';

export default {
  name: 'App',

  components: {
    LocaleSwitcher,
    LocalizedLink,
  },

  data: () => ({
    drawer: false,
    langs: ['fr', 'en'],
  }),
  computed: {
    topBarColor() {
      if (this.$route.name === 'Home') {
        return '#0000003d';
      }
      return '#000000';
    },
  },
  methods: {
    scrollToContact() {
      this.drawer = false;
      this.$vuetify.goTo('#scrollToContact', {
        duration: 700,
        offset: 0,
        easing: 'easeInOutCubic',
      });
    },
    setLocale(locale) {
      this.$i18n.locale = locale;
      // console.log(locale)
      this.$router.push({ lang: locale });
      // this.hideDropdown();
    },
  },
};
</script>
<style lang="scss" scoped>
  .main {
    padding-top:0px !important;
  }
  .v-application a {
    text-decoration: none !important;
}
.router-link-active{
  position: relative;
}
.active-marker{
  background-color: white ;
  width:100%;
  height: 2px;
  position: absolute;
  bottom:-10px;
}
</style>
