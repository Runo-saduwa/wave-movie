<template>
  <div class="tag">
    <span>{{ text }}</span>
  </div>
</template>

<script>
export default {
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
}
</style>
