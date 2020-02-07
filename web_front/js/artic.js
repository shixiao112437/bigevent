ARTIC={
    // 文章类型
    getType:function(){
        return $.get(APILIST.category)
    },
    // 排行榜 5个
    getRank:function(type){
        return $.get(APILIST.rank,{type:type})
    },
    getFocusImg:function(){
        return $.get(APILIST.search,{perpage:5})
    },

    getArtic:function(type,perpage,page){
        return $.get(APILIST.search,{type:type,perpage:perpage,page:page})
    },
    getLastest:function(){
        return $.get(APILIST.latest)
    },
    // 文章详情
    getById:function(id){
        return $.get(APILIST.details,{id:id})

    },
    // 最新评论
    getComments:function(type){
        return $.get(APILIST.comments,{type:type})
    },
    //文章评论
    getArticComment:function(id){
        return $.get(APILIST.articComment,{article_id:id})
    },
    addComment:function(name,content,id){
        return $.post(APILIST.addComment,{name:name,content:content,article_id:id})
    }
}