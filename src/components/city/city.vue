<template>
  <div>
    <header-city></header-city>
    <city-search></city-search>
    <city-list></city-list>
    <city-alphate></city-alphate>
  </div>
</template>
<script>
import HeaderCity from './components/header.vue'
import CitySearch from './components/search.vue'
import CityList from './components/list.vue'
import CityAlphate from './components/Alphate.vue'
export default {
  components: {
    HeaderCity,
    CitySearch,
    CityList,
    CityAlphate
  }
}
</script>
<style lang="stylus" scoped></style>
