// 创建一个基地值
var BASE='http://192.168.0.107:8000';
// 基地址 中的所有接口
var APILIST={
    // 获取文章类别
    category:BASE+'/category',
    // 排行
    rank:BASE+'/rank',
    //文章搜索
    search:BASE+'/search',
    // 最新资讯
    latest:BASE+'/lastest',
    //    详情文章
    details:BASE+'/article',
    // 最新评论
    comments:BASE+'/get_latest_comments',
    //文章 评论 
    articComment:BASE+'/get_comments',
    // 发布评论
    addComment:BASE+'/post_comment',


}