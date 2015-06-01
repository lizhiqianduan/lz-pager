# lz-pager
前端ajax无刷新分页插件 --- 励志前端 --- 小黑出品

#使用方法

1、在需要的html页面引入js文件

    <script src="lz-pager.min.js"></script>

2、页面引入分页按钮的容器

    <ul id="lzPager"></ul>

3、处理分页的逻辑

    function getPage(page){
        var vm = {
            curPage:page,
            totalNum:666,
            pageSize:22,
            pageOnClickFn:'getPage'
        };
        var inhtml = lzPager(vm);
        document.getElementById("lzPager").innerHTML = inhtml;
    }

    //    初始化
    getPage(1);


4、给分页按钮写自定义的样式（我这里随便写了下，可以跟bootstrap结合使用）

    <style>
        li{display:inline-block; background-color: #ccc; padding: 5px; height: 20px; line-height: 20px; margin: 5px;}
        li.active a{color:red;}
    </style>

#另：

欢迎访问我的个人网站 励志前端 ：http://www.lizhiqianduan.com

分享快乐，书写情怀！
