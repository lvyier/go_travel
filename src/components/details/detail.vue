<template>
  <div>
    <detail-banner @change="handleChange"></detail-banner>
    <common-gallery :imgs="imgs" v-show="show" @change="change"></common-gallery>
  </div>
</template>
<script>
import detailBanner from './components/banner'
import commonGallery from '../../assets/common/gallery.vue'
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
    detailBanner,
    commonGallery
  }
}
</script>
<style lang="stylus" scoped></style>
