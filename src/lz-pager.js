/*
create by xiaohei on 2015/6/1

我的个人网站：http://www.lizhiqianduan.com

项目地址：https://github.com/lizhiqianduan/lz-pager

*/


/*
 * 获取分页的按钮
 * object vm
 * @totalNum : 总条数
 * @pageSize : 页面的条数
 * @offset : 分页按钮的偏移量
 * @pageOnClickFn : 分页点击函数，默认传递参数page --> 页号
 * */
function lzPager(vm){
//            处理分页
    var totalItem = vm.totalNum?vm.totalNum:0;
    var pageSize = vm.pageSize ? vm.pageSize : 20;
    var offset = vm.offset ? vm.offset : 5;
    var page = vm.curPage ? vm.curPage : 1;
    var pageOnClickFn = vm.pageOnClickFn ? vm.pageOnClickFn : "alert";
    if(totalItem == 0 || !totalItem){
        return "";
    }

    var pageHtml = '';
    var pageNum = Math.ceil(totalItem/pageSize);
    pageHtml+= "<li><a href='javascript:;'>总共" + pageNum +"页 "+ totalItem +"条</a></li>";
    pageHtml+= "<li><a href='javascript:;' onclick='"+ pageOnClickFn +"(1)'>首页</a></li>";
    if(page != 1){
        pageHtml+= "<li><a href='javascript:;' onclick='"+ pageOnClickFn +"("+ (page-1) +")'>上一页</a></li>";
    }
    if(pageNum<=2*offset){
        for(var p=1;p<=pageNum;p++){
            pageHtml+="<li class='"+ (p==page?'active':'') +"'><a href='javascript:;' onclick='"+ pageOnClickFn +"("+p+")'>" + p +"</li></a>";
        }
    }else{
        if(page>offset && page<pageNum-offset){
            for(var p=page-offset;p<=page+offset;p++){
                pageHtml+="<li class='"+ (p==page?'active':'') +"'><a  href='javascript:;' onclick='"+ pageOnClickFn +"("+p+")'>" + p +"</li></a>";
            }
        }else if(page<=offset){
            for(var p=1;p<=2*offset;p++){
                pageHtml+="<li class='"+ (p==page?'active':'') +"'><a  href='javascript:;' onclick='"+ pageOnClickFn +"("+p+")'>" + p +"</li></a>";
            }
        }else if(page>=pageNum-offset){
            for(var p=page-2*offset;p<=pageNum;p++){
                pageHtml+="<li class='"+ (p==page?'active':'') +"'><a  href='javascript:;' onclick='"+ pageOnClickFn +"("+p+")'>" + p +"</li></a>";
            }
        }
    }
    if(page !=pageNum){
        pageHtml+= "<li><a href='javascript:;' onclick='"+ pageOnClickFn +"("+ (page+1) +")'>下一页</a></li>";
    }

    pageHtml+= "<li><a href='javascript:;' onclick='"+ pageOnClickFn +"("+ pageNum +")'>尾页</a></li>";

    console.log(pageHtml);
    return pageHtml;
}


