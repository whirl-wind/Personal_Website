(function(timer1){
    $(window).scroll(function(){
        var $scrollDist = $(window).scrollTop(),
            $anmiComp = $('.anmiComp');
            if($scrollDist!=0){
                clearTimeout(timer1);
                timer1 = setTimeout(function(){
                    $anmiComp.hide();
                }, 300);
            }else{
                clearTimeout(timer1);
                $anmiComp.show();
            }
    })
})(jQuery);