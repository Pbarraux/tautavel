<template>
  <v-container class="gallery-container">
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
      { title: 'Terrasse', alt: 'terrasse', src: require('@/assets/photos/paysages/tautavel.jpg') },
      // eslint-disable-next-line global-require
      { title: 'Jardin', alt: 'jardin', src: require('@/assets/photos/paysages/1.jpg') },
      // eslint-disable-next-line global-require
      { title: 'Jardin', alt: 'jardin', src: require('@/assets/photos/paysages/4.jpg') },
      // eslint-disable-next-line global-require
      { title: 'Jardin', alt: 'jardin', src: require('@/assets/photos/paysages/tour.jpg') },
      // eslint-disable-next-line global-require
      { title: 'Jardin', alt: 'jardin', src: require('@/assets/photos/paysages/5.jpg') },
      // eslint-disable-next-line global-require
      { title: 'Jardin', alt: 'jardin', src: require('@/assets/photos/paysages/gorge.jpg') },
      // eslint-disable-next-line global-require
      { title: 'Jardin', alt: 'jardin', src: require('@/assets/photos/paysages/2.jpg') },
      // eslint-disable-next-line global-require
      { title: 'Jardin', alt: 'jardin', src: require('@/assets/photos/paysages/3.jpg') },
      // eslint-disable-next-line global-require
      { title: 'Jardin', alt: 'jardin', src: require('@/assets/photos/paysages/6.jpg') },
    ],
  }),
};
</script>
<style lang="scss" scoped>

</style>
