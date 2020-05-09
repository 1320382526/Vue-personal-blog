<template>
  <div>
    <Header />
    <div class="container">
        <ContentLeft />
        <ContentRight />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import ContentLeft from "@/components/ContentLeft.vue";
import ContentRight from "@/components/ContentRight.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: {
    Header,
    ContentLeft,
    ContentRight,
    Footer
  }
};
</script>

<style scoped>

</style>