$(document).ready(
 
    function(){
        var navi = $("#navigation-bar");
        navi.mouseenter(function(){navi.css('animation',"fadingIn 1s");navi.css('opacity',"1");});
        navi.mouseleave(function(){navi.css('animation',"fadingOut 1s");navi.css('opacity',"0");});
        
    }
);