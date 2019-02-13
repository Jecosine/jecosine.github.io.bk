$(document).ready(
    function(){
        var group = $(".content-sp");
        var pages = $(".page-tag");
        var currentIndex = 0;
        for (var i = 0;i < pages.length;i++){
            pages[i].click(function(){
                alert(pages.index(this));
            for (var i = 0;i < this.length; i++){
                if (index == i){
                    this[i].css('visibility',"visible");
                    currentIndex = 0;
                    pages[currentIndex].css("backgound-image","../img/sns/heart-s.png");
                }
                else{
                    this[i].css('visibility',"hidden");
                    pages[currentIndex].css("backgound-image","../img/sns/heart-d.png");
                }
            }
            });
        
        }
    }
);

