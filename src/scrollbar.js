(function(timer3, timer4){
    $(window).scroll(function(){
        var $html = $('html'),
            $color = 0.6;
        clearTimeout(timer3);
        clearInterval(timer3);
        $html.attr("style","--scrollbarColor: rgba(5, 10, 20, "+$color+")");
        timer3 = setTimeout(function(){
            timer4 = setInterval(function(){
                if($color >= 0.01){
                    $color = $color - 0.01;
                    $html.attr("style","--scrollbarColor: rgba(5, 10, 20, "+$color+")");
                }else{clearInterval(timer4);}
            }, 10);
        },1000);
    })
})(jQuery);