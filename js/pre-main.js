

$(document).ready( 
    function(){
        var navi = $("#navigation-bar");
        if ($(window).scrollTop() == 0){
            navi.mouseenter(function(){navi.css('animation',"fadingIn 0.3s");navi.css('opacity',"1");});
            navi.mouseleave(function(){navi.css('animation',"fadingOut 0.3s");navi.css('opacity',"0");});
        }
        else {            
            navi.off('mouseenter');
            navi.off('mouseleave');
            navi.css('opacity',1);       
        }
    } 
);
