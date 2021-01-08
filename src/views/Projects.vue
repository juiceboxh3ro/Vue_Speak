<template>
  <div id="deck">
    <div class="card">
      <a href="https://www.genkan.app/">Genkan</a>
      <section>
        <p>Currently the scaffold of my language exchange app, built with the MEVN stack with a mobile app (soon!) written in Flutter.</p>
      </section>
    </div>
    <div class="card">
      <a href="https://heuristic-booth-2cda36.netlify.app/">Weather Buddy</a>
      <section>
        <p>Simple weather app using OpenWeatherMap's API, built with React and Tailwind CSS, uses local storage to persist past queries.</p>
      </section>
    </div>
    <div class="card">
      <a href="https://nifty-curie-9d4d3d.netlify.app/">Anpi</a>
      <section>
        <p>Mock-up SPA of an earthquake safety confirmation app. Built on Vue.js 2 and utilizes the Google Maps API and USGS seismic data API.</p>
      </section>
    </div>
    <div class="card">
      <a href="https://master.d37ier1k83jxk6.amplifyapp.com/">Story Squad</a>
      <section>
        <div>
          <p>Story Squad is a creative competition platform that encourages children to sharpen their language, drawing, teamwork, and critical thinking skills through an engaging, weekly battle.</p>
          <p>I worked on the front-end of this app, which is built on React, Typescript, and MaterialUI.</p>
        </div>
      </section>
    </div>

    <div class="card">
      <a href="https://fz-error-report.herokuapp.com/">FZ! Error Report Form</a>
      <section>
        <div>
          <p>A form to submit errors or typos in the From Zero! books. Uses the PERN stack and is deployed to Heroku.</p>
          <a href="https://github.com/juiceboxh3ro/error-report">Github Repository</a>
        </div>
      </section>
    </div>

    <div class="card">
      <router-link :to="{ name: 'speak' }">Speech API</router-link>
      <section>
        <p>A simple page which utilizes your browser's speech synthisizer API. Built on Vue.js.</p>
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
  a:hover { color: #EB018E; }
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
  @media(max-width: 500px) {
    #deck {
      grid-template-columns: 1fr;
    }
    section {
      display: inline-block;
    }
  }
</style>