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


$('.right-arrow').on('click',function(){
    var $slides = $('.slide');
    $slides.css({screenLeft:marginCalc+'%'});
});