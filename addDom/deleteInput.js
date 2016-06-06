function deleteInput(){
    if($(this).attr("id")=="deldate"){
            textAndDate.numofdate--;
            explainJson();
    }
    if($(this).attr("id")=="deltext"){
            textAndDate.numoftext--;
            explainJson();
    }
}