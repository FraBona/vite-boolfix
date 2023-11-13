<script>
  import axios from 'axios';
  import CardFilm from './components/CardFilm.vue';
  import AppMain from './components/AppMain.vue';
  import AppHeader from './components/AppHeader.vue';
  import { store } from './store.js';

  export default {
    components: {
      CardFilm: CardFilm,
      AppHeader: AppHeader,
      AppMain: AppMain,
    },
    data() {
      return{
        store: store,
        API_KEY: 'c42a3371088d04eb3ec89d322d1ee0db',
        query: 'mamma ho perso aereo',
      }
    },
    methods: {
      fetchMovies(){
        if(store.searchText === ''){
          this.store.movies = [];
          this.store.series = [];
          return 
        }
        
        axios.get('https://api.themoviedb.org/3/search/movie',{
          params: {
            api_key: this.store.API_KEY,
            query: this.store.searchText,
            language: 'it-IT'
          }
        }).then(res => {
          const movies = res.data.results
          this.store.movies = movies;
        })
      }
    }
  }

</script>

<template>
  <AppHeader @onSearch="fetchMovies"></AppHeader>
  <AppMain></AppMain>
</template>

<style lang="scss">
  @use './style/general.scss'
</style>
