<script lang="ts">
import Header from "./components/Header.vue";
import BookSearch from "./components/books/BookSearch.vue";
export default {
  components: {
    Header,
    BookSearch,
  },
};
</script>

<template>
  <header>
    <Header />
  </header>

  <main>
    <BookSearch />
  </main>
</template>

<style scoped>
main {
  margin: 1rem auto;
}
</style>
