var user = {
    // 获取信息
    getinfoShow: function () {
        $.get(APILIST.USERINFO)
        .then(function (res) {
            console.log(res);
            // 渲染数据
            $('#username').text(res.data.nickname);
            $('.userimg').prop('src', res.data.user_pic)
        })
    },
    // 退出
    loginout: function () {
        $.post(APILIST.LOGOUT)
            .then(function (res) {
                console.log(res);
                if (res.code == 200) {
                    location.href = 'login.html'
                }
            })
    },
    // 登录
    login: function (a,b) {

        $.post(APILIST.LOGIN, {
            user_name: a,
            password: b
        }).then(function (res) {
            console.log(res);//获取返回的数据
            if (res.code == 200) {
                alert('登录成功')
                location.href = 'index.html'
            } else if (res.code == 400) {
                alert(res.msg)
            }
        })

    }

}
