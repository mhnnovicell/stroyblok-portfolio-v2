import { createApp, defineAsyncComponent } from 'vue';
import { StoryblokVue, apiPlugin } from '@storyblok/vue';
import VueLazyLoad from 'vue3-lazyload';
import 'aos/dist/aos.css';

import App from './App.vue';
import './index.css';
import 'flowbite';

const app = createApp(App);

app.use(StoryblokVue, {
  accessToken: 'a29ubFkrIbWWW8OC8GdKXAtt',
  bridge: process.env.NODE_ENV !== 'production' ? true : false, // optimizes by excluding the bridge on production
  use: [apiPlugin],
});

//Artikel om CDN og serving af static assets i Cloudfront, i stedet for gennem domænet - https://css-tricks.com/adding-cdn-caching-to-a-vite-build/
//Se også denne https://www.aroundcode.io/host-react-vite-app-aws-s3-cloudfront/
//disse to også https://github.com/marketplace/actions/s3-sync og https://github.com/marketplace/actions/s3-deploy
app.component(
  'Grid',
  defineAsyncComponent(() => import('./components/Grid.vue'))
);

app.component(
  'Page',
  defineAsyncComponent(() => import('./components/Page.vue'))
);

app.component(
  'Teaser',
  defineAsyncComponent(() => import('./components/Teaser.vue'))
);

app.component(
  'Feature',
  defineAsyncComponent(() => import('./components/Feature.vue'))
);

app.component(
  'Skills',
  defineAsyncComponent(() => import('./components/Skills.vue'))
);

app.component(
  'Work',
  defineAsyncComponent(() => import('./components/Work.vue'))
);

app.component(
  'Education',
  defineAsyncComponent(() => import('./components/Education.vue'))
);

app.component(
  'Projects',
  defineAsyncComponent(() => import('./components/Projects.vue'))
);

app.use(VueLazyLoad, {
  // options...
});

app.mount('#app');
