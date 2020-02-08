// 创建一个基地值
var BASE='http://192.168.0.107:8000';
// 基地址 中的所有接口
        //所有没有admin的都能删除  没用
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
    TEXTSEARCH:BASE+'/admin/search',
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
    // 文章类别搜索
    artictype:BASE+'/admin/category_search',
    // 新增文章类别
    addArticType:BASE+'/admin/category_add',
    // 删除文章类别
    delArticType:BASE+'/admin/category_delete',
    //编辑文章类别
    editArticType:BASE+'/admin/category_edit',
    // 文章发布
    fabu:BASE+'/admin/article_publish',
    //编辑文章
    editArtic:BASE+'/admin/article_edit',
    //删除文章
    delArtic: BASE+'/admin/article_delete',
    //后端 文章评论
    get_comments:BASE+'/admin/comment_search'
    

}