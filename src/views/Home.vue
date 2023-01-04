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
import NavBar from '../components/Home/NavBar.vue';
import Footer from '../components/Home/Footer.vue';
import Banner from '../components/Home/Banner.vue';
import BodyEnd from '../components/Home/BodyEnd.vue'
import BodyPage from '../components/Home/BodyPage.vue'
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
