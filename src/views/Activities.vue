<template>
  <v-container class="gallery-container">
    <v-row class="d-flex flex-row mt-4 mb-4">
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
          :lazy-src="require('@/assets/photos/placeholder.png')"
          :alt="n.alt"
          :title="n.title"
        >
        <template v-slot:placeholder>
        <v-row
          class="fill-height ma-0"
          align="center"
          justify="center"
        >
          <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
        </v-row>
      </template>
        <div class="dark-div">
          <v-card-title>{{$t(n.header)}}</v-card-title>
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
        header: 'activities.header1',
        subheader: 'activities.subheader1',
        href: 'http://www.chateaudejau.com/grill/',
      },
      {
        title: 'Les Gorges de Gouleyrous',
        alt: 'les gorges de gouleyrous',
        // eslint-disable-next-line global-require
        src: require('@/assets/photos/activites/gorge.jpg'),
        header: 'activities.header2',
        subheader: 'activities.subheader2',
        href: 'https://www.odeaanaude.eu/catalogaude2/gorges-de-gouleyrous-p-590.html?language=en',
      },
      {
        title: 'Pays Cathares',
        alt: 'pays cathares',
        // eslint-disable-next-line global-require
        src: require('@/assets/photos/activites/cathares.jpg'),
        header: 'activities.header3',
        subheader: 'activities.subheader3',
        href: 'https://www.payscathare.org/les-sites', // to chqnge
      },
      {
        title: 'Musée de tautavel',
        alt: 'musée de tautavel',
        // eslint-disable-next-line global-require
        src: require('@/assets/photos/activites/musee.jpg'),
        header: 'activities.header4',
        subheader: 'activities.subheader4',
        href: 'https://www.france-voyage.com/tourism/museum-prehistory-at-tautavel-2051.htm',
      },
      {
        title: 'Languedoc-Roussillon',
        alt: 'Languedoc-Roussillon',
        // eslint-disable-next-line global-require
        src: require('@/assets/photos/activites/languedoc.jpg'),
        header: 'activities.header5',
        subheader: 'activities.subheader5',
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
