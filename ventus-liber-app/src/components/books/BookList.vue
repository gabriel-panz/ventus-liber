<script lang="ts">
import type IBook from "@/Interfaces/IBook";
import type { PropType } from "vue";
import BookItem from "./BookItem.vue";

export default {
  components: {
    BookItem,
  },
  props: {
    bookList: { type: [] as PropType<IBook[]> },
  },
};
</script>

<template>
  <div>
    <p>a</p>
    <BookItem :book="book" v-for="book in bookList" :key="book.id" />
  </div>
</template>

<style scoped></style>
