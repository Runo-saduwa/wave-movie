<template>
  <div class="search">
    <input
      type="text"
      class="search_searchTerm"
      placeholder="What are you looking for?"
    />
    <button type="submit" class="search_searchButton">
      <img src="@/assets/svgs/search.svg" alt="search" />
    </button>
  </div>
</template>

<script>
export default {
  name: "SearchBar",
};
</script>

<style lang="scss" scoped>
@import "@/styles/variables";
.search {
  display: flex;
  height: 36px;
  max-width: 525px;
  margin: 0 auto;

  &_searchTerm {
    width: 100%;
    color: $white;
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
    background: transparent;
    border: 2px solid #d1d5db;
    border-right: none;
    border-radius: 6px 0 0 6px;
    padding: 6px 10px;
    height: inherit;
    outline: none;
    &::placeholder {
      color: $white;
    }
  }

  &_searchButton {
    width: 30px;
    height: 36px;
    background: transparent;
    text-align: center;
    color: #fff;
    border: 2px solid #d1d5db;
    border-radius: 0 6px 6px 0;
    border-left: none;
    cursor: pointer;
    font-size: 20px;
    img {
      width: 14px;
      height: 14px;
    }
  }
}
</style>
