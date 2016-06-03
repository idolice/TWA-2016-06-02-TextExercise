
$(document).ready(function(){
    var st=getUrlParam("st");
    var sd=getUrlParam("sd");
    addDom(st,sd);
})
function addDom(st,sd){
    var dom=$(".empty");
    alert(dom);
    var a="<input class=\"addedtext\" type=\"text\">";
    var b="<input class=\"addedtext\" type=\"date\">";
        for(var i=0;i<st;i++){

            dom.after(a);
        };
        for(var j=0;j<sd;i++){
            dom.after(b);
        }
};
function getUrlParam(name) {
//     var params;
//     var url=location.href;
//     var num=url.indexOf("?");
//     url=url.subString(num+1);
//     var splitUrl=url.split("&");
//     splitUrl.forEach(function(item){
//        var param=item.split("=");
//        if(param[0]==name){
//            var i=parseInt(param[1]);
//            return i;
//        }
//     })
//     return null;
     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
     var r = window.location.search.substr(1).match(reg);
     if(r!=null)return  unescape(r[2]); return null;


}