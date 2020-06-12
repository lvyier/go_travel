<template>
  <div>
    <router-link tag="div" class="header_abs" to="/" v-show="showabs">
      <span class="iconfont back_icon">&#xe606;</span>
    </router-link>
    <div class="header_fixed" v-show="!showabs" :style="showOpacity">
      <router-link tag="div" to="/">
        <span class="iconfont header_icon">&#xe606;</span>
      </router-link>
      景点详情
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showabs: true,
      showOpacity: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll() {
      console.log('scroll')

      const scroll = document.documentElement.scrollTop
      if (scroll > 52) {
        let opacity = scroll / 130
        opacity = opacity > 1 ? 1 : opacity
        this.showOpacity = {
          opacity
        }
        this.showabs = false
      } else {
        this.showabs = true
      }
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  unmounted() {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>
<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'
.header_abs
    position: absolute;
    left: .2rem;
    top: .2rem;
    width: .8rem;
    height: .8rem;
    line-height: .8rem;
    border-radius: .4rem;
    background: rgba(0,0,0,.8)
    text-align: center;
    .back_icon
        color: #fff;
        font-siz: .4rem;
.header_fixed
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
    background: $bgColor;
    height: $headerHeight;
    line-height: $headerHeight;
    font-size: .32rem;
    color: #fff;
    .header_icon
        position: absolute;
        top: 0;
        left: 0;
        width: .64rem;
        text-align: center;
        font-size: .4rem;
</style>
