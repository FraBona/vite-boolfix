<script>
  import { store } from '../store.js';
  import CardFilm from './CardFilm.vue'
  
  export default{
    data() {
      return{
        store: store,
      }
    },
    components: {
      CardFilm: CardFilm,
    }
  }
</script>

<template>
  <div class="container">
    <h1>Movies</h1>

    <CardFilm v-for="movie in store.movies" :key="movie.id" :item="movie"></CardFilm>

    <div v-if="store.movies.length === 0">
      Non ci sono film
    </div>
  </div>
</template>

<style lang="scss">
</style>

