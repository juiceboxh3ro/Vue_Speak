<template>
  <div id="About">
    <div id="container">
      <section class="card">
        <h3>Technical Skills</h3>
        <section id="edu">
          <h4>Education</h4>
          <p>In <a href="https://lambdaschool.com/">Lambda School</a> I was taught the following:</p>
          <p>Front-end: HTML5, CSS3, JavaScript, React</p>
          <p>Back-end: SQLite</p><br>
        </section>
        <section id="self">
          <h4>Self-Study</h4>
          <p>I have also branched out on my own after the daily lectures:</p>
          <p>Vue, Ruby, PostgreSQL, MySQL, Firebase</p>
          <br>
          <p>I especially like Vue because of the community behind it, and how friendly it has been to self-study.</p>
          <p>I also do all my own styling, no Bootstrap or the like, and it's one of the things I most enjoy about the front-end as it satisfies my creativity.</p>
        </section>
      </section>
      <section class="card">
        <h3>University Education</h3>
        <section>
          <p>I have a B.A. in Japanese language from <a href="https://www.tuj.ac.jp/jp/index.html">Temple University, Japan Campus</a>which is in Tokyo, Japan.</p>
          <p>I attended there from August 2015 to May 2019 and graduated with a 3.2 GPA.</p><br>
          <p>I volunteered at an organization which is working towards women's equality in Japan as part of the research process for my graduation thesis.</p>
        </section>
      </section>
      <section class="card">
        <h3>Language</h3>
        <section>
          <p>Did I mention that I'm a Japanese major?</p>
          <p>I'm planning to take the highest or second highest level of the <abbr title="Japanese Language Proficiency Test">JLPT</abbr> at the end of this year.</p>
          <br>
          <p>In addition to Japanese I can also speak conversational Korean, and am interested in Chinese and Portuguese.</p>
        </section>
      </section>
      <section class="card">
        <h3>Creative</h3>
        <section>
          <p>I'm a hobbyist photographer and have had my photographs featured in a gallery.</p>
          <p>I was the videographer for Japanese From Zero's 2018 Sapporo footage, which is the company I was previously employed at.</p>
          <p>I also photographed the 2017 TEDx event held by the TEDx club in my university.</p><br>
          <p>I've put some of my photos on <a href="https://unsplash.com/@juiceboxh3ro">Unsplash</a>, but you can also find me on <a href="https://www.instagram.com/juiceboxh3ro/">Instagram</a> if you're curious!</p>
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
  #container {
    width: 105vw;
    height: 80vh;
    margin: 0 auto;
    overflow: scroll;
    overflow-x: hidden;
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
    color: white;
    font-size: 1.6rem;
  }
  abbr {
    font-size: 1.6rem;
    cursor: pointer;
  }
  #edu {
    padding-bottom: 10px;
    border-bottom: 1px solid white;
    margin-bottom: 20px;
  }
  @media(max-width: 500px) {
    #container {
      width: 100vw;
      height: 80vh;
      margin: 0 auto;
      overflow: visible;
      overflow-x: hidden;
    }
    .card {
      width: 90%;
    }
  }
</style>