<template>
  <div>
    <home-header :city="city"></home-header>
    <home-swiper :swiperData="swiperData"></home-swiper>
    <home-icon :iconsList="iconsList"></home-icon>
    <home-recommend :recommedList="recommedList"></home-recommend>
    <home-weekend :weekendList="weekendList"></home-weekend>
  </div>
</template>
<script>
import HomeHeader from './pages/header.vue'
import HomeSwiper from './pages/swiper.vue'
import HomeIcon from './pages/Icon.vue'
import HomeRecommend from './pages/recommed.vue'
import HomeWeekend from './pages/weekend.vue'
// import axios from 'axios'
export default {
  data() {
    return {
      city: '',
      swiperData: [],
      iconsList: [],
      recommedList: [],
      weekendList: []
    }
  },
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcon,
    HomeRecommend,
    HomeWeekend
  },
  methods: {},

  created() {
    this.$http.get('/api/news').then(res => {
      res = res.data
      if (res.status === 200) {
        this.city = res.city
        this.swiperData = res.swiperList
        this.iconsList = res.iconsList
        this.recommedList = res.recommedList
        this.weekendList = res.weekendList
      }
    })
  },
  mounted() {}
}
</script>
<style lang="stylus" scoped></style>
