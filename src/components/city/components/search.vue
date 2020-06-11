<template>
  <div>
    <div class="search">
      <input class="search_input" v-model="keyWords" type="text" placeholder="请输入城市名或拼音" />
    </div>
    <div class="search_content searchs" v-show="keyWords">
      <ul>
        <li class="search_item border-bottom" v-for="item in list" :key="item.id">{{ item.name }}</li>
        <li class="search_item border-bottom" v-show="!this.list.length">没有找到匹配数据</li>
      </ul>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
  props: {
    cities: Object
  },
  data() {
    return {
      keyWords: '',
      list: [],
      timer: null
    }
  },
  watch: {
    keyWords() {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyWords) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (const i in this.cities) {
          this.cities[i].forEach(value => {
            if (value.spell.indexOf(this.keyWords) > -1 || value.name.indexOf(this.keyWords) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
  },
  mounted() {
    const searchs = document.querySelector('.searchs')
    this.scroll = new BScroll(searchs)
  }
}
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
.search_content
  z-index: 1;
  overflow: hidden;
  position: absolute;
  top: 1.58rem;
  left: 0;
  right: 0;
  bottom: 0;
  background: #eee;
  .search_item
    line-height: .62rem;
    padding-left: .2rem;
    color: #666
    border-bottom: .001rem solid #ccc
    background: #fff;
</style>
