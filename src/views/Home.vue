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
import NavBar from '../components/NavBar.vue';
import Footer from '../components/Footer.vue';
import Banner from '../components/Banner.vue';
import BodyEnd from '../components/BodyEnd.vue'
import BodyPage from '../components/BodyPage.vue'
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
