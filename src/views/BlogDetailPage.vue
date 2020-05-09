<template>
  <div>
    <Header />
    <div class="container">
        <BlogDetail />
        <ContentRight />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import BlogDetail from "@/components/BlogDetail.vue";
import ContentRight from "@/components/ContentRight.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: {
    Header,
    BlogDetail,
    ContentRight,
    Footer
  }
};
</script>

