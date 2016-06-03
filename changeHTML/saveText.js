var sD=0;
var sT=0;

function saveText(){
    doms=document.getElementsByName("addbox");
    var dom=$(".dialogt");
    if(doms!=null){
        for(var i=0;i<doms.length;i++){
          // saveMessage.push(doms[i].type);
          if(doms[i].type=="text"){
            sT++;
          }else if(doms[i].type=="date"){
            sD++;
           }
        }
    };
}