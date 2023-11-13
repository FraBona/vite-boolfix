<script>
  import { store } from '../store.js';
  
  export default{
    data() {
      return{
        store: store,
      }
    }
  }
</script>

<template>
  <div class="container">
    <h1>Movies</h1>

    <div v-for="movie in store.movies" :key="movie.id">
      {{ movie.title }}
    </div>

    <div v-if="store.movies.length === 0">
      Non ci sono film
    </div>
  </div>
</template>

<style lang="scss">
</style>

