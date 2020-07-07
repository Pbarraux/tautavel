<template>
  <v-container class="gallery-container">
    <Gallery :photos=photos></Gallery>
  </v-container>
</template>

<script>
import Gallery from '@/components/Gallery.vue';

export default {
  name: 'GalleryHome',
  components: {
    Gallery,
  },
  data: () => ({
    photos: [
      // eslint-disable-next-line global-require
      { title: 'Terrasse', alt: 'terrasse', src: require('@/assets/photos/maison/terasse.jpg') },
      // eslint-disable-next-line global-require
      { title: 'Jardin', alt: 'jardin', src: require('@/assets/photos/maison/jardin.jpg') },
      // eslint-disable-next-line global-require
      { title: 'Piscine', alt: 'piscine', src: require('@/assets/photos/maison/pool.jpg') },
      // eslint-disable-next-line global-require
      { title: 'Jardin', alt: 'Jardin', src: require('@/assets/photos/maison/2.jpg') },
      // eslint-disable-next-line global-require
      { title: 'Jardin au crépuscule', alt: 'jardin-crépuscule', src: require('@/assets/photos/maison/3.jpg') },
      // eslint-disable-next-line global-require
      { title: 'Fleurs', alt: 'fleurs', src: require('@/assets/photos/maison/6.jpg') },
      // eslint-disable-next-line global-require
      { title: 'Jardin', alt: 'Jardin', src: require('@/assets/photos/maison/7.jpg') },
      // eslint-disable-next-line global-require
      { title: 'Vignes', alt: 'vignes', src: require('@/assets/photos/maison/8.jpg') },
      // eslint-disable-next-line global-require
      { title: 'Jardin', alt: 'Jardin', src: require('@/assets/photos/maison/9.jpg') },
      // eslint-disable-next-line global-require
      { title: 'Jardin', alt: 'Jardin', src: require('@/assets/photos/maison/10.jpg') },
      // eslint-disable-next-line global-require
      { title: 'Oranger', alt: 'oranger', src: require('@/assets/photos/maison/11.jpg') },
      // eslint-disable-next-line global-require
      { title: 'Piscine', alt: 'piscine', src: require('@/assets/photos/maison/12.jpg') },
      // eslint-disable-next-line global-require
      { title: 'Déjeuner', alt: 'déjeuner', src: require('@/assets/photos/maison/14.jpg') },
    ],
  }),
};
</script>
<style lang="scss" scoped>

</style>
