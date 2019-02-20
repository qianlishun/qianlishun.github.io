
var selectListStr = "{ \"describes\":[{\"name\":\"1\",\"content\":\"a\"},{\"name\":\"2\",\"content\":\"b\"}],\"tips\":[{\"name\":\"1\",\"content\":\"1\"},{\"name\":\"2\",\"content\":\"2\"}]}";

var wifi =
{
	"WiFiInfo":[
		{"ssid":"WAPBICA007"},
		{"ssid":"WAPBICA008"}
	]

}

var selectList = {
	"describes":[
		{"name":"1","content":"未见明显异常"},
		{"name":"2","content":"显示圆形液性暗区，边界清晰，囊壁整齐肥厚，后方回声增强"},
		{"name":"3","content":"显示圆形液囊侧壁与外囊有间隙，后方增强效应"},
		{"name":"4","content":"显示子囊靠母囊壁排列，呈“车轮征”"},
		{"name":"5","content":"显示子囊互相挤压成方形，呈“蜂房征”"},
		{"name":"6","content":"显示包虫囊壁塌陷,呈“天幕征”"},
		{"name":"7","content":"显示包虫囊壁塌陷收缩变形,呈“套囊征”"},
		{"name":"8","content":"显示囊壁塌陷漂浮在囊液中,呈“飘带征”"},
		{"name":"9","content":"显示囊壁断裂、折叠呈“脑回征”"},
		{"name":"10","content":"显示囊壁钙化呈“蛋壳样”"},
		{"name":"11","content":"显示肝内中强回声光团，边界不清，后方声束衰减"},
		{"name":"13","content":"显示病灶中点状，融合成团片状强回声，后方声束明显衰减"},
		{"name":"14","content":"显示肝内强回声病灶，边界不清，后方声束衰减"},
		{"name":"15","content":"显示病灶斑片状强回声，形状不规则"},
		{"name":"16","content":"显示病灶内在液性暗区，形成“空腔征”"},
		{"name":"17","content":"显示病灶内的不规则液性暗区，形成“岩洞征”"},
		{"name":"18","content":"显示空腔内钙化壁向腔内突入，呈“半岛征”"},
		{"name":"19","content":"癌肿区回声较周围肝组织明显减低，边界清楚"},
		{"name":"20","content":"切面内见有块状强回声区。周围绕以低回声暗带"},
		{"name":"21","content":"块状回声与正常肝组织相近，小块状回声边界清晰"},
		{"name":"22","content":"回声增强或减弱的声团混合存在，与周围边界清楚"}
	],

	"tips":[ 
		{"name":"1","content":"CL型(囊型病灶)"},
		{"name":"2","content":"CEⅠ型(单囊型)"},
		{"name":"3","content":"CEⅡ型(多子囊型)"},
		{"name":"4","content":"CEⅢ型(破裂型)"},
		{"name":"5","content":"CEⅣ型(实变型)"},
		{"name":"6","content":"CEⅤ型(钙化型)"},
		{"name":"7","content":"浸润型"},
		{"name":"8","content":"病灶钙化型"},
		{"name":"9","content":"液化空洞型"},
		{"name":"10","content":"混合型回声增强或减弱的声团混合存在"}
	 ]
}


var  typeList = {
	"json":
	["CL型(囊型病灶)","CEⅠ型(单囊型)","CEⅡ型(多子囊型)","CEⅢ型(破裂型)","CEⅣ型(实变型)","CEⅤ型(钙化型)","浸润型","病灶钙化型","液化空洞型","混合型"]
};


var describeList = {
	"json":
	[
		"未见明显异常",
		"显示圆形液性暗区，边界清晰，囊壁整齐肥厚，后方回声增强",
		"显示圆形液囊侧壁与外囊有间隙，后方增强效应",
		"显示子囊靠母囊壁排列，呈“车轮征”",
		"显示子囊互相挤压成方形呈“蜂房征”",
		"显示包虫囊壁塌陷,呈“天幕征”",
		"显示包虫囊壁塌陷收缩变形,呈“套囊征”",
		"显示囊壁塌陷漂浮在囊液中,呈“飘带征”",
		"显示囊壁断裂、折叠呈“脑回征”",
		"显示囊壁钙化呈“蛋壳样” ，侧壁声影",
		"显示肝内中强回声光团，边界不清，后方声束衰减",
		"显示肝内不均质强回声病灶，周边低回声晕带",
		"显示肝内强回声病灶，边界不清，后方声束衰减",
		"显示病灶中点状，融合成团片状强回声，后方声束明显衰减",
		"显示病灶斑片状强回声，形状不规则",
		"显示病灶内在液性暗区，形成“空腔征”",
		"显示病灶内的不规则液性暗区，形成“岩洞征”",
		"显示空腔内钙化壁向腔内突入，呈“半岛征”",
		"癌肿区回声较周围肝组织明显减低，边界清楚",
		"切面内见有块状强回声区。周围绕以低回声暗带",
		"块状回声与正常肝组织相近，小块状回声边界清晰",
		"回声增强或减弱的声团混合存在，与周围边界清楚"
	]

};

var obsList2 = {
	"json":
	{
	"CL型(囊型病灶)":[],
	"CEⅠ型(单囊型)":["双壁征","落雪征"],
	"CEⅡ型(多子囊型)":["车轮征","蜂窝征"],
	"CEⅢ型(破裂型)":["显示包虫囊壁塌陷,呈“天幕征”","显示包虫囊壁塌陷收缩变形,呈”套囊征“","显示囊壁塌陷漂浮在囊液中,呈“飘带征”"],
	"CEⅣ型(实变型)":["脑回征"],
	"CEⅤ型(钙化型)":["蛋壳样"],
	"浸润型":["岩洞征"],
	"病灶钙化型":["半岛征"],
	"液化空洞型":["空腔征"],
	"混合型":[],
	}
};

var obsList3 = {
	"json":
	{
		"鞋靴":["男鞋","女鞋","布鞋"],
		"水果":["苹果"],
		"唇膏":["滋润唇膏","咬唇妆"],
		"睫毛膏":[],
		"手机通讯":["安卓手机","苹果手机","耳机"],
		"指甲油":[],
		"手机配件":["手机保护壳","屏保"],
		"穿戴设备":["智能手表"],
		"女装":["T恤衫","休闲裤","打底裤","女士短裤"],
		"眼影":[],
		"其他":[],
		"化妆工具":["画眉笔"],
		"家用电器":["彩电","厨房电器"],
		"电脑耗材":["音箱"],
		"男装":[],
		"摄影摄像":["数码相机"],
		"婴儿食品":[],
		"调味品":["果酱"],
		"儿童图书":["益智"]
	}
};







function sleep(numberMillis) { 
	var now = new Date(); 
	var exitTime = now.getTime() + numberMillis; 
	while (true) { 
	now = new Date(); 
	if (now.getTime() > exitTime) 
	return; 
	} 
}



function AccordionMenu(options) {
	this.config = {
		containerCls : '.wrap-menu',// 外层容器
		menuArrs:  '',//  JSON传进来的数据
		type:  'click', // 默认为click 也可以mouseover
		renderCallBack:  null, // 渲染html结构后回调
		clickItemCallBack: null // 每点击某一项时候回调
	};
	this.cache = {
	};
	this.init(options);
 }
 AccordionMenu.prototype = {
	constructor: AccordionMenu,
	init: function(options){
		this.config = $.extend(this.config,options || {});
		var self = this,
			_config = self.config,
			_cache = self.cache;
		// 渲染html结构
		$(_config.containerCls).each(function(index,item){
			self._renderHTML(item);
			// 处理点击事件
			self._bindEnv(item);
		});
	},
	_renderHTML: function(container){
		var self = this,
			_config = self.config,
			_cache = self.cache;
		var ulhtml = $('<ul></ul>');
		$(_config.menuArrs).each(function(index,item){
			var lihtml = $('<li><h2>'+item.name+'</h2></li>');
			if(item.submenu && item.submenu.length > 0) {
				self._createSubMenu(item.submenu,lihtml);
			}
			$(ulhtml).append(lihtml);
		});
		$(container).append(ulhtml);
		_config.renderCallBack && $.isFunction(_config.renderCallBack) && _config.renderCallBack();
		// 处理层级缩进
		self._levelIndent(ulhtml);
	},
	/**
	 * 创建子菜单
	 * @param {array} 子菜单
	 * @param {lihtml} li项
	 */
	_createSubMenu: function(submenu,lihtml){
		var self = this,
			_config = self.config,
			_cache = self.cache;
		var subUl = $('<ul></ul>'),
			callee = arguments.callee,
			subLi;
		$(submenu).each(function(index,item){
			var url = item.url || 'javascript:void(0)';
			subLi = $('<li><a href="'+url+'">'+item.name+'</a></li>');
			if(item.submenu && item.submenu.length > 0) {
				$(subLi).children('a').prepend('<img src="./blank.gif" alt=""/>');
                callee(item.submenu, subLi);
			}
			$(subUl).append(subLi);
		});
		$(lihtml).append(subUl);
	},
	/**
	 * 处理层级缩进
	 */
	_levelIndent: function(ulList){
		var self = this,
			_config = self.config,
			_cache = self.cache,
			callee = arguments.callee;
		var initTextIndent = 2,
			lev = 1,
			$oUl = $(ulList);
		while($oUl.find('ul').length > 0){
			initTextIndent = parseInt(initTextIndent,10) + 2 + 'em';
			$oUl.children().children('ul').addClass('lev-' + lev)
						.children('li').css('text-indent', initTextIndent);
			$oUl = $oUl.children().children('ul');
			lev++;
		}
		$(ulList).find('ul').hide();
		$(ulList).find('ul:first').show();
	},
	/**
	 * 绑定事件
	 */
	_bindEnv: function(container) {
		var self = this,
			_config = self.config;
		$('h2,a',container).unbind(_config.type);
		$('h2,a',container).bind(_config.type,function(e){
			if($(this).siblings('ul').length > 0) {
				$(this).siblings('ul').slideToggle('slow').end().children('img').toggleClass('unfold');
			}
			$(this).parent('li').siblings().find('ul').hide()
				   .end().find('img.unfold').removeClass('unfold');
			_config.clickItemCallBack && $.isFunction(_config.clickItemCallBack) && _config.clickItemCallBack($(this));
		});
	}
 };
