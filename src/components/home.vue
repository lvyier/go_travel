<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icon></home-icon>
  </div>
</template>
<script>
import HomeHeader from './pages/header.vue'
import HomeSwiper from './pages/swiper.vue'
import HomeIcon from './pages/Icon.vue'
export default {
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcon
  }
}
</script>
<style lang="stylus" scope>
h1
 font-size: 1.8rem;
</style>
