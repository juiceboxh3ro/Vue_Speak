<template>
<div>
  <h2>Recent Personal Projects</h2>
  <div id="deck">
    <ProjectCard
      link="https://www.genkan.app/"
      projectName="Genkan"
      tech="Flutter, Vue.js, Nuxt.js, Express, Node.js, MongoDB"
      description="My current passion project: a language and culture exchange app."
    >
      <a href="https://www.genkan.app/"><img src="../assets/genkan.png" alt=""></a>
    </ProjectCard>

    <ProjectCard
      link="#"
      projectName="Discount Duolingo"
      tech="Flutter, Firebase"
      description="A quiz app to test your language knowledge. Has widgets similar to Duolingo, such as; translation questions, multiple choice grid, and drag/drop answers. Saves the user's total quiz scores into a Firestore database and displays them in their profile card along with various awards for hitting certain point value milestones."
    >
      <img src="../assets/discountduolingo.png" alt="" style="height: 85%; width: 85%;">
    </ProjectCard>

    <ProjectCard
      link="https://heuristic-booth-2cda36.netlify.app/"
      projectName="Weather Buddy"
      tech="React, Tailwind CSS"
      description="Simple weather app using OpenWeatherMap's API."
    >
      <a href="https://heuristic-booth-2cda36.netlify.app/"><img src="../assets/weatherbuddy.png" alt=""></a>
    </ProjectCard>
  </div>
</div>
</template>

<script>
import ProjectCard from '../components/ProjectCard';

export default {
  name: 'Projects',
  components: {
    ProjectCard
  }
}
</script>

<style scoped>
h2 {
  margin-top: 50px;
  text-align: center;
  font-size: 3rem;
}

#deck {
  width: 80%;
  margin: 50px auto;
}

@media(max-width: 500px) {
  #deck {
    grid-template-columns: 1fr;
  }
}
</style>