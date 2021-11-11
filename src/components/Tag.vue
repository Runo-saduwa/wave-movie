<template>
  <div class="tag">
    <span>{{ text }}</span>
  </div>
</template>

<script>
export default {
  name: "Tag",
  props: {
    text: String,
  },
};
</script>

<style lang="scss" scoped>
.tag {
  background: #efe8d8;
  border-radius: 10px;
  padding: 8px;
  width: fit-content;
  margin: 8px;
}
</style>
