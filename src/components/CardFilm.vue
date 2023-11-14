<script>

import { store } from '../store.js'

export default{
  props: {
    item: Object,
    cardType: String,
  },
  data(){
    return{
      store: store,
      // numberVote:  (parseInt(this.item.vote_average) / 2 ).toFixed(0),
    }
  },
  computed: {
    srcFlag(){
      return this.store.flags[this.item.original_language];
    },
    addImage(){
      return `https://image.tmdb.org/t/p/w92`+this.item.poster_path;
    },
    numberVote(){
      return Math.round(parseInt(this.item.vote_average) / 2)  ;
    }
  },
  mounted(){
    console.log(this.numberVote);
  }
}

</script>

<template>

  <div>
    <ul>
      <h1 v-if="cardType === 'MOVIE'">Film</h1>
      <h1 v-else>SERIES</h1>
      <li>
        <img v-if="item.poster_path" :src="addImage" alt="" >
        <p v-else>Non ci sono immagini</p>
      </li>
      <li>{{ (cardType === 'MOVIE') ? item.title : item.name }}</li>
      <li>{{ (cardType === 'MOVIE') ? item.original_title : item.original_name}}</li>
      <li>
        <img height="15" v-if="srcFlag" :src="srcFlag" alt="">
        <p v-else>{{ item.original_language }}</p>
      </li>
      <li><span v-for="i in numberVote" v-if="numberVote > 0">&#9733;</span>
          <span v-else>Nessuna valutazone</span>
      </li>
    </ul>
  </div>


</template>


<style>

</style>