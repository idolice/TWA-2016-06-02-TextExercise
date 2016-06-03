
function showText(){
        saveText();
        getToHtml();

}
function getToHtml(){
    //window.location="showText.html";
    window.open("showText.html?st="+sT+"&sd="+sD);
}

