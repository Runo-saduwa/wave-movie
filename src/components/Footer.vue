<template>
  <footer class="footer">
    <p>© MovieBox by Runo Saduwa 🦋</p>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="scss" scoped>
@import "@/styles/variables";
.footer {
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    text-align: center;
    color: $gray;
  }
}
</style>
