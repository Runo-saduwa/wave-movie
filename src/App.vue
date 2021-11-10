<template>
  <router-view></router-view>
  <Footer />
</template>

<script>
import { Footer } from "@/components";

export default {
  name: "App",
  components: {
    Footer,
  },
};
</script>
