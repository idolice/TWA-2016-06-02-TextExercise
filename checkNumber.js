$(document).ready(function(){
 $("#submitbutton").click(function(){
    var str = document.getElementById('datetext').value.trim();
        location.reload();
        if(str.length!=0){
            var reg = new RegExp(/^(d{2})\/(d{2})\/(d{4})$/);


            var r = reg.test(str);
            if(r==false){
                document.getElementById("datetext").style.borderColor="red";
                var a="<div  id=\"result\" style=\"color:red\">wrong form </div>";
                $("#submitbutton").after(a);
                return 0;
                        }
            var str1=str.replace("/","");
            var reg1=new RegExp(/^d*$/);
            var r1=reg1.test(str1);
            if(r==false){
                document.getElementById("datetext").style.borderColor="red";
                var a="<div  id=\"result\" style=\"color:red\">input must be number </div>";
                $("#submitbutton").after(a);
                return 0;
                        }
            return 1;
        }
        return 0;
    })
 })
