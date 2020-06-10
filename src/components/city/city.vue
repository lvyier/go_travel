<template>
  <div>
    <header-city></header-city>
    <city-search></city-search>
  </div>
</template>
<script>
import HeaderCity from './components/header.vue'
import CitySearch from './components/search.vue'
export default {
  components: {
    HeaderCity,
    CitySearch
  }
}
</script>
<style lang="stylus" scoped></style>
