<template>
  <div class="list wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button_list">
          <div class="button_wrapper">
            <div class="button">{{ this.$store.state.city }}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button_list">
          <div class="button_wrapper" v-for="item of hot" :key="item.id" @click="changeCity(item.name)">
            <div class="button">{{ item.name }}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(item, key, index) of cities" :key="index" :ref="key">
        <div class="title border-topbottom">{{ key }}</div>
        <div class="item_list">
          <div class="item border-bottom" v-for="data of item" :key="data.id" @click="changeCity(data.name)">
            {{ data.name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
  props: {
    cities: Object,
    hot: Array,
    letter: String
  },
  data() {
    return {}
  },
  methods: {
    changeCity(city) {
      this.$store.commit('changeCity', city)
      this.$router.push('/')
    }
  },
  mounted() {
    const wrapper = document.querySelector('.wrapper')
    this.scroll = new BScroll(wrapper)
  },
  watch: {
    letter() {
      if (this.letter) {
        // 返回值是数组
        const element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
.border-topbottom
    &:before
        border-color: #ccc;
    &:after
        border-color: #ccc;
.border-bottom
    &:before
        border-color: #ccc;
.list
    position: absolute;
    top: 1.56rem;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
    .title
        line-height: .54rem;
        background-color: #eee;
        padding-left: .2rem;
        color: #666;
        font-size: .26rem;
    .button_list
        padding: .1rem .6rem .1rem .1rem;
        overflow: hidden
        .button_wrapper
            float: left;
            width: 33.33%;
            .button
                margin: .1rem;
                padding: .1rem 0;
                text-align: center;
                border: .02rem solid #ccc;
                border-radius: .06rem;
    .item_list
        .item
            line-height: .76rem;
            padding: .2rem;
</style>
