<template>
  <div>
    <header-city></header-city>
    <city-search :cities="cities"></city-search>
    <city-list :cities="cities" :hot="hotCities" :letter="letter"></city-list>
    <city-alphate :cities="cities" @change="handleLetter"></city-alphate>
  </div>
</template>
<script>
import HeaderCity from './components/header.vue'
import CitySearch from './components/search.vue'
import CityList from './components/list.vue'
import CityAlphate from './components/Alphate.vue'
export default {
  data() {
    return {
      cities: {},
      hotCities: [],
      letter: ''
    }
  },
  mounted() {
    this.$http.get('/api/city').then(res => {
      console.log(res)
      res = res.data
      if (res.ret && res.status === 200) {
        this.cities = res.cities
        this.hotCities = res.hotCities
      }
    })
  },
  methods: {
    handleLetter(letter) {
      this.letter = letter
    }
  },
  components: {
    HeaderCity,
    CitySearch,
    CityList,
    CityAlphate
  }
}
</script>
<style lang="stylus" scoped></style>
