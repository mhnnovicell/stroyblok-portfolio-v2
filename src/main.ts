import { createApp } from 'vue';
import { StoryblokVue, apiPlugin } from '@storyblok/vue';

import App from './App.vue';
import './index.css';
import 'flowbite';

const app = createApp(App);

app.use(StoryblokVue, {
  accessToken: 'a29ubFkrIbWWW8OC8GdKXAtt',
  bridge: process.env.NODE_ENV !== 'production', // optimizes by excluding the bridge on production
  use: [apiPlugin],
});

import Grid from './components/Grid.vue';
import Page from './components/Page.vue';
import Teaser from './components/Teaser.vue';
import Feature from './components/Feature.vue';

app.component('Grid', Grid);
app.component('Page', Page);
app.component('Teaser', Teaser);
app.component('Feature', Feature);

app.mount('#app');
