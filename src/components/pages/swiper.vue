<template>
  <div class="wraper">
    <swiper :options="swiperOptions">
      <swiper-slide v-for="item in swiperData" :key="item.id">
        <img class="swiper_img" :src="item.imgURL" alt="" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  props: ['swiperData'],
  data() {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        loop: true,
        observer: true,
        observeParents: true,
        autoplay: {
          delay: 20000,
          disableOnInteraction: false
        }
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
.wraper >>> .swiper-pagination-bullet-active
    background: #fff;
.wraper
    overflow: hidden;
    width: 100%;
    height: 0;
    padding-bottom: 31.25%;
    background-color #eee;
    .swiper_img
        width: 100%;
</style>
