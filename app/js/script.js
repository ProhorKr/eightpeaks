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
  
// Modal
$(".modal").each( function(){
	$(this).wrap('<div class="overlay"></div>')
});

$(".open-modal").on('click', function(e){
	e.preventDefault();
	e.stopImmediatePropagation;

	
	var $this = $(this),
			modal = $($this).data("modal");
	
	if (!$(modal).parents(".overlay").find("footer").is(".footer")){
		let clone = $(".footer").clone().appendTo(".overlay");
	}
	
	$(modal).parents(".overlay").addClass("open");
	setTimeout( function(){
		$(modal).addClass("open");
	}, 350);
	
	$(document).on('click', function(e){
		var target = $(e.target);
		
		if ($(target).hasClass("overlay")){
			$(target).find(".modal").each( function(){
				$(this).removeClass("open");
			});			
			setTimeout( function(){
				$(target).removeClass("open");
				$(target).find(".footer").remove();
			}, 350);
			
		}
		
	});
	
});

$(".close-modal").on('click', function(e){
	e.preventDefault();
	e.stopImmediatePropagation;
	
	var $this = $(this),
			modal = $($this).data("modal");
	
	$(modal).removeClass("open");
	setTimeout( function(){	
		$(modal).parents(".overlay").removeClass("open");
		$(modal).parents(".overlay").find(".footer").remove();
	}, 350);
	
	
});	