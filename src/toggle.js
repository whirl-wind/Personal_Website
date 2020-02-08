(function(){
    var $mobileNavToggle = $('.mobile-nav-toggle'),
        $mobileNav =$('.mobile-nav'),
        $headerwidth = $('.header').width();
    $mobileNavToggle.on('click', function(e){
        $mobileNavToggle.toggleClass('is-open');
        $mobileNav.toggleClass('is-open');
        $('.mobile-nav').css('width' , $headerwidth);
    });
    $(window).resize(function(){
        if($(window).width()>550){
            $mobileNavToggle.removeClass('is-open');
            $mobileNav.removeClass('is-open');
        }
    })
})(jQuery);