<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icon></home-icon>
    <home-recommend></home-recommend>
    <home-weekend></home-weekend>
  </div>
</template>
<script>
import HomeHeader from './pages/header.vue'
import HomeSwiper from './pages/swiper.vue'
import HomeIcon from './pages/Icon.vue'
import HomeRecommend from './pages/recommed.vue'
import HomeWeekend from './pages/weekend.vue'
export default {
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcon,
    HomeRecommend,
    HomeWeekend
  }
}
</script>
<style lang="stylus" scope>
h1
 font-size: 1.8rem;
</style>
