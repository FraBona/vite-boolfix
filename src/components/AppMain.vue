<script>
  import { store } from '../store.js';
  import CardFilm from './CardFilm.vue';
  import CardSerie from './CardSerie.vue'
  
  export default{
    data() {
      return{
        store: store,
      }
    },
    components: {
      CardFilm: CardFilm,
      CardSerie: CardSerie,
    },
    
  }
</script>

<template>
  <div class="container-large ">
    <div class="card">
      <CardFilm v-for="movie in store.movies" :key="movie.id" :item="movie" :card-type="'MOVIE'" />
      <CardFilm v-for="movie in store.series" :key="movie.id" :item="movie" :card-type="'SERIES'" />
    <!--    <h1>Series</h1> 
      <CardSerie v-for="serie in store.series" :key="serie.id" :item="serie"></CardSerie> -->

      <div v-if="store.movies.length === 0">
        Non ci sono film
      </div>

    </div>
  </div>
  
</template>

<style lang="scss">

.card{
  background: grey;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
</style>

