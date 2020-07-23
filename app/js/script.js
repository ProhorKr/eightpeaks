$('.js-tab-trigger').click(function(e) {
    e.preventDefault();

    var id = $(this).attr('href'),
        content = $(id);    
    
    $('.tabs__link--acitve').removeClass('tabs__link--acitve');
    $(this).addClass('tabs__link--acitve');
    
    $('.tabs__content--show').removeClass('tabs__content--show');
    content.addClass('tabs__content--show');    
 });

 
$("#carousel").waterwheelCarousel({
    flankingItems: 3,
    separation: 350,
    sizeMultiplier: 0.7
});
  