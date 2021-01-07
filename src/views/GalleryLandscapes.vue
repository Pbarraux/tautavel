<template>
  <v-container class="gallery-container pt-8 pb-8">
    <Gallery :photos=photos></Gallery>
  </v-container>
</template>

<script>
import Gallery from '@/components/Gallery.vue';

export default {
  name: 'GalleryLandscapes',
  components: {
    Gallery,
  },
  data: () => ({
    photos: [
      // eslint-disable-next-line global-require
      { title: 'landscape', alt: 'landscape', src: require('@/assets/photos/paysages/1.jpg') },
      // eslint-disable-next-line global-require
      { title: 'landscape', alt: 'landscape', src: require('@/assets/photos/paysages/4.jpg') },
      // eslint-disable-next-line global-require
      { title: 'landscape', alt: 'landscape', src: require('@/assets/photos/paysages/tour.jpg') },
      // eslint-disable-next-line global-require
      { title: 'landscape', alt: 'landscape', src: require('@/assets/photos/paysages/5.jpg') },
      // eslint-disable-next-line global-require
      { title: 'landscape', alt: 'landscape', src: require('@/assets/photos/paysages/gorge.jpg') },
      // eslint-disable-next-line global-require
      { title: 'landscape', alt: 'landscape', src: require('@/assets/photos/paysages/3.jpg') },
      // eslint-disable-next-line global-require
      { title: 'landscape', alt: 'landscape', src: require('@/assets/photos/paysages/6.jpg') },
    ],
  }),
};
</script>
<style lang="scss" scoped>

</style>
