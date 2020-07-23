//tabs waterfall
$('.js-tab-trigger').click(function(e) {
    e.preventDefault();

    var id = $(this).attr('href'),
        content = $(id);
    
    $('.tabs__link--acitve').removeClass('tabs__link--acitve');
    $(this).addClass('tabs__link--acitve');
    
    $('.tabs__content--show').removeClass('tabs__content--show');
    content.addClass('tabs__content--show');    
 });

 //tabs catalog
 $('.js-tab-trigger_box').click(function(e) {
    e.preventDefault();

    var id = $(this).data('href'),
        content = $(id);
    
    $('.catalog-carousel__item--active').removeClass('catalog-carousel__item--active');
    $(this).addClass('catalog-carousel__item--active');
    
    $('.catalog__content--show').removeClass('catalog__content--show');
    content.addClass('catalog__content--show');    
 });

// carousel
$("#carousel").waterwheelCarousel({
    flankingItems: 3,
    separation: 350,
    sizeMultiplier: 0.7
});
  