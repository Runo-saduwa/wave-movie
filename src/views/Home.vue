<template>
  <section class="home">
    <header class="home_header">
      <search-bar />
    </header>
    <main class="home_movieList">
      <h1 class="home_movieList_title">Search Results</h1>
      <movie-card />
    </main>
  </section>
</template>

<script>
import { SearchBar, MovieCard } from "@/components";

export default {
  components: { SearchBar, MovieCard },
};
</script>

<style lang="scss">
@import "@/styles/breakpoint";

.home {
  &_header {
    height: 90vh;
    background: url(../assets/images/poster.png);
    background-position: center center;
    background-size: cover;
  }

  &_movieList {
    &_title {
      font-size: 36px;
      font-weight: 700;
      margin-bottom: 44px;
    }
    padding: 70px 98px;
  }
}
</style>
