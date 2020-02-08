(function(timer2){
    var $dynamicTabs = $('.dynamicTab');
    $dynamicTabs.click(function(){
        var $this = $(this)
            $current = $('.dynamicTab.is-active'),
            $thisClassName = $this.attr('class').split(' ')[1],
            $currentClassName = $current.attr('class').split(' ')[1],
            $index = $this.parent().children().index($this),
            $thisArticle = $('.article-wrap.'+$thisClassName),
            $currentArticle = $('.article-wrap.'+$currentClassName);
        if($thisClassName!=$currentClassName){
            $this.addClass('is-active');
            $current.removeClass('is-active');
            clearTimeout(timer2);
            timer2 = setTimeout(function(){
                $currentArticle.removeClass('is-active');
            }, 300);
            $thisArticle.addClass('is-active');
            $('articles').css('transform','translateX(-'+$index*33.33+'%)');
        }
    })
})(jQuery);