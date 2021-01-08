<template>
  <div id="About">
    <div id="container">
      <section class="card">
        <h3>Technical Skills</h3>
        <section id="edu">
          <h4>Education</h4>
          <p>During my time at <a href="https://lambdaschool.com/">Lambda School</a> I was taught the following:</p>
          <p>HTML5, CSS3, JavaScript, React</p><br>
        </section>
        <section id="self">
          <h4>Self-Study</h4>
          <p>I'm currently self-teaching the following:</p>
          <p>Vue.js, Flutter, React, SQL and NoSQL databases</p>
        </section>
      </section>

      <section class="card">
        <h3>University Education</h3>
        <section>
          <p>I have a B.A. in Japanese language from <a href="https://www.tuj.ac.jp/jp/index.html">Temple University, Japan Campus</a> which is in Tokyo, Japan.</p>
          <p>I attended there from August 2015 to May 2019 and graduated with a 3.2 GPA.</p><br>
          <p>I volunteered at an organization which is working towards women's equality in Japan as part of the research process for my graduation thesis.</p>
        </section>
      </section>

      <section class="card">
        <h3>Language</h3>
        <section>
          <p>Did I mention that I'm a Japanese major?</p>
          <p>I'm able to utilise business level Japanese, and I'm studying to take the highest level of the <abbr title="Japanese Language Proficiency Test">JLPT</abbr> next year.</p>
          <br>
          <p>In addition to Japanese I can also speak conversational Korean.</p>
        </section>
      </section>
      
      <section class="card">
        <h3>Creative</h3>
        <section>
          <p>I'm a hobbyist photographer and have had my photographs featured in a gallery.</p>
          <p>I also photographed the 2017 TEDx event held by the TEDx club in my university.</p><br>
          <p>You can find me on <a href="https://www.instagram.com/juiceboxh3ro/">Instagram</a> if you're curious!</p>
        </section>
      </section>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: "About",
  computed: mapGetters(['language'])
}
</script>

<style scoped>
  #About {
    margin: 20px auto;
  }

  .card {
    width: 50%;
    margin: 50px auto;
    padding: 25px;
    border-radius: 3px;
    background: rgba(255, 255, 255, 0.3);
    box-shadow: 0 0 1px rgba(255,255,255,0.7), 0 0 3px 1px rgba(255,255,255,0.3);
  }
  h3 {
    font-size: 2.6rem;
    margin-bottom: 20px;
  }
  h4 {
    font-size: 2.2rem;
    margin-bottom: 15px;
  }
  p {
    line-height: 1.5;
    font-size: 1.6rem;
  }
  a {
    color: #fff;
    font-size: 1.6rem;
  }
  a:hover { color: #EB018E; }
  abbr {
    font-size: 1.6rem;
    cursor: pointer;
  }
  #edu {
    padding-bottom: 10px;
    border-bottom: 1px solid #fff;
    margin-bottom: 20px;
  }
  @media(max-width: 500px) {
    .card {
      width: 90%;
    }
  }
</style>