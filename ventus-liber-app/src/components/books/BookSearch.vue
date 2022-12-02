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
          `https://www.googleapis.com/books/v1/volumes?q=${this.search}&startIndex=${this.startIndex}&maxResults=12`
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
    <input class="search-input text-white" type="text" v-model="search" placeholder="Digite o nome de um livro..."/>
    <button class="btn btn-dark" @click="listBooks">Search</button>
  </div>
  <div class="">
    <BookList class="book-list" :bookList="result" />
  </div>
</template>

<style scoped>
.search-input{
  width: 30rem;
  padding-left: 1rem;
  border-radius: 4px;
  border: 0.2rem solid var(--bs-gray-800);
  background-color: var(--bs-gray-900);
}

/* .search-button {
  border: none;
  background-color: var(--bs-teal);
} */
.search-area {
  display: flex;
  margin: auto;
  justify-content: center;
}
.book-list {
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  overflow-y: scroll;
  max-height: 40rem;
  width: 60rem;
}
</style>
