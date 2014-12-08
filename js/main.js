$(".nav-i>li").on('click',function(){
    var $secondLevel=$(this).children('.second-level');
    var isOpen=$secondLevel.attr('data-state');
    
    $('[data-state="visible"]').attr('data-state','closed');
    $('[data-state="active"]').attr('data-state','inactive');
    
    if(isOpen !== 'visible'){
        $secondLevel.attr('data-state','visible');
        $(this).attr('data-state', 'active');
    }
});


var $win = $(window);
var $introParallax = $('.intro-2');

$win.on('scroll', function(){
    var scrollPos = $win.scrollTop();
    if(scrollPos > 0) {
        $introParallax.css({
            'background-position' : 'center' + (scrollPos/2)
        });
    }
});