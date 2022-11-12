window.addEventListener('load', function () {
	iziToast.settings({
		timeout: 10000,
		close: false,
		progressBar: true,
		layout: '1',
		backgroundColor: '#00000040',
		titleColor: '#efefef',
		messageColor: '#efefef',
		icon: 'Fontawesome',
		iconColor: '#efefef',
	});
	showCard ("test","page-home");
})
function showCard(lastehide,cardid) {
	let hide = document.getElementById(lastehide)
	let cards = document.getElementById(cardid)
	hide.style.opacity = 0;
	setTimeout( function(){
		hide.style.display = "none";
		cards.style.display = ""
		cards.style.opacity = 1;
	}, 500 );
}

function bt_info() {
	showCard ("page-home","page-info");
}
function bt_text_click () {
	iziToast.show({
		timeout: 1000,
		icon: "fa-solid fa-circle-exclamation",
		message: '?????'
	});
}
layui.config({
	version: '1627194905069' //更新 js 缓存
});
layui.use(['layer'], function () { //引入需要的模块
	var $ = layui.jquery, layer = layui.layer //弹层
	window.bt_email = function () {
		layer.open({
			title: '邮箱联系',
			content: '<span style="color:#000000">EMAIL:catfeitu@qq.com</span>',
			btn: ['打开邮箱', '复制邮箱', '取消'],
			yes: function(index, layero){
				layer.open({
					type: 2,
					area: ['90%', '98%'],
					title: '邮箱联系',
					content: 'http://mail.qq.com/cgi-bin/qm_share?t=qm_mailme&email=RyQmMyEiLjMyBzY2aSQoKg',
					maxmin:true
				});
			},
			btn2: function(index, layero){
				copy('catfeitu@qq.com');
				iziToast.show({
					timeout: 1000,
					icon: "fa-solid fa-circle-exclamation",
					message: '复制成功'
				});
			},
			btn3: function(index, layero){
			},
			cancel: function(){ 
				//右上角关闭回调
				//return false 开启该代码可禁止点击该按钮关闭
			}
		});
	};
	window.bt_qq = function () {
		layer.open({
			title: 'QQ联系',
			content: '<span style="color:#000000">QQ:3205711786</span>',
			btn: ['快速跳转', '复制QQ', '取消'],
			yes: function(index, layero){
				layer.open({
					type: 2,
					area: ['70%', '70%'],
					title: 'QQ联系',
					content: 'https://wpa.qq.com/msgrd?v=3&uin=3205711786&site=qq&menu=yes',
				});
			},
			btn2: function(index, layero){
				copy('3205711786');
				iziToast.show({
					timeout: 1000,
					icon: "fa-solid fa-circle-exclamation",
					message: '复制成功'
				});
			},
			btn3: function(index, layero){
			},
			cancel: function(){ 
				//右上角关闭回调
				//return false 开启该代码可禁止点击该按钮关闭
			}
		});
	};
	window.bt_discord = function () {
		layer.open({
			title: 'Discord',
			content: '<span style="color:#000000">Discord标签:feitu#8429</span>',
			btn: ['复制Discord标签并跳转', '仅复制标签', '取消'],
			yes: function(index, layero){
				copy('feitu#8429');
				window.open("https://discord.com/channels/@me", "_blank", "resizable,scrollbars,status");
				iziToast.show({
					timeout: 1000,
					icon: "fa-solid fa-circle-exclamation",
					message: '已在新窗口打开Discord'
				});
			},
			btn2: function(index, layero){
				copy('feitu#8429');
				iziToast.show({
					timeout: 1000,
					icon: "fa-solid fa-circle-exclamation",
					message: '复制成功'
				});
			},
			btn3: function(index, layero){
			},
			cancel: function(){ 
				//右上角关闭回调
				//return false 开启该代码可禁止点击该按钮关闭
			}
		});
	};
	window.bt_github = function () {
		window.open("https://github.com/CatNiangFeitu", "_blank", "resizable,scrollbars,status");
		iziToast.show({
			timeout: 1000,
			icon: "fa-solid fa-circle-exclamation",
			message: '已在新窗口打开Github'
		});
	};
	window.bt_home = function () {
		showCard ("page-info","test");
		showCard ("test","page-home");
		iziToast.show({
			timeout: 1000,
			icon: "fa-solid fa-circle-exclamation",
			message: '已返回到首页'
		});
	};
	$('#ads').click(function () {
		layer.open({
			title: 'FreeWha Ads',
			content: '<span style="color:#000000">这是我们服务器提供商的广告 因此我们能确保其绝对真实<br>www.freewebhostingarea.com</span>',
			btn: ['在当前页打开', '在新标签页中打开', '复制URL', "取消"],
			yes: function(index, layero){
				layer.open({
					type: 2,
					area: ['90%', '90%'],
					title: 'Ads',
					maxmin:true,
					content: 'https://www.freewebhostingarea.com/',
				});
			},
			btn2: function(index, layero){
				window.open('https://www.freewebhostingarea.com/', '_blank'); 
				iziToast.show({
					timeout: 1000,
					icon: "fa-solid fa-circle-exclamation",
					message: '复制成功'
				});
			},
			btn3: function(index, layero){
				copy('https://www.freewebhostingarea.com/');
				iziToast.show({
					timeout: 1000,
					icon: "fa-solid fa-circle-exclamation",
					message: '复制成功'
				});
			},
			cancel: function(){ 
				//右上角关闭回调
				//return false 开启该代码可禁止点击该按钮关闭
			}
		});
	});
});
function copy(message) {
	let transfer = document.createElement('input');
	document.body.appendChild(transfer);
	transfer.value = message
	transfer.focus();
	transfer.select();
	if (document.execCommand('copy')) {
		document.execCommand('copy');
	}
transfer.blur();
document.body.removeChild(transfer);
}
//屏蔽右键
document.oncontextmenu = function () {
    iziToast.show({
        timeout: 2000,
        icon: "fa-solid fa-circle-exclamation",
        message: '为了浏览体验，本站禁用右键'
    });
    return false;
}
