var user = {
    // 获取信息
    getinfoShow: function () {
        $.get('http://192.168.172.82:8000/admin/getuser').then(function (res) {
            console.log(res);
            // 渲染数据
            $('#username').text(res.data.nickname);
            $('.userimg').prop('src', res.data.user_pic)
        })
    },
    // 退出
    loginout: function () {
        $.post('http://192.168.172.82:8000/admin/logout')
            .then(function (res) {
                console.log(res);
                if (res.code == 200) {
                    location.href = 'login.html'
                }
            })
    },
    // 登录
    login: function () {
        var username = $('.input_txt').val().trim();
        var password = $('.input_pass').val().trim();
        if (username.length == 0 || password.length == 0) {
            alert('账号密码不能为空');
            return
        }
        $.post('http://192.168.172.82:8000/admin/login', {
            user_name: username,
            password: password
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
