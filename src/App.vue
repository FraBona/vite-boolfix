<script>
  import axios from 'axios';
  import AppMain from './components/AppMain.vue';
  import AppHeader from './components/AppHeader.vue';
  import { store } from './store.js';

  export default {
    components: {
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
          this.store.series = [];
          this.store.movies = [];
          return 
        }
        
        axios.get('https://api.themoviedb.org/3/search/movie',{
          params: {
            api_key: this.store.API_KEY,
            query: this.store.searchText,
            language: 'it-IT'
          }
        }).then(res => {
          const movies = res.data.results;
          this.store.movies = movies;
        });
        axios.get('https://api.themoviedb.org/3/search/tv',{
          params: {
            api_key: this.store.API_KEY,
            query: this.store.searchText,
            language: 'it-IT'
          }
        }).then(res => {
          const series = res.data.results;
          this.store.series = series;
        })
      },
    }

  }

</script>

<template>
  <AppHeader @onSearch="fetchMovies"></AppHeader>
  <AppMain class="main"></AppMain>
</template>

<style lang="scss">
  @use './style/general.scss'

</style>
