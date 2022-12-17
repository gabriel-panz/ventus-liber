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
      currentIndex: 0,
      maxResults: 6,
      isLoading: false,
      result: [] as IBook[],
    };
  },
  methods: {
    async searchBooks() {
      this.currentIndex = 0;
      this.result = [] as IBook[];
      this.getBooks();
    },
    async getBooks() {
      this.isLoading = true;
      await this.axios
        .get(
          `https://www.googleapis.com/books/v1/volumes?q=${this.search}&startIndex=${this.currentIndex}&maxResults=${this.maxResults}`
        )
        .then((response) =>
          this.result.push(...(response.data.items as IBook[]))
        )
        .catch((error) => console.log("error :>> ", error))
        .then(() => (this.isLoading = false));
    },
    handleScroll() {
      let element = this.$refs.booksList as Element;
      let reachedBottom =
        element.scrollTop + element.clientHeight >= element.scrollHeight;
      if (reachedBottom && !this.isLoading) {
        this.currentIndex += this.maxResults;
        this.getBooks();
      }
    },
  },
};
</script>

<template>
  <div class="search-area">
    <input
      class="search-input text-white"
      type="text"
      v-model="search"
      placeholder="Digite o nome de um livro..."
    />
    <button class="btn btn-dark" @click="searchBooks">Search</button>
  </div>
  <div class="book-list-wrapper" ref="booksList" @scroll="handleScroll">
    <BookList class="book-list" :bookList="result" />
  </div>
  <div v-if="isLoading" class="spinner-border green" role="status">
    <span class="sr-only"></span>
  </div>
</template>

<style scoped>
.spinner-border {
  margin: 1rem 0 0 45%;
}

.search-input {
  width: 30rem;
  padding-left: 1rem;
  border-radius: 4px;
  border: 0.2rem solid var(--bs-gray-800);
  background-color: var(--bs-gray-900);
}

.search-area {
  display: flex;
  margin: auto;
  justify-content: center;
}

.book-list-wrapper {
  margin-top: 1rem;
  overflow-y: scroll;
  max-height: 40rem;
  width: 60rem;
}

.book-list {
  display: flex;
  flex-wrap: wrap;
}

::-webkit-scrollbar {
  width: 0.4rem;
}
::-webkit-scrollbar-thumb {
  background-color: var(--bs-gray-600);
  border-radius: 2px;
}
::-webkit-scrollbar-thumb:hover {
  background-color: var(--bs-gray-700);
}
</style>
