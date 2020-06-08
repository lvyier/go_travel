<template>
    <div>
        <div class="recommend_title">热销推荐</div>
    <ul>
        <li class="item" v-for=" item of recommedList" :key="item.id">
            <img class="item_img" :src="item.URLImg" alt="">
            <div class="item_info">
                <p class="item_title">{{item.title}}</p>
                <p class="item_desc">{{item.detail}}</p>
                <button class="item_btn">查看详情</button>
            </div>
        </li>
    </ul>
    </div>
</template>
<script>
export default {
    data(){
        return {
            recommedList:[
                {
                    id:'001',
                    URLImg:'https://imgs.qunarzz.com/p/tts7/2005/3d/c41d648b27c1c002.jpg_160x160_282e2e32.jpg',
                    title:'畅游古镇',
                    detail:'古北水镇一日游（50%空座率+分餐制+日游+夜游）'
                },
                {
                    id:'002',
                    URLImg:'https://imgs.qunarzz.com/p/tts4/1912/23/9052593c0e693402.jpg_160x160_23bb7c34.jpg',
                    title:'故宫半日游',
                    detail:'北京故宫+天安门广场+国家博物馆纯玩一日游'
                },
                {
                    id:'003',
                    URLImg:'https://imgs.qunarzz.com/p/tts0/1905/1b/acbaa67ca03c8502.png_160x160_53d17ced.png',
                    title:'五环上门',
                    detail:'北京故宫+八达岭长城1日游|故宫深度半日游'
                }
            ]
        }
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