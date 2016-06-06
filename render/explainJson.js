function explainJson(){
    //var addDom=._template()
    var dom=$(".waitadd");
    $("div").remove(".new");
    for(var i=0;i<textAndDate.numoftext;i++){
         var a="<div class=\"new\"><input type=\"text\" name=\"addbox\" ></div>";
         dom.after(a);
    }
    for(var j=0;j<textAndDate.numofdate;j++){
         var a="<div class=\"new\"><input type=\"date\" name=\"addbox\"  ></div>";
         dom.after(a);
    }
}