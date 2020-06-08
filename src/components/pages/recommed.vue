<template>
  <div>
    <div class="recommend_title">热销推荐</div>
    <ul>
      <li class="item" v-for="item of recommedList" :key="item.id">
        <img class="item_img" :src="item.URLImg" alt="" />
        <div class="item_info">
          <p class="item_title">{{ item.title }}</p>
          <p class="item_desc">{{ item.detail }}</p>
          <button class="item_btn">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: ['recommedList'],
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
    .item
        overflow hidden;
        display: flex;
        height: 1.9rem;
        .item_img
            width: 1.7rem;
            height: 1.7rem;
            padding: 0.1rem;
            border-radius: .1rem;
        .item_info
            flex: 1;
            padding: .1rem;
            min-width: 0;
            .item_title
                line-height: .54rem;
                font-size: .32rem;
            .item_desc
                ellipsis();
                line-height: .4rem;
                color: #ccc;
            .item_btn
                background: #ff9300;
                padding: 0 .1rem;
                border-radius: .06rem;
                margin-top: .2rem;
</style>
