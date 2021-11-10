<template>
  <main class="modal" :class="{ modal_hide: !show }">
    <div class="modal_content">
      <section class="modal_content_posterSection">
        <img :src="poster" />
        <button type="button">Search for another movie</button>
      </section>

      <section class="modal_content_detailSection">
        <h1 class="modal_content_detailSection_title">{{ title }}</h1>

        <div class="modal_content_detailSection_tags">
          <Tag :text="runtime" />
          <Tag :text="year" />
          <Tag :text="genre" />
        </div>

        <div class="modal_content_detailSection_imbd">
          <img src="@/assets/images/imdb.png" alt="IMDB-RATING" />
          <span>{{ imdbRating }}<sub> / 10</sub></span>
        </div>

        <div class="modal_content_detailSection_overview">
          <h1>Overview</h1>
          <p>{{ plot }}</p>
        </div>

        <div class="modal_content_detailSection_writer">
          <h1>{{ writer }}</h1>
          <p>writer</p>
        </div>
      </section>
    </div>
  </main>

  <div class="modal_mask" v-show="show"></div>
</template>

<script>
import Tag from "./Tag.vue";

export default {
  components: { Tag },
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: "You've got a job",
    },
    plot: {
      type: String,
      default:
        "When a young boy disappears, his mother, a police chief and his friends must confront terrifying supernatural forces in order to get him back.",
    },
    poster: {
      type: String,
      default:
        "https://m.media-amazon.com/images/M/MV5BN2ZmYjg1YmItNWQ4OC00YWM0LWE0ZDktYThjOTZiZjhhN2Q2XkEyXkFqcGdeQXVyNjgxNTQ3Mjk@._V1_SX300.jpg",
    },
    imdbRating: {
      type: String,
      default: "7.5",
    },
    genre: {
      type: String,
      default: "Drama, Fantasy, Horror",
    },
    year: {
      type: String,
      default: "2016",
    },
    runtime: {
      type: String,
      default: "1hr 30min",
    },
    writer: {
      type: String,
      default: "Matt Duffer",
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/breakpoint";
@import "@/styles/variables";

.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  -moz-transform: translateX(-50%) translateY(-50%);
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  border: 1px solid $light-grey;
  z-index: 8000;
  background: #f9f7e8;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  transition: all 0.1s cubic-bezier(0.455, 0.03, 0.515, 0.955);
  margin: 0 auto;
  width: 90%;
  max-height: 95vh;
  min-height: 90vh;
  overflow: auto;

  &_hide {
    opacity: 0;
    visibility: hidden;
  }

  &_content {
    height: 100%;
    overflow-y: auto;
    width: 100%;
    display: grid;
    padding: 18px;

    &_detailSection {
      &_imbd {
        margin-top: 20px;
        display: flex;
        gap: 14px;
        span {
          font-size: 24px;
          sub {
            font-size: 14px;
            position: relative;
            top: -0.05px;
          }
        }
        img {
          border-radius: 10px;
          height: 32px;
          width: 64px;
        }
      }
      &_writer {
        text-align: center;
        width: fit-content;
        margin-top: 20px;
        h1 {
          font-weight: 600;
          font-size: 14px;
        }
        p {
          font-size: 14px;
        }
      }
      &_title {
        font-size: 36px;
        font-weight: bold;
        margin-top: 20px;
        @include lp() {
          margin-top: 0;
          font-size: 67.77px;
          line-height: 90px;
          font-weight: bold;
        }
      }
      &_tags {
        margin-top: 24px;
        display: flex;
        flex-wrap: wrap;
        grid-gap: 20px;
      }

      &_overview {
        margin-top: 20px;
        h1 {
          font-weight: 600;
          font-size: 18px;
        }
        p {
          font-size: 16px;
          line-height: 24px;
        }
      }
    }

    &_posterSection {
      img {
        border-radius: 10px;
      }
      button {
        margin-top: 18px;
        width: 100%;
        background: #e54b4b;
        border-radius: 10px;
        height: 50px;
        font-size: 18px;
        border: none;
        color: $white;
      }
    }

    @include lp() {
      padding: 70px 165px;
      grid-gap: 100px;
      grid-template-columns: 1fr 2fr;
    }
  }

  &_mask {
    position: fixed;
    z-index: 1000;
    cursor: pointer;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 10vh;
    position: fixed;
    background-color: $color-primary;
    opacity: 0.5;
    transition: all 0.4s cubic-bezier(0.455, 0.03, 0.515, 0.955);
  }
}
</style>
