<template>
  <main role="button" @click="onViewMovie()" class="movieCard">
    <section class="movieCard_posterSection">
      <p class="movieCard_posterSection_type">
        <span> {{ type }} </span>
      </p>
      <img :src="poster" alt="img" />
    </section>

    <section class="movieCard_extraDetailsSection">
      <p class="movieCard_extraDetailsSection_year">{{ year }}</p>

      <h1 class="movieCard_extraDetailsSection_title">{{ title }}</h1>

      <div class="movieCard_extraDetailsSection_ratings">
        <div class="movieCard_extraDetailsSection_ratings_imdb">
          <img src="@/assets/images/imdb.png" alt="IMDB-RATING" />
          <span>{{ imdbRating }} / 10</span>
        </div>
        <div class="movieCard_extraDetailsSection_ratings_tomatoes">
          <img src="@/assets/images/tomatoes.png" alt="ROTTEN-TOMATOES" />
          <span>{{ rottenTomatoes }} %</span>
        </div>
      </div>

      <p class="movieCard_extraDetailsSection_genre">{{ genre }}</p>
    </section>
  </main>
</template>

<script>
export default {
  name: "MovieCard",
  props: {
    type: String,
    poster: String,
    imdbRating: String,
    rottenTomatoes: String,
    title: String,
    genre: String,
    year: String,
    onViewMovie: Function,
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/variables";
.movieCard {
  max-width: 250px;
  margin: 0 auto;
  :hover {
    cursor: pointer;
  }
  &_posterSection {
    position: relative;
    overflow: hidden;
    box-sizing: border-box;
    img {
      transition: all 0.2s ease-in-out;
      object-fit: cover;
    }
    &:hover img {
      transform: scale(1.1);
    }

    &_type {
      position: absolute;
      z-index: 10;
      left: 16px;
      top: 19.18px;
      display: grid;
      place-items: center;
      background: rgba(243, 244, 246, 0.5);
      backdrop-filter: blur(2px);
      border-radius: 12px;
      width: 74px;
      height: 22px;
      font-weight: bold;
      font-size: 12px;
      line-height: 16px;
      text-transform: uppercase;
    }
  }

  &_extraDetailsSection {
    display: flex;
    flex-direction: column;
    padding-top: 12px;

    &_year {
      font-weight: bold;
      font-size: 12px;
      line-height: 16px;
      color: $gray;
      margin-bottom: 12px;
    }

    &_title {
      font-weight: 400;
      font-size: 18px;
      line-height: 23px;
      margin-bottom: 12px;
    }

    &_ratings {
      display: flex;
      justify-content: space-between;
      margin-bottom: 12px;
      &_imdb,
      &_tomatoes {
        display: flex;
        align-items: center;
      }
      &_imdb {
        img {
          width: 35px;
          height: 17px;
          margin-right: 8px;
        }
      }
      &_tomatoes {
        img {
          width: 16px;
          height: 17px;
          margin-right: 5px;
        }
      }
    }

    &_genre {
      font-weight: bold;
      font-size: 12px;
      line-height: 16px;
      color: $gray;
    }
  }
}
</style>
