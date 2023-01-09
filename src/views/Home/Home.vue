<template>
  <div class="home">
    <NavBar />
    <Banner />
    <div>
      <BodyPage />
      <BodyEnd />
    </div>
    <Footer />
  </div>
</template>

<script>
import NavBar from '@/views/Home/components/NavBar.vue';
import Footer from '@/views/Home/components/Footer.vue';
import Banner from '@/views/Home/components/Banner.vue';
import BodyEnd from '@/views/Home/components/BodyEnd.vue';
import BodyPage from '@/views/Home/components/BodyPage.vue';
export default {
  name: 'Home',
  components: {
    NavBar,
    Footer,
    Banner,
    BodyPage,
    BodyEnd
  }
}
</script>

<style scoped>
div {
  display: inline-block;
}
</style>
