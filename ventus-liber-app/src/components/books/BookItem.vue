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
  <div class="card text-white bg-dark" style="width: 18rem">
    <img class="card-img-top" :src="image" alt="Card image cap" style="height: 8rem;"/>
    <div class="card-body">
      <p class="card-text">{{ authors.toString() }}</p>
      <h5 class="card-title">{{ book?.volumeInfo.title }}</h5>
      <p class="card-text">{{ book?.volumeInfo.subtitle }}</p>
      <a :href="book?.volumeInfo.infoLink" class="btn btn-primary" rel="noopener" target="_blank">Google Books page</a>
    </div>
  </div>
</template>

<style scoped>
.card {
  border-color: var(--bs-gray-800);
  margin: 0 0.5rem 2rem 0.5rem;
}
.card-img-top {
  object-fit: none;
}
</style>
