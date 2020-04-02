<template>
  <header class="header">
    <h1>A Vue Portfolio</h1>
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/speak">Speak API</router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>
  .header {
    width: 100%;
    background: rgba(255,255,255,0.2);
    color: #fff;
    text-align: center;
    padding-top: 15px;
  }

  .header h1 { font-family: 'Pacifico', sans-serif; }

  .header a {
    color: #fff;
    margin-right: 25px;
    text-decoration: none;
  }

  #nav {
    display: flex;
    justify-content: flex-end;
    margin-right: 50px;
  }

  .router-link-exact-active {
    padding-bottom: 5px;
    border-bottom: 2px solid #fff;
  }
</style>