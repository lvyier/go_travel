<template>
  <div>
    <detail-banner></detail-banner>
    <detail-header></detail-header>
    <div class="container"></div>
  </div>
</template>
<script>
import detailBanner from './components/banner'
import detailHeader from './components/header.vue'
export default {
  data() {
    return {
    }
  },
  methods: {},
  components: {
    detailBanner,
    detailHeader
  }
}
</script>
<style lang="stylus" scoped>
.container
  height: 50rem;
</style>
