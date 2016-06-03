
$(document).ready(function(){
    var st=getUrlParam("st");
    var sd=getUrlParam("sd");
    addDomText(st);
    addDomDate(sd);
    $(".edi").bind("click",backToBasic);
})
//function addDom(st,sd){
//
//    var dom=$(".empty");
//    alert(dom);
//    var a="<input class=\"addedtext\" type=\"text\">";
//    var b="<input class=\"addedtext\" type=\"date\">";
//        for(var i=0;i<st;i++){
//
//            dom.after(a);
//        };
//        for(var j=0;j<sd;i++){
//            dom.after(b);
//        }
//};
function addDomText(st){
    var dom1=$(".empty1");
    var a="<input class=\"addedtext\" type=\"text\">";
    for(var i=0;i<st;i++){
        dom1.after(a);
    };
}
function addDomDate(sd){
    var dom2=$(".empty2");
    var b="<input class=\"addedtext\" type=\"date\">";
    for(var i=0;i<sd;i++){
        dom2.after(b);
    };
}
function getUrlParam(name) {
     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
     var r = window.location.search.substr(1).match(reg);
     if(r!=null)return  unescape(r[2]); return null;


}