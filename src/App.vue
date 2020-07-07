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
      <router-link class="hidden-sm-and-down" to="/">
        <v-btn
          target="_blank"
          text
          class="relative-position"
        >
          <span class="white--text">Accueil</span>
          <div class="active-marker" v-if="$route.name === 'Home'"></div>
        </v-btn>
      </router-link>
      <v-spacer></v-spacer>
      <router-link class="hidden-sm-and-down" to="maison">
        <v-btn
          target="_blank"
          text
        >
          <span class="white--text">La Maison</span>
          <div class="active-marker" v-if="$route.name === 'maison'"></div>
        </v-btn>
      </router-link>
      <router-link class="hidden-sm-and-down" to="paysages">
        <v-btn
          target="_blank"
          text
        >
          <span class="white--text">Paysages</span>
          <div class="active-marker" v-if="$route.name === 'paysages'"></div>
        </v-btn>
      </router-link>
      <router-link class="hidden-sm-and-down" to="activites">
        <v-btn
          target="_blank"
          text
        >
          <span class="white--text">Activit&#xC9;s</span>
          <div class="active-marker" v-if="$route.name === 'activites'"></div>
        </v-btn>
      </router-link>
      <router-link class="hidden-sm-and-down" to="/#contact">
        <v-btn
          @click="$vuetify.goTo('#scrollToContact', {
          duration: 700,
          offset: 0,
          easing: 'easeInOutCubic',
        })"
          target="_blank"
          text
        >
          <span class="mr-2 white--text">Contact</span>
        </v-btn>
      </router-link>
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
          <router-link to="/">
            <v-list-item>
              <v-list-item-title>Accueil</v-list-item-title>
            </v-list-item>
          </router-link>

          <router-link to="maison">
            <v-list-item>
              <v-list-item-title>La Maison</v-list-item-title>
            </v-list-item>
          </router-link>

          <router-link to="paysages">
            <v-list-item>
              <v-list-item-title>Paysages</v-list-item-title>
            </v-list-item>
          </router-link>

          <router-link to="activites">
            <v-list-item>
              <v-list-item-title>Activités</v-list-item-title>
            </v-list-item>
          </router-link>

          <router-link to="/#contact">
            <v-list-item @click="scrollToContact">
              <v-list-item-title>Contact</v-list-item-title>
            </v-list-item>
          </router-link>
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
      <router-link to="/">
        <v-btn
          target="_blank"
          text
        >
          <span class="mr-2 white--text">Accueil</span>
        </v-btn>
      </router-link>
      <router-link to="maison">
        <v-btn
          target="_blank"
          text
        >
          <span class="mr-2 white--text">La Maison</span>
        </v-btn>
      </router-link>
      <router-link to="paysages">
        <v-btn
          target="_blank"
          text
        >
          <span class="mr-2 white--text">Paysages</span>
        </v-btn>
      </router-link>
      <router-link to="activites">
        <v-btn
          target="_blank"
          text
        >
          <span class="mr-2 white--text">Activit&#xC9;s</span>
        </v-btn>
      </router-link>
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
          <span class="mr-2 white--text">Contact</span>
        </v-btn>
      </router-link>
      <v-col
        class="black py-4 text-center white--text"
        cols="12"
      >
        &#169; 2020 - <router-link to="disclaimer">
          <a style="color:white;">Mentions légales</a></router-link>
      </v-col>
    </v-row>
  </v-footer>
  </v-app>
</template>

<script>
import '@/styles/main.scss';

export default {
  name: 'App',

  components: {
  },

  data: () => ({
    drawer: false,
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
