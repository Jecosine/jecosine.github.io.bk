'use strict';
$(document).ready(function(){
    var tri = $("#tri");
    tri.click(function(){
        var delta = 100;
        var target = 700;
        var i = setInterval(function(){
            window.scroll(0,delta);
            delta = delta + (target-delta)/20;
            if (Math.abs(delta-700)<1){
                window.scroll(0,700);
                clearInterval(i);
            }
            
        },5);
        
    });
    $(".code-block").each(function(){
        $(this).html("<ol class = \"code-block-list\"><li>" + $(".code-block pre").html().replace(/\n/g,"</li>\n<li>") +"\n</li></ol>");
    });
   
});
$(window).scroll (function(){
    var navi = $("#navigation-bar");
    if($(window).scrollTop() == 0){  
        navi.css('animation',"fadingOut 0.3s"); 
        navi.css('opacity',0);               
        navi.mouseenter(function(){navi.css('animation',"fadingIn 0.3s");navi.css('opacity',"1");});
        navi.mouseleave(function(){navi.css('animation',"fadingOut 0.3s");navi.css('opacity',"0");});
    }   
    else{
        navi.off('mouseenter');
        navi.off('mouseleave');
        navi.css('animation',"fadingIn 0.3s");
        navi.css('opacity',1); 
    }
});
