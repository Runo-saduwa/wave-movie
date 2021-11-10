<template>
  <div>
    <h1>Home</h1>
  </div>
  <search-bar />
  <movie-card />
</template>

<script>
import { MovieCard, SearchBar } from "@/components";

export default {
  components: { MovieCard, SearchBar },
};
</script>

<style lang="scss">
@import "@/styles/breakpoint";
</style>
