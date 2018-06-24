$(document).ready(function(){
    $("#flip1 .abc").click(function(){
        $("#pane1").slideToggle("fast");
    });
    $("#flip2 .abc").click(function(){
        $("#pane2").slideToggle("fast");
    });
});