<template>
  <div class="list">
    <div class="item">A</div>
    <div class="item">A</div>
    <div class="item">A</div>
    <div class="item">A</div>
    <div class="item">A</div>
    <div class="item">A</div>
    <div class="item">A</div>
  </div>
</template>
<script>
export default {}
</script>
<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'
    .list
        display: flex;
        position: fixed;
        top: 6rem;
        right: 0;
        width: .4rem;
        flex-direction: column;
        justify-content: center;
        .item
            line-height: .44rem;
            color: $bgColor;
            text-align: center;
</style>
