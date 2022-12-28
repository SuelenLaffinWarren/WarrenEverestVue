<template>
  <div class="home">
    <Banner />
    <div>
      <BodyPage />
      <router-view />
      <BodyEnd />
    </div>

  </div>
</template>

<script>
import Banner from '../components/Banner.vue';
import BodyEnd from '../components/BodyEnd.vue'
import BodyPage from '../components/BodyPage.vue'
export default {
  name: 'Home',
  components: {
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
