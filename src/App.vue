<template>
  <main id="app">
    <Home />
  </main>
</template>

<script>
import Home from "@/components/Home.vue";
export default {
  name: "App",
  components: {
    Home,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Ubuntu, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #d1d1d1;
}

body {
  background-color: #161616;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.cardContainer {
  display: flex;
  flex-direction: row;
  margin: auto;
}

.card {
  margin: 10px 15px;
}

h1 {
  color: #cfba58;
  text-transform: uppercase;
  font-size: 4em;
  font-weight: 100;
}
</style>
