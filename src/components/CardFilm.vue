<script>

export default{
  props: {
    item: Object,
  }
}

</script>

<template>

  <div>
    <ul>
      <li>{{  item.title }}</li>
      <li>{{ item.originalTitle }}</li>
      <li>{{ item.language }}</li>
      <li>{{ item.vote_average }}</li>
    </ul>
  </div>
  
</template>


<style>

</style>