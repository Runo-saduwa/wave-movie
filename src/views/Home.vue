<template>
  <section class="home">
    <header class="home_header">
      <h1>Home</h1>
      <search-bar />
    </header>
    <main>
      <movie-card />
    </main>
  </section>
</template>

<script>
import { MovieCard, SearchBar } from "@/components";

export default {
  components: { MovieCard, SearchBar },
};
</script>

<style lang="scss">
@import "@/styles/breakpoint";

.home {
  &_header {
    min-height: 600px;
    background: url(../assets/images/poster.png);
    // background: linear-gradient(
    //     0deg,
    //     rgba(255, 0, 150, 0.3),
    //     rgba(255, 0, 150, 0.3)
    //   ),
    //   url(../assets/images/poster.png);
    background-size: cover;
  }
}
</style>
