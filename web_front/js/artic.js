ARTIC={
    getType:function(){
        return $.get(APILIST.category)
    },
    getRank:function(type){
        return $.get(APILIST.rank,{type:type})
    },
    getFocusImg:function(){
        return $.get(APILIST.search,{perpage:5})
    },
    getLastest:function(){
        return $.get(APILIST.latest)
    }

}