<template>
  <div>
    <div class="banner" @click="handleChange">
      <img class="banner_img" src="//img1.qunarzz.com/sight/p0/2003/98/985f7f9721ace766a3.img.jpg_600x330_f43586d7.jpg" alt="" />
      <div class="banner_info">
        <div class="banner_title">
          大连申亚海洋世界(AAAA景区)
        </div>
        <div class="banner_number">
          <span class="iconfont banner_icon">&#xe64a;</span>
          39
        </div>
      </div>
    </div>
    <common-gallery :imgs="imgs" v-show="show" @change="change"></common-gallery>
  </div>
</template>
<script>
import commonGallery from '../../../assets/common/gallery.vue'
export default {
  data() {
    return {
      show: false,
      imgs: [
        {
          id: '001',
          URLImg: '//img1.qunarzz.com/sight/p0/2003/8a/8ac9cb1b016b1244a3.img.jpg_r_800x800_326d301a.jpg'
        },
        {
          id: '002',
          URLImg: '//img1.qunarzz.com/sight/p0/2003/b2/b258a766a5caeaa8a3.img.jpg_r_800x800_e3b00f7a.jpg'
        },
        {
          id: '003',
          URLImg: '//img1.qunarzz.com/sight/p0/2003/e0/e040c803f2da31c1a3.img.jpg_r_800x800_2ac51443.jpg'
        }
      ]
    }
  },
  methods: {
    handleChange() {
      this.show = true
    },
    change() {
      this.show = false
    }
  },
  components: {
    commonGallery
  }
}
</script>
<style lang="stylus" scoped>
.banner
    position: relative;
    overflow: hidden;
    height: 0;
    padding-bottom: 55%;
    background-color: #eee;
    .banner_img
        width: 100%;
    .banner_info
        display: flex;
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        line-height: .6rem;
        padding-right: .4rem;
        color: #fff;
        background-color: rgba(0,0,0,.8)
        .banner_title
            flex: 1;
            font-size: .32rem;
            padding: 0 .2rem;
        .banner_number
            padding: 0 .4rem;
            height: .32rem;
            line-height: .32rem;
            margin-top: .1rem;
            border-radius: .2rem;
            font-size: .24rem;
            background: rgba(0,0,0,.8);
            color: #fff;
            .banner_icon
                font-size: .24rem;
</style>
