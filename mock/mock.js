import Mock from 'mockjs'

Mock.mock('/api/news', 'get', () => {
  return {
    status: 200,
    msg: '获取数据成功',
    ret: true,
    city: '北京',
    swiperList: [
      {
        id: '001',
        imgURL: '//imgs.qunarzz.com/vc/e3/a1/71/f498dfd3bed948d623c9093252.jpg_92.jpg'
      },
      {
        id: '002',
        imgURL: '//imgs.qunarzz.com/vc/44/e9/86/95bc36c9e1c06ebd68bdfe222e.jpg_92.jpg'
      },
      {
        id: '003',
        imgURL: '//imgs.qunarzz.com/vc/6d/9f/35/b8ad5468f73fd60ec0ced086f6.jpg_92.jpg'
      }
    ],
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
    ],
    recommedList: [
      {
        id: '001',
        URLImg: 'https://imgs.qunarzz.com/p/tts7/2005/3d/c41d648b27c1c002.jpg_160x160_282e2e32.jpg',
        title: '畅游古镇',
        detail: '古北水镇一日游（50%空座率+分餐制+日游+夜游）'
      },
      {
        id: '002',
        URLImg: 'https://imgs.qunarzz.com/p/tts4/1912/23/9052593c0e693402.jpg_160x160_23bb7c34.jpg',
        title: '故宫半日游',
        detail: '北京故宫+天安门广场+国家博物馆纯玩一日游'
      },
      {
        id: '003',
        URLImg: 'https://imgs.qunarzz.com/p/tts0/1905/1b/acbaa67ca03c8502.png_160x160_53d17ced.png',
        title: '五环上门',
        detail: '北京故宫+八达岭长城1日游|故宫深度半日游'
      }
    ],
    weekendList: [
      {
        id: '001',
        URLImg: 'https://imgs.qunarzz.com/sight/source/1505/68/de862f94e383a6.jpg_r_640x214_f9df927b.jpg',
        title: '福州打卡',
        detail: '大美福州，必游之处'
      },
      {
        id: '002',
        URLImg: 'https://imgs.qunarzz.com/sight/source/1505/f6/82acfa5c7f472c.jpg_r_640x214_508da3cb.jpg',
        title: '熊孩子玩乐',
        detail: '与数千种海洋动物亲切对话，看人鲨共舞惊心动魄、梦幻美人鱼婀娜多姿、海狮幽默的表演'
      },
      {
        id: '003',
        URLImg: 'https://imgs.qunarzz.com/sight/source/1509/b5/07bc81fc254ed6.jpg_r_640x214_8879c815.jpg',
        title: '土楼秘密',
        detail: '一座座神秘的建筑，一段段传奇的历史，在这里深刻体会历史留下的点点足迹，感受闽文化'
      }
    ]
  }
})
// /* Mock.mock('/api/news','get',{
//     status:200,
//     msg:'hello'
// }) */
