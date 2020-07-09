<template>
  <router-link :to="getTo()">
    <slot />
  </router-link>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      required: true,
    },
  },
  methods: {
    getTo() {
      if (typeof this.to !== 'string') {
        return this.to;
      }
      // eslint-disable-next-line prefer-destructuring
      const locale = this.$route.params.lang;
      // we strip leading and trailing slashes and prefix
      // the current locale
      return `/${locale}/${this.to.replace(/^\/|\/$/g, '')}`;
    },
  },
};
</script>
