/*
create by xiaohei on 2015/6/1

*/


/*
html结构：
<div class="lz-pager">

</div>

*/

;(function($){

	// define some globle function 
	// can't be used in window,but can be used in my plugin anywhere
	function isString(str) {
		return typeof(str) === "string";
	}

	function isNum(str) {
		if (typeof(str) === "number")
			return true;
		else
			return false;
	}

	function isObj(str) {
		if (typeof(str) === "object")
			return true;
		else
			return false;
	}

	function isFn(str) {
		if (typeof(str) == "function")
			return true;
		else
			return false;
	}

	//合并两个对象
	function extend(obj1, obj2) {
		var newobj = {};
		for (var i in obj1) {
			newobj[i] = obj1[i];
			if (obj2 && obj2[i] != null) {
				newobj[i] = obj2[i];
			}
		}
		return newobj;
	}


//  插件名lzPager
// 需要后台返回json数组
	$.fn.lzPager = function(options){
		var defaultSettings = {
			
			// json数组中需要保留的字段
			keepFields:[
				"id",
				"name",
				"haha"
			],
			// 
			userFields:[
				""
			],
//            请求数据的方式：get、post
            method:'post',
//            请求数据的路径
            url:'test.json'
		};

        var settings = extend(defaultSettings,options);
        $.ajax(url,{
            method:settings.method

        });
		
	}

})($);




