<template>
  <v-container>
    <v-row d-flex flex-row>
      <v-col v-for="(n, index) in photos" :key="index" cols=12 sm=12 md=6 lg=4>
        <ExpandableImage :src="n.src" :lazy-src="n.src" :alt="n.alt"></ExpandableImage>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ExpandableImage from '@/components/ExpandableImage.vue';

export default {
  name: 'Gallery',
  components: {
    ExpandableImage,
  },
  props: {
    photos: {
      type: Array,
    },
  },
  data: () => ({
  }),
};
</script>
<style lang="scss" scoped>

</style>
