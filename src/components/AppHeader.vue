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
    <div class="container nav">
      <h2>Boolfix</h2>
      <input type="text" @keyup.enter="$emit('onSearch')" v-model="store.searchText" placeholder="Inserisci il film">
    </div>
  </header>

</template>

<style lang="scss">
  .nav{
    display: flex;
    justify-content: space-between;
  }
</style>