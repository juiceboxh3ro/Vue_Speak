<template>
  <header id="header">
    <h1 v-if="language === 'English'">Jesse Goodburne</h1>
    <h1 class="japanese" v-if="language === 'Japanese'">グッドバーン・ジェシー</h1>
    <div id="nav">
      <router-link :to="{ name: 'home' }">Home</router-link>
      <router-link :to="{ name: 'about' }">About</router-link>
      <router-link :to="{ name: 'projects' }">Projects</router-link>
      <button @click="changeLanguage()"><i class="fas fa-globe"></i></button>
    </div>
  </header>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  name: "Header",
  methods: {
    ...mapActions(['changeLanguage'])
  },
  computed: mapGetters(['language'])
}
</script>

<style scoped>
  #header {
    width: 100%;
    background: rgba(255,255,255,0.2);
    color: #fff;
    text-align: center;
    padding-top: 15px;
    box-shadow: 0 0 1px rgba(255,255,255,0.7), 0 0 3px 1px rgba(255,255,255,0.3);
  }
  #header h1 {
    font-family: 'Pacifico', sans-serif;
    line-height: 1.8;
    font-size: 4.2rem;
  }
  #header a {
    color: #fff;
    margin-right: 25px;
    text-decoration: none;
    padding-bottom: 5px;
    font-size: 2.4rem;
  }
  #nav {
    display: flex;
    justify-content: flex-end;
    margin: -15px 50px 0 0;
  }
  .router-link-exact-active { border-bottom: 2px solid #fff; }
  button {
    margin-top: -15px;
    padding: 4px 7px;
    border: none;
    border-radius: 50%;
    background: none;
    font-family: 'Raleway', sans-serif;
    font-size: 3.4rem;
    color: white;
    outline: none;
  }
  button:hover { cursor: pointer; }
@media(max-width: 500px) {
    #header h1 {
      font-size: 3rem;
    }
    #header a {
      font-size: 2rem;
    }
    #nav {
      display: inline-block;
      margin: 20px 0 0;
    }
  }
</style>