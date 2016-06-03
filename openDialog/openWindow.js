var showWindow=function(){
    $(".dialogt").dialog({
    buttons: [
        {
          text: "Ok",
          click: function() {
            $( this ).dialog( "close" );
          }
        }
      ]
    })
    return 0;

};
