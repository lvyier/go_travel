<template>
    <div>
        <div class="recommend_title">周末去哪儿</div>
    <ul>
        <li class="item" v-for=" item of recommedList" :key="item.id">
            <div class="item_img_wrapper">
                <img class="item_img" :src="item.URLImg" alt="">
            </div>
            
            <div class="item_info">
                <p class="item_title">{{item.title}}</p>
                <p class="item_desc">{{item.detail}}</p>
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
                    URLImg:'https://imgs.qunarzz.com/sight/source/1505/68/de862f94e383a6.jpg_r_640x214_f9df927b.jpg',
                    title:'福州打卡',
                    detail:'大美福州，必游之处'
                },
                {
                    id:'002',
                    URLImg:'https://imgs.qunarzz.com/sight/source/1505/f6/82acfa5c7f472c.jpg_r_640x214_508da3cb.jpg',
                    title:'熊孩子玩乐',
                    detail:'与数千种海洋动物亲切对话，看人鲨共舞惊心动魄、梦幻美人鱼婀娜多姿、海狮幽默的表演'
                },
                {
                    id:'003',
                    URLImg:'https://imgs.qunarzz.com/sight/source/1509/b5/07bc81fc254ed6.jpg_r_640x214_8879c815.jpg',
                    title:'土楼秘密',
                    detail:'一座座神秘的建筑，一段段传奇的历史，在这里深刻体会历史留下的点点足迹，感受闽文化'
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
        .item_img_wrapper
            overflow hidden;
            height: 0;
            padding-bottom: 33.9%;
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