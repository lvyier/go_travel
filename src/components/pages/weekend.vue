<template>
  <div>
    <div class="recommend_title">周末去哪儿</div>
    <ul>
      <li class="item" v-for="item of weekendList" :key="item.id">
        <div class="item_img_wrapper">
          <img class="item_img" :src="item.URLImg" alt="" />
        </div>
        <div class="item_info">
          <p class="item_title">{{ item.title }}</p>
          <p class="item_desc">{{ item.detail }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: ['weekendList'],
  data() {
    return {}
  }
}
</script>
<style lang="stylus" scoped>
@import '~@/assets/styles/mixins.styl'
    .recommend_title
        margin-top: .2rem;
        line-height: .8rem;
        background: #eee;
        text-indent: .2rem;
        .item_img_wrapper
            overflow hidden;
            height: 0;
            padding-bottom: 37.09%;
            .item_img
                width:14.4rem;
        .item_info
            padding: .1rem;
            .item_title
                line-height: .54rem;
                font-size: .32rem;
            .item_desc
                ellipsis();
                line-height: .4rem;
                color: #ccc;
</style>
