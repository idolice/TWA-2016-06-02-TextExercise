
function showText(){
        saveText();
        getToHtml();

}
function getToHtml(){
    window.location="showText.html?st="+sT+"&sd="+sD;
    //window.open("showText.html?st="+sT+"&sd="+sD);
}

