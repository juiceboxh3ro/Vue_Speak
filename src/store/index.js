import Vuex from 'vuex';
import Vue from 'vue';
import language from './modules/language';

// Load Vuex
Vue.use(Vuex);

// Create store
export default new Vuex.Store({
  modules: {
    language
  }
});