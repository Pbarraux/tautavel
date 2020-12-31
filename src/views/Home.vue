<template>
 <v-container
  fluid
  pa-0
>
  <v-carousel
    v-model="model"
    :height= "viewWidth <= 1440 ? '100vh' : '100vh'"
    interval="8000"
    cycle
    hide-delimiters
    show-arrows-on-hover
  >
    <v-carousel-item
      v-for="(item,i) in carouselItems"
      :key="i"
      :src="item.src"
    >
      <div class="carousel-overlay d-flex justify-center align-center">
        <div class="w80">
          <h1 class="text-h4 text-center">
            {{$t(item.text)}}
          </h1>
        </div>
      </div>
    </v-carousel-item>
    <section @click="$vuetify.goTo('#scrollToContact', {
          duration: 700,
          offset: 0,
          easing: 'easeInOutCubic',
        })" id="section05" class="demo">
      <a><span></span>Scroll</a>
    </section>
  </v-carousel>
  <!--
  <v-row justify="space-around">
      <v-icon @click="model = 2">mdi-minus</v-icon>
      {{ model }}
      <v-icon @click="model++">mdi-plus</v-icon>
    </v-row>
  -->
    <v-container id="scrollToContact" class="mt-16">
      <v-row id="contact" class="d-flex flex-row nmargin mb-8">
        <v-col justify-center cols=12 >
         <div class="pa-2 text-h5 text-sm-h4 text-center">
             {{$t('home.main')}}
          </div>
        </v-col>
      </v-row>
      <v-row class="d-flex flex-row" align="baseline" justify="center">
        <v-col justify-center cols=12 md=4>
         <div class="pa-2 text-h6 text-sm-h6 text-center">
             <v-icon class="pin mb-2" color="black">mdi-calendar</v-icon>
             {{$t('linkwords.from')}} 01/09/2020 {{$t('linkwords.to')}} 31/12/2020
          </div>
        </v-col>
        <v-col justify-center cols=12 md=4>
         <div class="pa-2 text-h6 text-sm-h6 text-center">
             <v-icon class="pin mb-2" color="black">mdi-phone</v-icon>
             +49 152 277 63 780
          </div>
        </v-col>
        <v-col justify-center cols=12 md=4>
         <div class="pa-2 text-h6 text-sm-h6 text-center">
             <v-icon class="pin mb-2" color="black">mdi-email</v-icon>
             philippedemazieres@gmail.com
          </div>
        </v-col>
      </v-row>
      <v-row class="mt-9 d-flex flex-row">
        <v-col cols=12 md=4 class="photo-container">
          <LocalizedLink to="/maison">
            <v-img
              :src="require('@/assets/photos/maison/jardin.jpg')"
              :lazy-src="require('@/assets/photos/placeholder.png')"
              class="image"
              alt="lorem"
              width="100%"
              height="100%"
             >
              <div class="overlay">
                <div class="text uppercase">{{$t('nav.house')}}</div>
              </div>
            </v-img>
          </LocalizedLink>
        </v-col>
        <v-col cols=12 md=4 class="photo-container">
          <LocalizedLink to="/paysages">
            <v-img
              :src="require('@/assets/photos/paysages/tautavel.jpg')"
              :lazy-src="require('@/assets/photos/placeholder.png')"
              class="image"
              alt="lorem"
              width="100%"
              height="100%"
             >
               <div class="overlay">
                 <div class="text uppercase">{{$t('nav.landscapes')}}</div>
               </div>
             </v-img>
          </LocalizedLink>
        </v-col>
        <v-col cols=12 md=4 class="photo-container">
          <LocalizedLink to="/activites">
            <v-img
              :src="require('@/assets/photos/activites/jaja.jpg')"
              :lazy-src="require('@/assets/photos/placeholder.png')"
              class="image"
              alt="lorem"
              width="100%"
              height="100%"
             >
              <div class="overlay">
                <div class="text uppercase">{{$t('nav.activities')}}</div>
              </div>
            </v-img>
          </LocalizedLink>
        </v-col>
      </v-row>
      <v-row>
        <v-col d-flex justify-center xs-12>
         <div class="text-h5 text-sm-h4 text-center mt-8">
           <v-icon class="pin2 mb-2" color="black">mdi-map-marker</v-icon>
           <p>Avenue Philippe Poumies, 66720 Tautavel, France</p>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <v-container class="mb-8">
      <iframe width="100%" height="450" frameborder="0" style="border:0"
      src="https://www.google.com/maps/embed/v1/search?q=Avenue+philippe+poumies,+66720+Tautavel&key=AIzaSyD9EyxV9D5YctrE36Jn-6q5ZGVmV9PUNWw" allowfullscreen></iframe>
    </v-container>
  </v-container>
</template>

<script>
import LocalizedLink from '@/components/LocalizedLink.vue';

export default {
  name: 'Home',

  components: {
    LocalizedLink,
  },

  data: () => ({
    model: 0,
    viewWidth: window.innerWidth,
    carouselItems: [
      {
        // eslint-disable-next-line global-require
        text: 'slider.heading1',
        // eslint-disable-next-line global-require
        src: require('@/assets/photos/maison/pool.jpg'),
      },
      {
        // eslint-disable-next-line global-require
        text: 'slider.heading2',
        // eslint-disable-next-line global-require
        src: require('@/assets/photos/maison/9.jpg'),
      },
      {
        // eslint-disable-next-line global-require
        text: 'slider.heading3',
        // eslint-disable-next-line global-require
        src: require('@/assets/photos/paysages/tautavel.jpg'),
      },
      {
        // eslint-disable-next-line global-require
        text: 'slider.heading4',
        // eslint-disable-next-line global-require
        src: require('@/assets/photos/paysages/gorge.jpg'),
      },
      {
        // eslint-disable-next-line global-require
        text: 'slider.heading5',
        // eslint-disable-next-line global-require
        src: require('@/assets/photos/maison/pinard.png'),
      },
    ],
  }),
};
</script>
<style lang="scss" scoped>
  .pin {
    font-size:36px !important;
  }
  .pin2 {
    font-size:48px !important;
  }

  .photo-container {
  position: relative;
  width: 50%;
}

.image {
  display: block;
  width: 100%;
  height: auto;
}

.overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #0000005d;
  overflow: hidden;
  width: 100%;
  height: 0;
  transition: .5s ease;
}

.photo-container:hover .overlay {
  height: 100%;
}

.text {
  color: white;
  font-size: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
}
#section05 a {
  padding-top: 70px;
}
#section05 a span {
  position: absolute;
  bottom: 40px;
  left: 50%;
  width: 48px;
  height: 48px;
  margin-left: -12px;
  border-left: 4px solid #fff;
  border-bottom: 4px solid #fff;
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
  -webkit-animation: sdb05 1.5s infinite;
  animation: sdb05 1.5s infinite;
  box-sizing: border-box;
}
@-webkit-keyframes sdb05 {
  0% {
    -webkit-transform: rotate(-45deg) translate(0, 0);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    -webkit-transform: rotate(-45deg) translate(-20px, 20px);
    opacity: 0;
  }
}
@keyframes sdb05 {
  0% {
    transform: rotate(-45deg) translate(0, 0);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: rotate(-45deg) translate(-20px, 20px);
    opacity: 0;
  }
}
.nmargin{
  margin-top: -48px;
}
.carousel-overlay{
  height: 100%;
  width: 100%;
  background-color: #00000038;
}
.w80{
  width: 80%;
}
.w80 h1{
  font-weight: 300;
}
</style>
