const CUSTOMER_SITES = {
    qiqi: {
        api: 'https://www.qiqidys.com/api.php/provide/vod',
        name: '七七资源',
    },
    aqyzy: {
        api: 'https://iqiyizyapi.com/api.php/provide/vod',
        name: '🎬爱奇艺'
    },
    caijidb: {
        api: 'https://caiji.dbzy5.com/api.php/provide/vod',
        name: '🎬豆瓣资源'
    },
    tyyszyapi: {
        api: 'https://tyyszy.com/api.php/provide/vod',
        name: '🎬天涯影视'
    },
    'ckzy.me': {
        api: 'https://ckzy.me/api.php/provide/vod',
        name: '🎬CK资源'
    },
    maotaizy: {
        api: 'https://caiji.maotaizy.cc/api.php/provide/vod',
        name: '🎬茅台资源'
    },
    wolong: {
        api: 'https://wolongzyw.com/api.php/provide/vod',
        name: '🎬卧龙资源'
    },
    ikun: {
        api: 'https://ikunzyapi.com/api.php/provide/vod',
        name: '🎬iKun资源'
    },
    lzi: {
        api: 'https://cj.lziapi.com/api.php/provide/vod',
        name: '🎬量子资源'
    },
    dyttzy: {
        api: 'http://caiji.dyttzyapi.com/api.php/provide/vod',
        name: '🎬电影天堂'
    },
    '1080y': {
        api: 'https://api.yzzy-api.com/inc/apijson.php',
        name: '🎬优质资源'
    },
    myzy: {
        api: 'https://api.maoyanapi.top/api.php/provide/vod',
        name: '🎬猫眼资源'
    },
    lzcaiji: {
        api: 'https://cj.lzcaiji.com/api.php/provide/vod',
        name: '🎬量子资源'
    },
    ruyi: {
        api: 'https://dl.hafrey.dpdns.org/?url=https://cj.rycjapi.com/api.php/provide/vod',
        name: '🎬如意资源'
    },
    zy360: {
        api: 'https://360zy.com/api.php/provide/vod',
        name: '🎬360资源'
    },
    collectwolongzy: {
        api: 'https://collect.wolongzyw.com/api.php/provide/vod',
        name: '🎬卧龙资源1'
    },
    jisu: {
        api: 'https://jszyapi.com/api.php/provide/vod',
        name: '🎬极速资源'
    },
    mdzy: {
        api: 'https://www.mdzyapi.com/api.php/provide/vod',
        name: '🎬魔都资源'
    },
    mozhuazy: {
        api: 'https://dl.hafrey.dpdns.org/?url=https://mozhuazy.com/api.php/provide/vod',
        name: '🎬魔爪资源'
    },
    ffzy1: {
        api: 'https://api.ffzyapi.com/api.php/provide/vod',
        name: '🎬非凡资源'
    },
    ffzy: {
        api: 'https://cj.ffzyapi.com/api.php/provide/vod',
        name: '🎬非凡影视'
    },
    bfzy: {
        api: 'https://bfzyapi.com/api.php/provide/vod',
        name: '🎬暴风资源'
    },
    zuid: {
        api: 'https://api.zuidapi.com/api.php/provide/vod',
        name: '🎬最大资源'
    },
    zuidazy: {
        api: 'https://zuidazy.me/api.php/provide/vod',
        name: '🎬最大点播'
    },
    yinghua: {
        api: 'https://m3u8.apiyhzy.com/api.php/provide/vod',
        name: '🎬樱花资源'
    },
    wujin: {
        api: 'https://api.wujinapi.me/api.php/provide/vod',
        name: '🎬无尽资源'
    },
    wujincom: {
        api: 'https://api.wujinapi.com/api.php/provide/vod',
        name: '🎬无尽资源1'
    },
    xsd_sdzyapi: {
        api: 'https://xsd.sdzyapi.com/api.php/provide/vod',
        name: '🎬索尼资源'
    },
    kuaichezy: {
        api: 'https://caiji.kuaichezy.org/api.php/provide/vod',
        name: '🎬快车资源'
    },
    xinlangapi: {
        api: 'https://api.xinlangapi.com/xinlangapi.php/provide/vod',
        name: '🎬新浪资源'
    },
    wwzy: {
        api: 'https://wwzy.tv/api.php/provide/vod',
        name: '🎬旺旺短剧'
    },
    apiwwzy: {
        api: 'https://api.wwzy.tv/api.php/provide/vod',
        name: '🎬旺旺资源'
    },
    hhzyapi: {
        api: 'https://hhzyapi.com/api.php/provide/vod',
        name: '🎬豪华资源'
    },
    subocaiji: {
        api: 'https://subocaiji.com/api.php/provide/vod',
        name: '🎬速播资源'
    },
    xiaomaomi: {
        api: 'https://zy.xmm.hk/api.php/provide/vod',
        name: '🎬小猫咪'
    },
    huyaapi: {
        api: 'https://www.huyaapi.com/api.php/provide/vod/at/json',
        name: '🎬虎牙资源'
    },
    jinyingzy: {
        api: 'https://jinyingzy.com/api.php/provide/vod',
        name: '🎬金鹰点播'
    },
    jyzyapi: {
        api: 'https://jyzyapi.com/provide/vod/from/jinyingyun/at/json',
        name: '🎬金鹰资源'
    },
    p2100: {
        api: 'https://p2100.net/api.php/provide/vod',
        name: '🎬飘零资源'
    },
    uku: {
        api: 'https://dl.hafrey.dpdns.org/?url=https://api.ukuapi.com/api.php/provide/vod',
        name: '🎬U酷资源'
    },
    ukuapi88: {
        api: 'https://dl.hafrey.dpdns.org/?url=https://api.ukuapi88.com/api.php/provide/vod',
        name: '🎬U酷88'
    },
    guangsuapi: {
        api: 'https://api.guangsuapi.com/api.php/provide/vod',
        name: '🎬光速资源'
    },
    hongniuzy: {
        api: 'https://www.hongniuzy2.com/api.php/provide/vod',
        name: '🎬红牛资源'
    },
    modu: {
        api: 'https://caiji.moduapi.cc/api.php/provide/vod',
        name: '🎬魔都动漫'
    },
    '/91md.me': {
        api: 'https://91md.me/api.php/provide/vod',
        name: '🔞91麻豆'
    },
    lbapiby: {
        api: 'http://lbapiby.com/api.php/provide/vod',
        name: '🔞AIvin'
    },
    bwzy2: {
        api: 'https://api.bwzyz.com/api.php/provide/vod',
        name: '🔞百万资源'
    },
    souavzy: {
        api: 'https://api.souavzy.vip/api.php/provide/vod',
        name: '🔞souavZY'
    },
    '155zy': {
        api: 'https://155api.com/api.php/provide/vod',
        name: '🔞155资源'
    },
    apiyutu: {
        api: 'https://apiyutu.com/api.php/provide/vod',
        name: '🔞玉兔资源'
    },
    afhapi9: {
        api: 'http://fhapi9.com/api.php/provide/vod',
        name: '🔞番号资源'
    },
    '.kxgav': {
        api: 'https://www.kxgav.com/api/json.php',
        name: '🔞白嫖资源'
    },
    jingpinx: {
        api: 'https://www.jingpinx.com/api.php/provide/vod',
        name: '🔞精品资源'
    },
    apilsbzy1: {
        api: 'https://apilsbzy1.com/api.php/provide/vod',
        name: '🔞老色逼'
    },
    thzy: {
        api: 'https://thzy1.me/api.php/provide/vod',
        name: '🔞桃花资源'
    },
    yyzy: {
        api: 'https://www.yyzywcj.com/api.php/provide/vod',
        name: '🔞优优资源'
    },
    xjzy: {
        api: 'https://api.xiaojizy.live/provide/vod',
        name: '🔞小鸡资源'
    },
    '.pgxdy': {
        api: 'https://www.pgxdy.com/api/json.php',
        name: '🔞黄AVZY'
    },
    hsckzy: {
        api: 'https://hsckzy.xyz/api.php/provide/vod',
        name: '🔞黄色仓库'
    },
    dnzzy: {
        api: 'https://apidanaizi.com/api.php/provide/vod',
        name: '🔞大奶子'
    },
    xxbzy: {
        api: 'https://www.xxibaozyw.com/api.php/provide/vod',
        name: '🔞细胞资源'
    },
    jkunaklmzy: {
        api: 'https://jkunzyapi.com/api.php/provide/vod',
        name: '🔞jkun资源'
    },
    xbzy: {
        api: 'https://xingba111.com/api.php/provide/vod',
        name: '🔞杏吧资源'
    },
    'api.sexnguon': {
        api: 'https://api.sexnguon.com/api.php/provide/vod',
        name: '🔞色南国'
    },
    lbapi9: {
        api: 'https://lbapi9.com/api.php/provide/vod',
        name: '🔞乐播资源'
    },
    msnii: {
        api: 'https://www.msnii.com/api/json.php',
        name: '🔞美少女'
    },
    aosikazy: {
        api: 'https://aosikazy.com/api.php/provide/vod',
        name: '🔞奥斯卡'
    },
    Naixxzy: {
        api: 'https://Naixxzy.com/api.php/provide/vod',
        name: '🔞奶香资源'
    },
    slapibf: {
        api: 'https://beiyong.slapibf.com/api.php/provide/vod',
        name: '🔞森林资源'
    },
    semaozy: {
        api: 'https://caiji.semaozy.net/inc/apijson_vod.php/provide/vod',
        name: '🔞色猫资源'
    },
    'apilj.com': {
        api: 'https://apilj.com/api.php/provide/vod',
        name: '🔞辣椒资源'
    },
    shayuapi: {
        api: 'https://shayuapi.com/api.php/provide/vod',
        name: '🔞鲨鱼资源'
    },
    xzybb21: {
        api: 'https://xzybb2.com/api.php/provide/vod',
        name: '🔞幸资源'
    },
    dadiapi: {
        api: 'https://dadiapi.com/feifei2',
        name: '🔞大地资源'
    },
    zuiseapi: {
        api: 'https://api.zuiseapi.com/api.php/provide/vod',
        name: '🔞最色资源'
    },
    douapi: {
        api: 'https://api.douapi.cc/api.php/provide/vod',
        name: '🔞豆豆资源'
    },
    xzybb2: {
        api: 'https://api.ddapi.cc/api.php/provide/vod',
        name: '🔞滴滴资源'
    },
    swzy: {
        api: 'https://siwazyw.tv/api.php/provide/vod/at/json',
        name: '🔞丝袜资源'
    }
};

// 调用全局方法合并
if (window.extendAPISites) {
    window.extendAPISites(CUSTOMER_SITES);
} else {
    console.error("错误：请先加载 config.js！");
}
