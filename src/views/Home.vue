<template>
  <section class="home">
    <header class="home_header">
      <main class="home_header_mainWrapper">
        <h1>🦋 <br />Unlimited movies, TV shows and more.</h1>
        <p>Watch anywhere. Cancel anytime.</p>
        <span> Ready to watch? Enter the name of your favorite movie. ✨ </span>
        <search-bar v-model="searchTerm" :handleSearch="handleSearch" />
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

import { apiClient, scrollToBottom } from "@/helpers";

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

      scrollToBottom();
      try {
        const { data } = await apiClient.get(
          `?apikey=1c357168&t=${searchTerm}`
        );
        this.movie = data;
        this.searching = false;
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
    background: center / cover url(../assets/images/poster.png)
      rgba(0, 0, 0, 0.4);
    background-blend-mode: multiply;
    text-align: center;
    color: $white;
    background-repeat: no-repeat;

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
        font-size: 36px;
        font-weight: bold;
        @include lp() {
          font-size: 64px;
          line-height: 70px;
        }
      }
      p {
        font-size: 24px;
        @include lp() {
          font-size: 26px;
          line-height: 33px;
        }
      }
      span {
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        margin-bottom: 2.5px;
        @include lp() {
          font-size: 19px;
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
