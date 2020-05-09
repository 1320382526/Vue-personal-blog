<template>
  <div>
    <Header />
    <div class="container">
        <GuestBook />
        <ContentRight />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import GuestBook from "@/components/GuestBook.vue";
import ContentRight from "@/components/ContentRight.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: {
    Header,
    GuestBook,
    ContentRight,
    Footer
  }
};
</script>
