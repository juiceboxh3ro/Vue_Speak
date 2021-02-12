<template>
<div class="card">
  <div class="description">
    <a :href="link">{{projectName}}</a>
    <section>
      <p>{{description}}</p>
      <p>Built with: {{tech}}</p>
    </section>
  </div>
  <div class="image-box">
    <slot></slot>
  </div>
</div>
</template>

<script>
export default {
  name: 'ProjectCard',
  props: ['link', 'projectName', 'description', 'tech'],
}
</script>

<style scoped>
.card {
  width: 80%;
  margin: 50px auto;
  padding: 20px;
  border-radius: 5px;
  background: rgba(255,255,255,0.2);
  box-shadow: 0 0 1px rgba(255,255,255,0.5), 0 0 3px 1px rgba(255,255,255,0.3);
  display: flex;
  justify-content: space-evenly;
}

.card div {
  padding: 10px;
  width: 45%;
}

.image-box {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.image-box img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

section {
  width: 80%;
  margin-top: 20px;
}

a {
  color: white;
  font-size: 2rem;
}

a:hover, a:active { color: #EB018E; }

a:visited { color: white; }

p {
  font-size: 1.8rem;
  line-height: 1.5;
  margin-top: 15px;
}

@media(max-width: 1100px) {
  section {
    display: inline-block;
    width: 100%;
  }

  .card {
    width: 100%;
    flex-direction: column;
  }

  .card div {
    padding: 10px;
    width: 100%;
  }
}
</style>