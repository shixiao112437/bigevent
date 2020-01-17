// 创建一个基地值
var BASE=' http://192.168.172.82:8000';
// 基地址 中的所有接口
var APILIST={
    // 用户登录
    LOGIN:BASE+'/admin/login',
    // 用户退出
    LOGOUT:BASE+'/admin/logout',
    // 用户信息
    USERINFO:BASE+'/admin/getuser',
    // 文章类型
    TEXTTYPE:BASE+'/category',
    // 文章搜索
    TEXTSEARCH:BASE+'/search',
    // 文章热门排行
    TEXTRANK:BASE+'/rank',
    //文章详情
    TEXTDETIALS:BASE+'/article',
    // 最新资讯
    LASTNEWS:BASE+'/lastest',
    // 发布评论
    REVIEW:BASE+'/post_comment',
    //最新评论
    LASTREVIEW:BASE+'/get_latest_comment',
    // 评论列表
    REVIEWLIST:BASE+'/get_comments',
}