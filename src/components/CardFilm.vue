<script>

import { store } from '../store.js'

export default{
  props: {
    item: Object,
  },
  data(){
    return{
      store: store,
    }
  },
  computed: {
    srcFlag(){
      return this.store.flags[this.item.original_language];
    },
    addImage(){
      return `https://image.tmdb.org/t/p/w92`+this.item.poster_path;
    }
  }
}

</script>

<template>

  <div>
    <ul>
      <li>
        <img :src="addImage" alt="">
      </li>
      <li>{{  item.title }}</li>
      <li>{{ item.original_title }}</li>
      <li>
        <img height="15" v-if="srcFlag" :src="srcFlag" alt="">
        <p v-else>{{ item.original_language }}</p>
      </li>
      <li>{{ item.vote_average }}</li>
    </ul>
  </div>

</template>


<style>

</style>