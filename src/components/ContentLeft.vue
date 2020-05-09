<template>
  <div class="content_left">
    <EveryDay />
    <Blog />
  </div>
</template>

<script>
import Blog from "@/components/Blog";
import EveryDay from "@/components/EveryDay";
export default {
  components: {
    Blog,
    EveryDay
  }
};
</script>

<style scoped>
.container .content_left {
  width: 60%;
  display: inline-block;
}
</style>