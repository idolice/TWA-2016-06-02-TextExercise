$(document).ready(function(){
 $("#submitbutton").click(function(){
    var str = document.getElementById('datetext').value.trim();
        //location.reload();
        if(str.length!=0){
            var reg = new RegExp(/^(d{2})\/(d{2})\/(d{4})$/);


            var r = reg.test(str);
            if(r==false){
                document.getElementById("datetext").style.borderColor="red";
                var a="<div  id=\"result\" style=\"color:red\">wrong form </div>";
                $("#submitbutton").after(a);

            }
        }

    })
 })
