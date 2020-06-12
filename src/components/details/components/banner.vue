<template>
  <div class="banner" @click="handleChaneg">
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
</template>
<script>
export default {
  methods: {
    handleChaneg() {
      this.$emit('change')
    }
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
