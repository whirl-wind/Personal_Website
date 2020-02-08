(function(){
    $('a[href^="#"]').click(function(){
        var $target = $($(this).attr('href')),
            $mobileNav = $('.mobile-nav, .mobile-nav-toggle');
        $mobileNav.removeClass('is-open');
        if($target){
            event.preventDefault();
            if($(window).width()<=550){
                $('html,body').animate({
                    scrollTop: $target.offset().top - $('.header').height()
                },'slow');
            }
            else{
                $('html,body').animate({
                    scrollTop: $target.offset().top
                },'slow');
            }
        }
    })
})(jQuery);