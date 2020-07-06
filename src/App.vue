<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from './components/layout/Header';
import { i18n, lan } from './unit/const'
export default {
  name: 'App',
  computed: {
    name: () => i18n.name[lan],
    title: () => i18n.title[lan]
  },
  // i'm not sure what i want to do with i18n yet
  // specifically i don't understand the RegExp line in ./unit/const.js
  components: {
    Header
  }
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Raleway', sans-serif;
  font-size: 62.5%
}
#app {
  width: 100vw;
  height: 100vh;
  position: relative;
  color: #fff;
  overflow: visible;
  overflow-x: hidden;
}

#app::before {
  content: "";
  position: fixed;
  height: 100vh;
  width: 100vw;
  z-index: -10;
  background: #2c2e31;
}

p {
  font-size: 1rem;
}
.japanese { font-family: 'Kosugi-Maru', sans-serif !important; }
</style>
