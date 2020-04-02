<template>
  <div id="Home">
    <section>
      <section v-if="language === 'English'">
        <p>heck {{language}}</p>
      </section>
      <section v-if="language === 'Japanese'">
        <p>日本語万歳</p>
      </section>
      <p>I am best boi web-developer.</p>
    </section>

    <button @click="changeLanguage()">Language</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  name: "Home",
  methods: {
    ...mapActions(['changeLanguage'])
  },
  computed: mapGetters(['language'])
}
</script>

<style scoped>
  #Home {
    margin: 20px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  p {
    font-family: 'Raleway', sans-serif;
    text-align: center;
    line-height: 1.4;
  }
  button {
    margin: 15px 0;
    padding: 5px 20px;
    border: none;
    border-radius: 3px;
    background: #fff;
    font-family: 'Raleway', sans-serif;
    font-size: 1.2rem;
    color: #333;
  }
</style>