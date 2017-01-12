window.onload = function () {
	
//-------------------------------设置子菜单显示
	var navList = document.getElementsByClassName("navList")[0];
	var navItem = navList.getElementsByClassName("navItem")
//	通过循环获取每一个一级菜单,绑定事件
	for (var i=0;i < navItem.length;i++) {
//	通过闭包避免i恒等于8
		navItem[i].onmouseover = (function (i) {
			return function () {
				var navChild = navItem[i].children;
				var nodes = navChild.length;
//	对子节点进行判断,如果有两个说明有子菜单
				if(nodes == 2){
//	对元素行间样式进行设置覆盖css样式
					navChild[1].style.display = "block";
				}
			};
		})(i);
		navItem[i].onmouseout = (function (i) {
			return function () {
				var navChild = navItem[i].children;
				var nodes = navChild.length;
//	对子节点进行判断,如果有两个说明有子菜单
				if(nodes == 2){
//	对元素行间样式进行设置覆盖css样式
					navChild[1].style.display = "none";
				}
			};
		})(i);
	}
//	设置自动播放banner
	var count = 2;
	var bannerImg = document.getElementsByClassName("bannerImg")[0];
	function autoPlayer () {
		if (count > 8) {
			count = 1;
			spotLight(count);
			bannerImg.src = "image/banner" + count + ".jpg";
			count++;
		} else{
			spotLight(count);
			bannerImg.src = "image/banner" + count + ".jpg";
			count++;
		}
	}
	
//	定时器
	 var Timer = setInterval(autoPlayer,2000);
	 
//	悬停函数
	function overStop () {
		clearInterval(Timer);
	}
	var banner = document.getElementsByClassName("banner")[0];
	banner.onmouseover = overStop;
	banner.onmouseout = function(){
		Timer = setInterval(autoPlayer,2000);
	};
	
//	小圆点高亮函数
	var spotList = document.getElementsByClassName("spotList")[0];
	var spot =  spotList.getElementsByTagName("span");
	function spotLight (num) {
		for (var j = 0;j < spot.length;j++) {
			spot[j].style.backgroundColor="rgba(255,255,255,0.3)";
		}
		spot[num - 1].style.backgroundColor="rgba(255,255,255,0.8)";
	}

//	给小圆点绑定点击事件
	for (var j = 0;j < spot.length;j++) {
		spot[j].onclick = (function (j) {
			return function () {
				count = j + 1;
				bannerImg.src = "image/banner" + count + ".jpg";
				spotLight (count);
			}
		})(j);
	}
//	吸顶事件
	var nav = document.querySelector(".nav");
	var navTop = nav.offsetTop;
	window.onscroll = function() {
		var scrollTop = document.body.scrollTop;
		if (navTop < scrollTop) {
			nav.classList.add("fixedTop");
		} else{
			nav.classList.remove("fixedTop");
		}
	};
}
	