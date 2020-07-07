<template>
  <v-container class="notFound">
    <v-row d-flex flex-column class="mt-12">
      <v-col cols=12 class="text-center">
        <div class="text-h1">404</div>
      </v-col>
      <v-col cols=12 class="text-center">
        <p class="text-h4">La page que vous recherchez semble introuvable.</p>
      </v-col>
      <v-col cols=12 class="text-center">
        <router-link to="/"><a class="text-h4">Accueil</a></router-link>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'NotFound',

  data: () => ({
  }),
};
</script>
<style lang="scss" scoped>
@media screen and (max-width: 960px) {
  .notFound {
    margin-top: 56px !important;
  }
}
@media screen and (min-width: 960px) {
  .notFound {
    margin-top: 64px !important;
  }
}
</style>
