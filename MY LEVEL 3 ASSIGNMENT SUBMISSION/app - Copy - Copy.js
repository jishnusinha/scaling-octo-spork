$(document).ready(function(){
    $(".clickfbpost").mouseenter(function(){
       $(".clickfbpost").fadeTo(1000, 0.4);
    });
    $(".clickfbpost").mouseleave(function(){
       $(".clickfbpost").fadeTo(1000, 1);
    });
});