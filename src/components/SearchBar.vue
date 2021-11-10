<template>
  <div class="wrap">
    <div class="search">
      <input
        type="text"
        class="searchTerm"
        placeholder="What are you looking for?"
      />
      <button type="submit" class="searchButton">
        <img src="@/assets/svgs/search.svg" alt="img" />
      </button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.search {
  width: 100%;
  position: relative;
  display: flex;
  height: 36px;
}

.searchTerm {
  width: 100%;
  border: 3px solid white;
  border-right: none;
  padding: 5px;
  height: 36px;
  border-radius: 5px 0 0 5px;
  outline: none;
}

.searchTerm:focus {
  color: white;
}

.searchButton {
  width: 40px;
  height: 36px;
  background: #00b4cc;
  text-align: center;
  color: #fff;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  font-size: 20px;
}

.wrap {
}
</style>
