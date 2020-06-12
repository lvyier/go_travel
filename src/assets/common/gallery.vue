<template>
  <div class="container" @click="handleChaneg">
    <div class="wrapper">
      <swiper :options="swiperOptions">
        <swiper-slide v-for="item in imgs" :key="item.id">
          <img class="swiper_img" :src="item.URLImg" alt="" />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    imgs: Array
  },
  data() {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        observeParents: true,
        observer: true
      }
    }
  },
  methods: {
    handleChaneg() {
      this.$emit('change')
    }
  }
}
</script>
<style lang="stylus" scoped>
.container >>> .swiper-container
    overflow: inherit;
.container
    display: flex;
    flex-direction: column;
    justify-content: center;
    z-index: 99;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: #000;
    .wrapper
        height: 0;
        width: 100%;
        padding-bottom: 100%;
        .swiper_img
            width: 100%;
        .swiper-pagination
            color: #fff;
            bottom: -1rem;
</style>
