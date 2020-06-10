<template>
  <div class="list">
    <div class="item" v-for="(item, key) of cities" :key="key">{{ key }}</div>
  </div>
</template>
<script>
export default {
  props: {
    cities: Object
  }
}
</script>
<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'
    .list
        display: flex;
        position: fixed;
        top: 3rem;
        right: 0;
        width: .4rem;
        flex-direction: column;
        justify-content: center;
        .item
            line-height: .44rem;
            color: $bgColor;
            text-align: center;
</style>
