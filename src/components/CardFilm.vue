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
      card: false,
      // numberVote:  (parseInt(this.item.vote_average) / 2 ).toFixed(0),
    }
  },
  computed: {
    srcFlag(){
      return this.store.flags[this.item.original_language];
    },
    addImage(){
      return `https://image.tmdb.org/t/p/w342`+this.item.poster_path;
    },
    numberVote(){
      return Math.round(parseInt(this.item.vote_average) / 2)  ;
    },
  },
  mounted(){
    console.log(this.numberVote);
  }
}

</script>

<template>

  <div class="menu">
    <ul>
      <h1 v-if="cardType === 'MOVIE'">Film</h1>
      <h1 v-else>SERIES</h1>
      <li>
        <div class="principal_image">
          <img v-if="item.poster_path" :src="addImage" alt="" v-on:mouseover="this.card = true" v-on:mouseleave="this.card = false"  class="image-film">
          <img v-else src="https://image.tmdb.org/t/p/w342/wwemzKWzjKYJFfCeiB57q3r4Bcm.png">
          <div class="overlay" v-if="this.card === true"></div>
          <div class="description" v-if="this.card === true">
            <li>{{ (cardType === 'MOVIE') ? item.title : item.name }}</li>
            <li>{{ (cardType === 'MOVIE') ? item.original_title : item.original_name}}</li>
            <li>
              <img height="15" v-if="srcFlag" :src="srcFlag" alt="">
              <p v-else>{{ item.original_language }}</p>
            </li>
            <li><span v-for="i in numberVote" v-if="numberVote > 0">&#9733;</span>
                <span v-for="i in 5 - numberVote">&#9734;</span> 
            </li>
          </div>
        </div>
      </li>
<!--      <li>{{ (cardType === 'MOVIE') ? item.title : item.name }}</li>
      <li>{{ (cardType === 'MOVIE') ? item.original_title : item.original_name}}</li>
      <li>
        <img height="15" v-if="srcFlag" :src="srcFlag" alt="">
        <p v-else>{{ item.original_language }}</p>
      </li>
      <li><span v-for="i in numberVote" v-if="numberVote > 0">&#9733;</span>
          <span v-for="i in 5 - numberVote">&#9734;</span> 
      </li>-->
    </ul>
  </div>


</template>


<style scoped>

.principal_image{
  position: relative;
}

.description{
  color: white;
  font-size: 20px;
  position: absolute;
  top: 0;
  padding: 10px;
}

.image-film{
  position: relative;
}
.overlay{
  width: 342px;
  height: 517px;
  position: absolute;
  background-color: black;
  top: 0;
}
</style>