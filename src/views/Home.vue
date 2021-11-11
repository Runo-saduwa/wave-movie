<template>
  <section class="home">
    <header class="home_header">
      <span class="home_header_logo">WaveBox 🦋</span>
      <main class="home_header_mainWrapper">
        <h1>🦋 <br />Unlimited movies, TV shows and more.</h1>
        <p>Watch anywhere. Cancel anytime ✨.</p>
        <search-bar
          placeholder="What are you looking for? E.g Fast"
          v-model="searchTerm"
          :handleSearch="handleSearch"
        />
      </main>
    </header>

    <loader v-if="searching" />

    <no-result
      v-else-if="movie.hasOwnProperty('Error')"
      :message="movie.Error"
    />

    <template v-else>
      <main
        id="box"
        class="home_movieList"
        v-show="movie.hasOwnProperty('Title')"
      >
        <h1 class="home_movieList_title">Search Result</h1>
        <movie-card
          :poster="movie.Poster"
          :title="movie.Title"
          :year="movie.Released"
          :type="movie.Type"
          @view-movie="viewMovieDetails"
          :genre="movie.Genre"
          :imdbRating="movie.imdbRating"
          :rottenTomatoes="movie.Metascore"
        />
      </main>
    </template>
  </section>

  <!-- Modal that shows only when showModal is true -->
  <movie-detail-modal
    @close-modal="viewMovieDetails"
    :show="showModal"
    :poster="movie.Poster"
    :runtime="movie.Runtime"
    :plot="movie.Plot"
    :title="movie.Title"
    :year="movie.Released"
    :type="movie.Type"
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

import { apiClient, scrollToBottom } from "@/helpers";

import config from "../config";

export default {
  name: "Home",
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
    };
  },

  methods: {
    viewMovieDetails() {
      this.showModal = !this.showModal;
    },
    async handleSearch() {
      const { searchTerm } = this;
      const searchQuery = `?apikey=${config.apiKey}&t=${searchTerm}`;

      if (!searchTerm) return;

      this.searching = true;

      scrollToBottom();

      try {
        const { data } = await apiClient.get(searchQuery);
        this.movie = data;
        this.searching = false;
      } catch (error) {
        console.log(error);
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
    position: relative;
    height: 90vh;
    background: center / cover url(../assets/images/poster.png)
      rgba(0, 0, 0, 0.5);
    background-blend-mode: multiply;
    text-align: center;
    color: $white;
    background-repeat: no-repeat;

    &_logo {
      position: absolute;
      left: 25px;
      top: 25px;
      font-size: 24px;
      font-weight: 600;
      letter-spacing: -0.03em;
    }

    &_mainWrapper {
      display: flex;
      gap: 18px;
      flex-direction: column;
      justify-content: center;
      margin: 0 auto;
      width: 90%;
      height: 90%;

      @include lp() {
        width: 50%;
        height: 90%;
      }
      h1 {
        font-weight: bold;
        font-weight: 600;
        letter-spacing: -0.03em;
        font-size: 36px;
        line-height: 40px;
        margin-bottom: 10px;
        @include lp() {
          letter-spacing: -0.05em;
          line-height: 60px;
          font-size: 64px;
        }
      }
      p {
        font-size: 18px;
        line-height: 30px;
        margin-bottom: 10px;
        @include lp() {
          font-size: 24px;
          line-height: 40px;
        }
      }
    }
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
