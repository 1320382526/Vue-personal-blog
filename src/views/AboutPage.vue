<template>
  <div>
    <Header />
    <div class="container">
        <About />
        <ContentRight />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import About from "@/components/About.vue";
import ContentRight from "@/components/ContentRight.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: {
    Header,
    About,
    ContentRight,
    Footer
  }
};
</script>
