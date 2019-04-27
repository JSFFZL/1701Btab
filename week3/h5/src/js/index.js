require.config({
	paths: {
		"mui": "libs/mui.min"
	}
})

require(["mui"], function(mui) {


	console.log(mui);

	function init() {
		getTab();
		tabClick();
	}


	function tabClick() {
		mui('.segmented-control').on('tap', 'a', function() {
			var tablis = document.querySelectorAll(".segmented-control a");
			for (var i = 0; i < tablis.length; i++) {
				tablis[i].classList.remove("active");
			}
			this.classList.add("active");
			var t = this.innerHTML;
			console.log(t);
			getTab(t)
		})
	}


	function getTab(t) {

		// 		if(!t){
		// 			t = document.querySelector(".segmented-control .active").innerHTML
		// 		}
		mui.ajax('/api/getDate', {
			data: {
				style: t || document.querySelector(".segmented-control .active").innerHTML
			},
			dataType: 'json', //服务器返回json格式数据
			type: 'post', //HTTP请求类型
			timeout: 10000, //超时时间设置为10秒；
			success: function(data) {
				console.log(data);
				var str = "";
				data.data.forEach(function(item) {
					str += `<div>
						<p><img src="${item.img}" class="img" alt=""></p>
						<p>${item.name}</p>
						<p>${item.detalut}</p>
					</div>`
				})
				document.querySelector(".list").innerHTML = str;
			},
			error: function(xhr, type, errorThrown) {

			}
		});
	}


	init()
})
