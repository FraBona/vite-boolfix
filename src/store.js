import { reactive } from 'vue';

export const store = reactive({
  searchText: '',
  movies: [],
  series: [],
  API_KEY: 'c42a3371088d04eb3ec89d322d1ee0db'
})