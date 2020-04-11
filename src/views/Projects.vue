<template>
  <div id="deck">
    <div class="card">
      <router-link to="/projects/speak">Speech API</router-link>
      <section>
        <p>A simple page which utilizes your browser's speech synthisizer API. Built on Vue.</p>
      </section>
    </div>

    <div class="card">
      <a href="https://www.kakitsune.com/">Kakitsune</a>
      <section>
        <img :src="require('../assets/fox-full.png')" alt="kakitsune logo of a fox" />
        <p>A web app with the goal of teaching the user how to write Japanese characters (kana and kanji). Built on React with the goal to later switch to Svelte.</p>
      </section>
    </div>

    <div class="card">
      <p>LinkedIn Clone</p>
      <section>
        <p>A copy of my LinkedIn profile page built in React.</p>
      </section>
    </div>

    <div class="card">
      <p>Vue Portfolio</p>
      <section>
        <p>This website! Vue JS is not taught as part of the curriculum at Lambda School. It is something I have chosen to pursue outside of the general studies. <br /> I am also studying Ruby and might make a Rails project later.</p>
      </section>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'Projects',
  computed: mapGetters(['language'])
}
</script>

<style scoped>
  #deck {
    width: 80%;
    margin: 50px auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
  }

  .card {
    padding: 15px 20px;
    border-radius: 3px;
    background: rgba(255,255,255,0.2);
    box-shadow: 0 0 1px rgba(255,255,255,0.7), 0 0 3px 1px rgba(255,255,255,0.3);
  }

  a {
    color: white;
    font-size: 1.8rem;
  }

  section {
    margin-top: 20px;
    display: flex;
  }

  .card p { font-size: 1.8rem; }

  img {
    width: 25%;
    height: 25%;
    margin-right: 20px;
  }
</style>