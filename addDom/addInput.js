function addInput(){
    if($(this).attr("id")=="addate"){
        textAndDate.numofdate++;
        explainJson();
    }
    if($(this).attr("id")=="addtext"){
        textAndDate.numoftext++;
        explainJson();
    }
}