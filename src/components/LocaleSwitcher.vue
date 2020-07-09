<template>
  <div class="locale-switcher">
    <v-btn
      class="mr-2"
      v-for="(locale, index) in locales"
      :key="index"
      @click.prevent="changeLocale(locale.code)"
      icon>
      <v-img :src="locale.flagSrc" width="32" height="32" class="mr-3"/>
    </v-btn>
  </div>
</template>

<script>

export default {
  data: () => ({
    // eslint-disable-next-line global-require
    locales: [{ code: 'fr', name: 'Français', flagSrc: require('@/assets/flags/fr.svg') }, { code: 'en', name: 'English', flagSrc: require('@/assets/flags/en.svg') }],
  }),
  methods: {
    changeLocale(locale) {
      this.$i18n.locale = locale;
      if (this.$route.name !== 'Home') {
        this.$router.push(`/${locale}/${this.$route.name}`);
      } else {
        this.$router.push(`/${locale}/`);
      }
    },
  },
};
</script>
