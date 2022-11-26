<script lang="ts">
import type IBook from "@/Interfaces/IBook";

export default {
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
          `https://www.googleapis.com/books/v1/volumes?q=${this.search}&startIndex=${this.startIndex}`
        )
        .then((response) => {
          this.result = response.data.items as IBook[];
          console.log(response.data.items);
          
          console.log('this.result :>> ', this.result);
        })
        .catch((error) => console.log("error :>> ", error))
        .then(() => (this.isLoading = false));
    },
  },
};
</script>

<template>
  <input type="text" v-model="search" />
  <button @click="listBooks">Search</button>
  <div>
      <BookList :bookList="result"/>
  </div>
</template>

<style scoped></style>
