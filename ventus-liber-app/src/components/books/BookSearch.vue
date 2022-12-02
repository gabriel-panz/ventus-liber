<script lang="ts">
import type IBook from "@/Interfaces/IBook";
import BookList from "./BookList.vue";

export default {
  components: {
    BookList,
  },
  data() {
    return {
      search: "",
      startIndex: 0,
      isLoading: false,
      result: [] as IBook[],
    };
  },
  methods: {
    async listBooks() {
      this.isLoading = true;
      await this.axios
        .get(
          `https://www.googleapis.com/books/v1/volumes?q=${this.search}&startIndex=${this.startIndex}&maxResults=4`
        )
        .then((response) => (this.result = response.data.items as IBook[]))
        .catch((error) => console.log("error :>> ", error))
        .then(() => (this.isLoading = false));
    },
  },
};
</script>

<template>
  <div class="search-area">
    <input type="text" v-model="search" />
    <button @click="listBooks">Search</button>
    <div>
      <BookList :bookList="result" />
    </div>
  </div>
</template>

<style scoped>
/* .search-area {
  
} */
</style>
