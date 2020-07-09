<template>
  <v-container class="gallery-container">
    <v-row d-flex flex-column class="mt-4 mb-4">
      <v-col v-for="(n, index) in activities" :key="index" cols=12 md=4>
      <v-card
        class="mx-auto"
        :href="n.href"
        target="_blank"
        rel="noopener noreferrer"
      >
        <v-img
          class="white--text align-end"
          height="300px"
          :src="n.src"
          :lazy-src="n.src"
          :alt="n.alt"
          :title="n.title"
        >
        <div class="dark-div">
          <v-card-title>{{n.header}}</v-card-title>
          <v-card-subtitle
            color="black"
            class="pb-0 white--text pb-2">{{$t(n.subheader)}}
          </v-card-subtitle>
        </div>
        </v-img>
      </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Activities',
  data: () => ({
    activities: [
      {
        title: 'Le Jaja de Jau',
        alt: 'jaja de jau',
        // eslint-disable-next-line global-require
        src: require('@/assets/photos/activites/jaja.jpg'),
        header: 'Le Château de Jau',
        subheader: 'nav.home',
        href: 'http://www.chateaudejau.com/grill/',
      },
      {
        title: 'Les Gorges de Gouleyrous',
        alt: 'les gorges de gouleyrous',
        // eslint-disable-next-line global-require
        src: require('@/assets/photos/activites/gorge.jpg'),
        header: 'Les Gorges de Gouleyrous',
        subheader: 'Site naturel',
        href: 'https://www.odeaanaude.eu/catalogaude2/gorges-de-gouleyrous-p-590.html?language=en',
      },
      {
        title: 'Pays Cathares',
        alt: 'pays cathares',
        // eslint-disable-next-line global-require
        src: require('@/assets/photos/activites/cathares.jpg'),
        header: 'Pays Cathares',
        subheader: 'Sites historiques',
        href: 'https://www.odeaanaude.eu/catalogaude2/gorges-de-gouleyrous-p-590.html?language=en',
      },
      {
        title: 'Musée de tautavel',
        alt: 'musée de tautavel',
        // eslint-disable-next-line global-require
        src: require('@/assets/photos/activites/musee.jpg'),
        header: 'Musée de préhistoire de Tautavel',
        subheader: 'Site culturel',
        href: 'https://www.france-voyage.com/tourism/museum-prehistory-at-tautavel-2051.htm',
      },
      {
        title: 'Languedoc-Roussillon',
        alt: 'Languedoc-Roussillon',
        // eslint-disable-next-line global-require
        src: require('@/assets/photos/activites/languedoc.jpg'),
        header: 'Le Languedoc-Roussillon',
        subheader: 'Autres activités',
        href: 'https://meinfrankreich.com/tag/languedoc-roussillon/',
      },
    ],
  }),
};
</script>
<style lang="scss" scoped>
.dark-div{
  background-color: #0000005d;
}
</style>
