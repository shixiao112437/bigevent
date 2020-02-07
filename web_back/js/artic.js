var ARTIC={
    // 文章列表获取
    get:function(page,type,state){
       return $.get(APILIST.TEXTSEARCH,{'page':page,'type':type,'state':state})
    },
    // 通过id获取文章
    getId:function(id){
        return $.get(APILIST.TEXTSEARCH,{'id':id})
    },
    // 文章类别搜索
    gettype:function(){
        return $.get(APILIST.artictype)
    },
    // 新增类别
    addArticType:function(a,b){
        return $.post(APILIST.addArticType,{name:a,slug:b})
    },
    //删除类别
    delArticType:function(id){
        return $.post(APILIST.delArticType,{id:id})
    },
    // 编辑类别
    editArticType:function(id,name,slug){
        return $.post(APILIST.editArticType,{id:id,name:name,slug:slug})
    },
    // 文章发布
    add:function(data){
        return $.ajax({
            url:APILIST.fabu,
            data:data,
            type:"POST",
            processData:false, //不允许处理数据
            contentType:false, //不要设置请求头

        })
    },
    edit:function(data){
        return $.ajax({
            url:APILIST.editArtic,
            type:'post',
            data:data,
            processData:false,
            contentType:false,
        }) 
    },
    del:function(id){
        return $.get(APILIST.delArtic,{id:id})
    }




















}