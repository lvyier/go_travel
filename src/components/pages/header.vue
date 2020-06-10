<template>
  <div class="header">
    <div class="header_left">
      <span class="iconfont back_icon">&#xe606;</span>
    </div>
    <div class="header_center">
      <span class="iconfont">&#xe643;</span>
      输入城市/景点/游玩主题
    </div>
    <div class="header_right">
      <router-link to='/city' class="header_city">
         {{ this.city }}
      <span class="iconfont arrow_icon">&#xe615;</span>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  props: ['city'],
  data() {
    return {}
  }
}
</script>
<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'
.header
    display :flex;
    line-height: .86rem;
    background: $bgColor;
    color: #fff;
    .header_left
        width: .64rem;
        .back_icon
            display: block;
            font-size: .4rem;
            text-align: center;
    .header_center
        flex:1;
        height: .64rem;
        line-height .64rem;
        margin-top: .12rem;
        margin-left: .2rem;
        padding-left: .2rem;
        background-color #fff;
        color: #eee
        border-radius: .1rem;
    .header_right
        width: 1.24rem;
        text-align: center;
        .header_city
          color: #fff;
        .arrow_icon
            font-size: .24rem;
</style>
