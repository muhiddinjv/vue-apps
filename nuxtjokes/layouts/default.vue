<template>
  <div class="container">
    <AppHeader />
    <Nuxt />
  </div>
</template>

<script>
import AppHeader from '../components/AppHeader'
export default {
  components: {
    AppHeader,
  },
}
</script>

<style>
* {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1em;
  line-height: 1.6;
  /* background: #f4f4f4; */
}
a {
  color: #666;
  text-decoration: none;
}
ul {
  list-style: none;
}
.container {
  max-width: 800px;
  margin: 2rem auto;
  overflow: hidden;
  padding: 1rem 2rem;
  background: #fff;
}
</style>
