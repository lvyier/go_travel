<template>
  <div class="search">
    <input class="search_input" type="text" placeholder="请输入城市名或拼音" />
  </div>
</template>
<script>
export default {}
</script>
<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'
    .search
        height: .72rem;
        padding: 0 .2rem;
        background-color: $bgColor;
        .search_input
            height: .62rem;
            line-height: .62rem;
            width: 100%;
            border-radius: .1rem;
            box-sizing: border-box;
            padding: 0 .1rem;
            text-align: center;
            color: #666;
</style>
