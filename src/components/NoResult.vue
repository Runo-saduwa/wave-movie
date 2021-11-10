<template>
  <div class="no-result">
    <img src="@/assets/svgs/no-result.svg" />
    <h1>{{ message }}</h1>
  </div>
</template>

<script>
export default {
  name: "NoResult",
  props: ["message"],
};
</script>

<style lang="scss" scoped>
@import "@/styles/breakpoint";
.no-result {
  text-align: center;
  padding-top: 50px;
  width: 50%;
  margin: 0 auto;
  @include lp() {
    width: 300px;
  }
}
</style>
