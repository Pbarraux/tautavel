/* eslint-disable max-len */
<template>
  <v-container class="gallery-container text-h6">
    <h2 class="text-h4 mb-10 mt-8">
      {{$t('homedesc.title')}}
    </h2>
    <p>
      {{$t('homedesc.a')}}
    </p>
    <p>
      {{$t('homedesc.b')}}
    </p>
    <p>
      {{$t('homedesc.c')}}
    </p>
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
      { title: 'Piscine', alt: 'piscine', src: require('@/assets/photos/maison/pool.jpg') },
      // eslint-disable-next-line global-require
      { title: 'Jardin', alt: 'jardin', src: require('@/assets/photos/maison/9.jpg') },
      // eslint-disable-next-line global-require
      { title: 'Salon', alt: 'salon', src: require('@/assets/photos/maison/17.jpg') },
      // eslint-disable-next-line global-require
      { title: 'Salon', alt: 'salon', src: require('@/assets/photos/maison/18.jpg') },
      // eslint-disable-next-line global-require
      { title: 'Salon', alt: 'salon', src: require('@/assets/photos/maison/18-1.jpg') },
      // eslint-disable-next-line global-require
      { title: 'Chambre', alt: 'chambre', src: require('@/assets/photos/maison/19.jpg') },
      // eslint-disable-next-line global-require
      { title: 'Chambre', alt: 'chambre', src: require('@/assets/photos/maison/20.jpg') },
      // eslint-disable-next-line global-require
      { title: 'Chambre', alt: 'chambre', src: require('@/assets/photos/maison/21.jpg') },
      // eslint-disable-next-line global-require
      { title: 'Salle de bain', alt: 'salle de bain', src: require('@/assets/photos/maison/22.jpg') },
      // eslint-disable-next-line global-require
      { title: 'Cuisine', alt: 'cuisine', src: require('@/assets/photos/maison/23.jpg') },
    ],
  }),
};
</script>
<style lang="scss" scoped>
@media screen and (max-width: 960px){
  .gallery-container {
    width:90% !important
  }
}
.gallery-container{
  text-align: center;
}
.text-h6{
  font-weight: 400 !important;
}
.text-h4{
  font-weight: 300 !important;
}
</style>
