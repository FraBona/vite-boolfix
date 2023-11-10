<script>
  import axios from 'axios';

  export default {
    data() {
      return{
        API_KEY: 'c42a3371088d04eb3ec89d322d1ee0db',
        query: 'mamma ho perso aereo',
      }
    },
    methods: {
      fetchMovies( ){
        axios.get('https://api.themoviedb.org/3/search/movie',{
          params: {
            api_key: this.API_KEY,
            query: this.query
          }
        }).then(res => {
          console.log(res.data);
        })
      }
    },
    created(){
      this.fetchMovies();
    }
  }

</script>

<template>

</template>

<style scoped>
</style>
