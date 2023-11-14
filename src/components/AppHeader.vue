<script>
  import { store } from '../store.js';
  

  export default {
    data() { 
      return{
        store: store,
      }
    }
  }

</script>

<template>

  <header >
    <div class="container-large nav">
      <h2 id="title">BOOLFIX</h2>
      <input type="text" @keyup.enter="$emit('onSearch')" v-model="store.searchText" placeholder="Inserisci il film">
    </div>
  </header>

</template>

<style lang="scss">
  .nav{
    background-color: black;
    display: flex;
    justify-content: space-between;
    padding: 20px;
  }
  
  #title{
    font-size: 38px;
    color: red;
  }
</style>