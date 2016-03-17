$(function()
{
	$(".main .header ul li").mouseover(function()
	{
		$(".main .header ul li").find("ul").css("display","none");
		$(this).find("ul").css("display","block").css("z-index","999");

	})
	$(".main .header ul li ul").mouseout(function()
	{
	    $(".main .header ul li").find("ul").css("display","none");
            $(this).find("ul").css("display","none").css("z-index","-999");      
	})
})

$(function()
{
	var i=0;//首先设置全局变量i
	function play()
	{
		i++;
		if(i>5){i=0}
		$(".main .banner .nav ul li").eq(i).addClass("bg").siblings().removeClass("bg");
		$(".main .banner .Img ul li").eq(i).fadeIn(1400).siblings().fadeOut(200);
		return play;
	}
	timer=setInterval(play(),5000)
	$(".main .banner").hover(function() //第二步 当banner区域划过时 淡入淡出 那两个按钮
	{
		clearInterval(timer)
		$(".main .banner .btn").fadeIn(400);
		
	},function()//这里这样写是回调函数 jq里提供这样的功能让你继续操作 继而形成一组操作
	{
		$(".main .banner .btn").fadeOut(200);
		timer=setInterval(play(),5000)
	})
	$(".main .banner .nav ul li").click(function() //第三步 选中下面的那些小点 就是点击切换的那些
	{
		i=$(this).index(); //然后当他点击时 让i=当前的这个索引值 jq里索引值可以直接获取 从0开始 
		$(this).addClass("bg").siblings().removeClass("bg");//然后这个不用多说 当前的 li 增加类样式  然后siblings方法选中其他的li并删除类样式
		$(".main .banner .Img ul li").eq(i).fadeIn(1400).siblings().fadeOut(200);
		//最后选中 那些图片 在通过eq方法选中第几个 与索引值对应这样一来就形成了 一对一 二对二 的那种效果 几个按钮对应几张图片 切换不会错
	})
	$(".main .banner .btn .prev").click(function()
	{
		i--;
//i-- 选中左边的按钮 左边的按钮功能不是向前切换吗 然后i--就是i的索引值没点一次就减一下 由于之前编写了 那个切换的代码 所以这里 你点一下是几 他就会切换到第一张图片和第几个按钮 并且对应好 因为索引值相对的关系
		if(i<0){i=5}//然后索引值i小于0的时候 你总不能让他为负数吧 那样谁也选不到所以 判断当i小于0 的时候 i就等于5 这样就切换回第一张  可以重复一直向前切换
		$(".main .banner .nav ul li").eq(i).addClass("bg").siblings().removeClass("bg"); //这个不多说了 选中第i个 
		$(".main .banner .Img ul li").eq(i).fadeIn(1400).siblings().fadeOut(200);
	})
	
	$(".main .banner .btn .next").click(function()
	{
		play();
	
	//！！！看这里 这里只有一个play函数  其实之前上面那个play就是这里的切换代码封装而成的 这里的作用是减少代码量使用方便
	//现在开始看 play函数 你会发现和向前切换一样 这就对了 本来就一样  然后设置定时器 定义定时器名称没3000毫秒也就是3秒调用一次 调用一次是向后切换 就形成自动轮播了
	//最后 当 banner区域划过时 停止定时器 离开 再次调用  至于 play函数里加 return返回出函数是因为 主函数 $(function(){}) 里面定义一个函数会形成闭包 所以要把它返回出去 这样定时器才能调用 读取到函数
		
	})
	
	
})


$(function()
{
	$(".main .banner .banner_form .posi").hover(function()
	{
		$("#create").remove();
		$("<span id='create'><h2>扫一扫 微信二维码</h2><img src='img/tdcImg.png'/></span>").appendTo(".main .banner .banner_form form");
		$("#create :header").css(
		{
			"color":"rgb(102,102,102)",
			"text-align":"center",
			"margin-top":"32px"
		})
		$("#create").css(
			{
			"position":"absolute",
			"left":"0px",
			"top":"-350px",
			"width":"100%",
			"height":"341px",
			"background":"rgb(229,229,229)"
			}
			)//动态DOM样式渲染
		$("#create img").css({
			"position":"absolute",
			"left":"18%",
			"top":"77px"
		})
		$(this).css("z-index","999");
	$("#create").animate({top:"0px"},500);	
	},function()
	{
		$("#create").animate({top:"-350px"},200,function()
		{
			$("#create").remove();
		});
	})
})

$(function()
{
	$(".main .content ul li").eq(0).css("background-position","540px 0px");
	$(".main .content ul li").eq(1).css("background-position","540px -221px");
	
	$(".main .content ul li").hover(function()
	{
		i=$(this).index();
		
	 if(i==0)
	 {
		$(".main .content ul li").eq(0).css("background-position","318px 0px");
	 }
	 else if(i==1)
	 {
	 	$(".main .content ul li").eq(1).css("background-position","318px -221px");
	 }
	 else
	 {
	 	$(".main .content ul li").eq(2).css("background-position","756px 0px");
	 }
	},function()
	{
		
	$(".main .content ul li").eq(0).css("background-position","540px 0px");
	$(".main .content ul li").eq(1).css("background-position","540px -221px");
	$(".main .content ul li").eq(2).css("background-position","0px 0px");
	
	})
})

