'use strict';
$(document).ready(function(){
    var navigationItems = $(".navigation-item");
    for (var i = 0; i < navigationItems.length;i++){
        navigationItems[i].is_unfolded = false;
        navigationItems[i].click(function(){
            if (navigationItems[i].is_unfolded){
                navigationItems[i].getElementsByTag("ul").style.animation = "unfold";
                navigationItems[i].getElementsByTag("ul").style.height = "auto";
            }
            navigationItems[i].is_unfolded = true;
            
        })
    }
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
        $(this).html("<table class = \"code-block-list\"><tbody><tr><td class = \"line-num\"></td><td>"
         + $(".code-block pre").html().replace(/\n/g,"</td>\n<tr><td class = \"line-num\"></td><td>") +"\n</td></tbody></table>");
    });
    
});
$(window).scroll (function(){
    var items = $(".navigation-item");
    var navi = $("#navigation-bar");
    if($(window).scrollTop() == 0){  
        navi.css('animation',"fadingOut 0.3s"); 
        for (var i = 0;i<items.length;i++){items[i].style.animation = "none";}
        navi.css('opacity',0);               
        navi.mouseenter(function(){navi.css('animation',"fadingIn 0.3s");navi.css('opacity',"1");for (var i = 0;i<items.length;i++){items[i].style.animation = "appear 0.3s";}});
        navi.mouseleave(function(){navi.css('animation',"fadingOut 0.3s");navi.css('opacity',"0");for (var i = 0;i<items.length;i++){items[i].style.animation = "none";}});
    }   
    else{
        navi.off('mouseenter');
        navi.off('mouseleave');
        navi.css('animation',"fadingIn 0.3s");
        for (var i = 0;i<items.length;i++){items[i].style.animation = "appear 0.3s";}
        navi.css('opacity',1); 
    }
});
