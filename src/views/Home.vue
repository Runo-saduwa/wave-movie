<template>
  <section class="home">
    <header class="home_header">
      <search-bar v-model="searchTerm" :handleSearch="handleSearch" />
    </header>

    <loader v-if="searching" />

    <no-result
      v-else-if="movie.hasOwnProperty('Error')"
      message="Movie not found."
    />

    <template v-else>
      <main class="home_movieList" v-show="movie.hasOwnProperty('Title')">
        <h1 class="home_movieList_title">Search Result</h1>
        <movie-card
          :poster="movie.Poster"
          :title="movie.Title"
          :year="movie.Released"
          :type="movie.Type"
          :onViewMovie="onViewMovieCB"
          :genre="movie.Genre"
          :imdbRating="movie.imdbRating"
          :rottenTomatoes="movie.Metascore"
        />
      </main>
    </template>
  </section>

  <movie-detail-modal
    :onClose="onViewMovieCB"
    :show="showModal"
    :poster="movie.Poster"
    :runtime="movie.Runtime"
    :plot="movie.Plot"
    :title="movie.Title"
    :year="movie.Released"
    :type="movie.Type"
    :onViewMovie="onViewMovieCB"
    :genre="movie.Genre"
    :imdbRating="movie.imdbRating"
    :rated="movie.Rated"
    :writers="movie.Writer"
    :language="movie.Language"
    :actors="movie.Actors"
    :awards="movie.Awards"
    :director="movie.Director"
  />
</template>

<script>
import {
  SearchBar,
  MovieDetailModal,
  MovieCard,
  Loader,
  NoResult,
} from "@/components";

import apiClient from "@/helpers/apiClient";

export default {
  components: {
    SearchBar,
    MovieDetailModal,
    Loader,
    MovieCard,
    NoResult,
  },
  data() {
    return {
      showModal: false,
      searchTerm: "",
      movie: {},
      searching: false,
      error: false,
      errorMessage: "",
    };
  },

  methods: {
    onViewMovieCB() {
      this.showModal = !this.showModal;
    },
    async handleSearch() {
      const { searchTerm } = this;

      if (!searchTerm) {
        return;
      }

      this.searching = true;
      try {
        const { data } = await apiClient.get(
          `?apikey=1c357168&t=${searchTerm}`
        );
        this.movie = data;

        this.searching = false;

        console.log(data);
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/breakpoint";
@import "@/styles/variables";

.home {
  &_header {
    height: 90vh;
    background: center / cover no-repeat url(../assets/images/poster.png) $white;
  }

  &_movieList {
    &_title {
      font-size: 36px;
      font-weight: 700;
      margin-bottom: 44px;
      text-align: center;
    }
    padding: 70px 20px;
    @include lp() {
      padding: 70px 98px;
    }
  }
}
</style>
