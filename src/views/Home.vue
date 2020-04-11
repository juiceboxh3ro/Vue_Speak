<template>
  <div id="Home">
    <section class="card">
      <h2>Web Developer</h2>
      <section class="links-list">
        <ul>
          <li><a href="https://github.com/juiceboxh3ro"><i class="fab fa-github-square"></i></a></li>
          <li class="idk">github</li>
        </ul>
        <div class="spacer"></div>
        <ul>
          <li><a href="https://www.linkedin.com/in/jesse-goodburne/"><i class="fab fa-linkedin"></i></a></li>
          <li class="idk">linkedin</li>
        </ul>
        <div class="spacer"></div>
        <ul>
          <li><a href="https://unsplash.com/@juiceboxh3ro"><i class="fas fa-camera-retro"></i></a></li>
          <li>unsplash</li>
        </ul>
      </section>
      <h3>Quick Facts:</h3>
      <ul>
        <li class="lh2">I am currently attending Lambda School for full-stack web development.</li>
        <li class="lh2">I'm excited to program every day, and am self-teaching Vue JS and Ruby.</li>
        <li class="lh2">I hold a B.A. in Japanese Language from Temple University, Japan Campus.</li>
        <li class="lh2">I've had my photography featured in a gallery.</li>
      </ul>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: "Home",
  props: ["name"],
  computed: mapGetters(['language'])
}
</script>

<style scoped>
  #Home { margin: 20px auto; }
  h2 {
    text-align: center;
    font-size: 2.4rem;
  }
  h3 {
    font-size: 2rem;
  }
  p {
    font-family: 'Raleway', sans-serif;
    text-align: center;
    line-height: 1.4;
    font-size: 1.8rem;
  }
  button {
    margin: 15px 0;
    padding: 4px 13px;
    border: none;
    border-radius: 50%;
    background: #fff;
    font-family: 'Raleway', sans-serif;
    font-size: 1.2rem;
    color: #333;
  }
  .card {
    width: 50%;
    margin: 50px auto;
    padding: 25px;
    border-radius: 3px;
    background: rgba(255, 255, 255, 0.3);
    box-shadow: 0 0 1px rgba(255,255,255,0.7), 0 0 3px 1px rgba(255,255,255,0.3);
  }
  .links-list {
    margin: 50px 0;
    display: flex;
    justify-content: space-evenly;
  }
  li {
    list-style: none;
    font-size: 1.8rem;
  }
  .lh2 { line-height: 1.75; }
  .spacer { border-right: 2px white solid; }
  a {
    color: white;
    font-size: 12rem;
  }
  a:hover { color: #EB018E; }
</style>