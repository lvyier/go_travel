<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
  </div>
</template>
<script>
import HomeHeader from './pages/header.vue'
import HomeSwiper from './pages/swiper.vue'
export default {
  components: {
    HomeHeader,
    HomeSwiper
  }
}
</script>
<style lang="stylus" scope>
h1
 font-size: 1.8rem;
</style>
