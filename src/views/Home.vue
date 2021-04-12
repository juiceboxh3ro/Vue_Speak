<template>
<div id="Home">
  <section class="card">
    <h2>Web Developer</h2>
    <section class="links-list">
      <ul>
        <li><a target="_blank" href="https://github.com/juiceboxh3ro"><i class="fab fa-github-square"></i></a></li>
        <li class="idk">github</li>
      </ul>
      <div class="spacer"></div>
      <ul>
        <li><a target="_blank" href="https://www.linkedin.com/in/jesse-goodburne/"><i class="fab fa-linkedin"></i></a></li>
        <li class="idk">linkedin</li>
      </ul>
    </section>
    <h3>Quick Facts:</h3>
    <ul>
      <li class="lh2">I attended Lambda School for full-stack web development</li>
      <li class="lh2">I am self-teaching Ruby, Vue.js, and Flutter</li>
      <li class="lh2">I hold a B.A. in Japanese Language from Temple University, Japan Campus</li>
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
  transition: 0.2s ease-in;
}
a:hover {
  color: #EB018E;
}
@media(max-width: 500px) {
  .card {
    width: 90%;
  }
}
</style>