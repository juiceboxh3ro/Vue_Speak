<template>
  <div id="About">
    <section id="load-animation" v-if="loading === true">
      <div class="half-circle-spinner">
        <div class="circle circle-1"></div>
        <div class="circle circle-2"></div>
      </div>
    </section>
    <section class="card">
      <p>Skills and such coming soon.</p>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: "About",
  data() {
    return {
      loading: false
    }
  },
  computed: mapGetters(['language']),
  created() {
    this.loading = true
    this.getter()
  },
  methods: {
    async getter() {
      fetch("https://cors-anywhere.herokuapp.com/https://germ-shout.herokuapp.com/api/user", {
        method: 'GET'
      })
      .then(res => res.json())
      .then(res => {
        this.loading = false
        console.log(res)
      })
      .catch(err => console.error(err))
    } // end of getter
  } // end of methods
}
</script>

<style scoped>
  #About {
    margin: 20px auto;
  }
  p {
    font-family: 'Raleway', sans-serif;
    text-align: center;
    line-height: 1.4;
    font-size: 1.8rem;
  }
  .card {
    width: 50%;
    margin: 50px auto;
    padding: 25px;
    border-radius: 3px;
    background: rgba(255, 255, 255, 0.3);
    box-shadow: 0 0 1px rgba(255,255,255,0.7), 0 0 3px 1px rgba(255,255,255,0.3);
  }

  /* CSS FOR LOADER CIRCLE */
  #load-animation {
    width: 5%;
    margin: 50px auto;
  }
  .half-circle-spinner, .half-circle-spinner * {
    box-sizing: border-box;
  }
  .half-circle-spinner {
    width: 60px;
    height: 60px;
    border-radius: 100%;
    position: relative;
  }
  .half-circle-spinner .circle {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 100%;
    border: calc(60px / 10) solid transparent;
  }
  .half-circle-spinner .circle.circle-1 {
    border-top-color: #fff;
    animation: half-circle-spinner-animation 1s infinite;
  }
  .half-circle-spinner .circle.circle-2 {
    border-bottom-color: #fff;
    animation: half-circle-spinner-animation 1s infinite alternate;
  }
  @keyframes half-circle-spinner-animation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>