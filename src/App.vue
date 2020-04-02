<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from './components/layout/Header';
export default {
  name: 'App',
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
}

#app {
  font-size: 1.6rem;
  width: 100vw;
  height: 100vh;
  position: relative;
  color: #fff;
  overflow: hidden;
}

#app::before {
  content: "";
  position: absolute;
  height: 100vh;
  width: 100vw;
  z-index: -10;
  background-image: linear-gradient(135deg, rgba(38,129,188,1), rgba(235,0,141,1));
}
</style>
