var ARTIC={
    // 文章列表获取
    get(page,type,state){
       return $.get(APILIST.TEXTSEARCH,{page,type,state})
    },
    // 通过id获取文章
    getId:id=> $.get(APILIST.TEXTSEARCH,{id}),
    
    // 文章类别搜索
    gettype:()=>$.get(APILIST.artictype),
    // 新增类别
    addArticType(name,slug){
        return $.post(APILIST.addArticType,{name,slug})
    },
    //删除类别
    delArticType:id=> $.post(APILIST.delArticType,{id}),
    // 编辑类别
    editArticType(id,name,slug){
        return $.post(APILIST.editArticType,{id,name,slug})
    },
    // 文章发布
    add:data=>{
        return $.ajax({
            url:APILIST.fabu,
            data,
            type:"POST",
            processData:false, //不允许处理数据
            contentType:false, //不要设置请求头

        })
    },
    //编辑文章
    edit(data){
        return $.ajax({
            url:APILIST.editArtic,
            type:'post',
            data,
            processData:false,
            contentType:false,
        }) 
    },
    //删除文章
    del:id=>$.get(APILIST.delArtic,{id:id}),
    //获取评论
    addComments:(page,perpage=6)=>{return $.get(APILIST.get_comments,{page,perpage})}




















}