<template>
  <div class="wraper">
    <swiper :options="swiperOptions">
      <swiper-slide v-for="item in list" :key="item.id">
        <img class="swiper_img" :src="item.imgURL" alt="" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
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
      },
      list: [
        {
          id: '001',
          imgURL: '//imgs.qunarzz.com/vc/e3/a1/71/f498dfd3bed948d623c9093252.jpg_92.jpg'
        },
        {
          id: '002',
          imgURL: '//imgs.qunarzz.com/vc/44/e9/86/95bc36c9e1c06ebd68bdfe222e.jpg_92.jpg'
        },
        {
          id: '003',
          imgURL: '//imgs.qunarzz.com/vc/6d/9f/35/b8ad5468f73fd60ec0ced086f6.jpg_92.jpg'
        }
      ]
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
