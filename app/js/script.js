
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
$(function(){
	$('.reward__icon').on('click', function(){
		$("#rewardModal").modal();
		let srcData = $(this).data('modal-img');
		$('#rewardModal').find('.modal__img').attr('src', srcData);
	});
});


