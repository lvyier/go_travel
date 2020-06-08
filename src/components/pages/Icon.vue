<template>
  <div class="icons">
    <swiper :options="swiperOptions">
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.URlImg" alt="" />
          </div>
          <p class="icon-desc">{{ item.desc }}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
export default {
  data() {
    return {
      swiperOptions: {
        loop: true
      },
      iconsList: [
        {
          id: '001',
          URlImg: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
          desc: '景点门票'
        },
        {
          id: '002',
          URlImg: 'http://img1.qunarzz.com/piao/fusion/1803/47/c2b659e048b11602.png',
          desc: '主题乐园'
        },
        {
          id: '003',
          URlImg: 'http://img1.qunarzz.com/piao/fusion/1803/ab/6f7d6e44963c9302.png',
          desc: '泡温泉'
        },
        {
          id: '004',
          URlImg: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/a40ee278d67000f2a29d2e20f6a029b3.png',
          desc: '自然风光'
        },
        {
          id: '005',
          URlImg: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
          desc: '一日游'
        },
        {
          id: '006',
          URlImg: 'http://img1.qunarzz.com/piao/fusion/1803/97/02f5043b51b2102.png',
          desc: '鼓浪屿'
        },
        {
          id: '007',
          URlImg: 'http://img1.qunarzz.com/piao/fusion/1803/96/c70f1e85ae4a4f02.png',
          desc: '武夷山'
        },
        {
          id: '008',
          URlImg: 'http://img1.qunarzz.com/piao/fusion/1803/50/26ffa31b56646402.png',
          desc: '亲子游'
        },
        {
          id: '009',
          URlImg: 'http://img1.qunarzz.com/piao/fusion/1803/b8/c5dcdb58deec2402.png',
          desc: '玩转贵安'
        }
      ]
    }
  },
  computed: {
    pages() {
      const pages = []
      this.iconsList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~@/assets/styles/mixins.styl'
.icons >>> .swiper-container
    overflow hidden;
    height: 0;
    padding-bottom: 50%;
    .icon
        position relative;
        overflow hidden;
        float: left;
        height: 0;
        width: 25%;
        padding-bottom: 25%;
        .icon-img
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: .44rem;
            box-sizing: border-box;
            padding: .1rem;
            .icon-img-content
                display: block;
                margin: 0 auto;
                height: 100%;
        .icon-desc
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            height: .44rem;
            line-height: .44rem;
            text-align: center;
            ellipsis()
            color: #333;
</style>
