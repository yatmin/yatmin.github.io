/**
 * Created by Administrator on 2016/5/17.
 */
//页面加载完毕，后触函数
window.onload = function(){


    // 获取A标签
    var Top = document.getElementById('Top');
    //定时器
    var TimeTop = null;
    var IsTop = true;
    var clientHeight = document.documentElement.clientHeight;
    var clientWidth = document.documentElement.clientWidth;

    if(clientWidth>992) {
        //关闭定时器
        window.onscroll = function () {

            var top = $(window).scrollTop();

            //console.log(top);
            var wrapper = document.getElementById('wrapper');

            //console.log(navbar);

            if (top >= 30) {

                wrapper.className = 'navbar-wrapper  navbar-wrapper-fiexd';
            } else {

                wrapper.className = 'navbar-wrapper  ';
            }




            var TopScroll = document.documentElement.scrollTop || document.body.scrollTop;
            if (TopScroll >= clientHeight / 4) {
                Top.style.display = 'block';
            } else {
                Top.style.display = 'none';
            }
            //清除定时器
            if (!IsTop) {
                clearInterval(TimeTop);
            }
            IsTop = false;
        }
        Top.onclick = function () {
            //设置setInterval定时器（30ms）
            TimeTop = setInterval(function () {
                //获取滚动条的距离
                var TopScroll = document.documentElement.scrollTop || document.body.scrollTop;
                //向上取整
                var TopSpeed = Math.ceil(TopScroll / 10);
                // console.log(TopScroll);
                // console.log(TopSpeed);

                document.documentElement.scrollTop = document.body.scrollTop = TopScroll - TopSpeed;


                //强制执行滚动
                IsTop = true;
                //清除定时器
                if (TopScroll == 0) {
                    clearInterval(TimeTop);
                }
            }, 30);
        }
    }
}