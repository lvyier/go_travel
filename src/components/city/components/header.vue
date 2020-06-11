<template>
  <div>
    <div class="header">
      <span class="iconfont back_icon" @click="handleBack">&#xe606;</span>
      城市选择
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  methods: {
    handleBack() {
      this.$router.go(-1)
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'
  .header
    position: relative;
    height: .86rem;
    line-height: .86rem;
    overflow: hidden;
    text-align: center;
    color: #fff;
    background: $bgColor;
    font-size: .32rem;
    padding-left: .1rem;
    .back_icon
      position: absolute;
      top: 0;
      left: 0;
      width: .64rem;
      text-align: center;
      font-size: .4rem;
      color: #fff;
</style>
