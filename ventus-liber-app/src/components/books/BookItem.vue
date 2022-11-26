<script lang="ts">
import type IBook from "@/Interfaces/IBook";
import type { PropType } from "vue";

export default {
  props: {
    book: { type: Object as PropType<IBook> },
  },
  data() {
    return {
      authors: [] as string[],
      image:
        "https://books.google.com.br/googlebooks/images/no_cover_thumb.gif",
    };
  },
  methods: {
    getAuthors() {
      if (this.book?.volumeInfo.authors)
        this.authors = this.book?.volumeInfo.authors;
    },
    getImage() {
      if (this.book?.volumeInfo.imageLinks) {
        if (this.book?.volumeInfo.imageLinks.smallThumbnail)
          this.image = this.book?.volumeInfo.imageLinks.smallThumbnail;
        if (this.book?.volumeInfo.imageLinks.thumbnail)
          this.image = this.book?.volumeInfo.imageLinks.thumbnail;
      }
    },
  },
  mounted() {
    this.getAuthors();
    this.getImage();
  },
};
</script>

<template>
  <div class="card">
    <img :src="image" />
    <div class="card-body">
      <h5 class="author-name">{{ authors.toString() }}</h5>
      <p class="title">{{ book?.volumeInfo.title }}</p>
      <p class="subtitle">{{ book?.volumeInfo.subtitle }}</p>
    </div>
  </div>
</template>

<style scoped></style>
