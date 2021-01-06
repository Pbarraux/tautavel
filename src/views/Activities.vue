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
        href: 'https://www.chateaudejau.com/',
      },
      {
        title: 'Degustation de Vin de la region de Tautavel',
        alt: 'degustation de vins',
        // eslint-disable-next-line global-require
        src: require('@/assets/photos/activites/vins.jpg'),
        header: 'activities.header6',
        subheader: 'activities.subheader6',
        href: 'https://www.terresplurielles.com/',
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
        href: 'https://www.payscathare.org/',
      },
      {
        title: 'Hiking dans les Pyrénées Orientales',
        alt: 'hiking dans les Pyrénées Orientales',
        // eslint-disable-next-line global-require
        src: require('@/assets/photos/activites/hiking.jpg'),
        header: 'activities.header13',
        subheader: 'activities.subheader10',
        href: 'https://www.outdooractive.com/en/hiking-routes/pyrenees-orientales/hiking-in-pyrenees-orientales/2510720/#gref',
      },
      {
        title: 'Plages',
        alt: 'plages',
        // eslint-disable-next-line global-require
        src: require('@/assets/photos/activites/plage.jpg'),
        header: 'activities.header7',
        subheader: 'activities.subheader7',
        href: 'https://www.partir.com/Perpignan/carte-plages.html',
      },
      {
        title: 'Kite surf',
        alt: 'kite surd',
        // eslint-disable-next-line global-require
        src: require('@/assets/photos/activites/kite.jpg'),
        header: 'activities.header8',
        subheader: 'activities.subheader8',
        href: 'https://www.we-love-kite.com/',
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
        title: 'Perpignan',
        alt: 'perpignan',
        // eslint-disable-next-line global-require
        src: require('@/assets/photos/activites/perpignan.jpg'),
        header: 'activities.header9',
        subheader: 'activities.subheader9',
        href: 'https://meinfrankreich.com/perpignan/',
      },
      {
        title: 'Carcassonne',
        alt: 'carcassonne',
        // eslint-disable-next-line global-require
        src: require('@/assets/photos/activites/carcassonne.jpg'),
        header: 'activities.header10',
        subheader: 'activities.subheader9',
        href: 'https://meinfrankreich.com/carcassonne_drehort/',
      },
      {
        title: 'Narbonne',
        alt: 'narbonne',
        // eslint-disable-next-line global-require
        src: require('@/assets/photos/activites/narbonne.jpg'),
        header: 'activities.header11',
        subheader: 'activities.subheader9',
        href: 'https://meinfrankreich.com/narbonne/',
      },
      {
        title: 'Collioure',
        alt: 'collioure',
        // eslint-disable-next-line global-require
        src: require('@/assets/photos/activites/collioure.jpg'),
        header: 'activities.header12',
        subheader: 'activities.subheader9',
        href: 'https://meinfrankreich.com/collioure/',
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
