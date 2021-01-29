$(function() {
	/* Фиксация меню при прокрутке */
	$('.header-menu-wrp')
		.addClass('original')
		.clone()
		.insertAfter('.header-menu-wrp')
		.addClass('cloned')
		.removeClass('original');

	function resizeMenu(){
		var $original = $('.header-menu-wrp.original');
		var $cloned = $('.header-menu-wrp.cloned');
		
		if ($(window).scrollTop() >= 3){    
			$cloned.css({
				'top': 0, 
				'left': 0, 
				'width': $original.css('width'), 
				'display': 'block',
				'background': '#FFFFFF',
				'box-shadow': '0px 7px 20px rgba(169, 169, 169, 0.25)',
				'visibility': 'visible'
			});
			$original.css('visibility', 'hidden');
		} else {
			$cloned.css('display', 'none');
			$original.css('visibility', 'visible');
		}
	}

	$(window).scroll(function(){
		resizeMenu();
	});

	$(window).resize(function(){
		resizeMenu();	
	});

/* Выделение активных пунктов меню */
var last_id;
	var $top_menu = $('.header-menu-wrp.cloned');
	var menu_height = $top_menu.outerHeight(true);
	var $menu_items = $top_menu.find('a');
	var $scroll_items = $menu_items.map(function(){
		var item = $($(this).attr('href'));
		if (item.length){
			return item;
		}
	});

	$menu_items.click(function(e){
		var href = $(this).attr('href'),
		offset_top = href === '#' ? 0 : $(href).offset().top - menu_height;
		$('html, body').stop().animate({
			scrollTop: offset_top
		}, 300);
		e.preventDefault();
	});

	$(window).scroll(function(){
		var from_top = $(this).scrollTop() + menu_height;
		var mar = parseInt($top_menu.css('margin-bottom'));
		var cur = $scroll_items.map(function(){
			if ($(this).offset().top < from_top + mar){
				return this;
			}
		});
		cur = cur[cur.length - 1];
		var id = cur && cur.length ? cur[0].id : '';
		if (last_id !== id){
			last_id = id;
			$menu_items.add()
				.removeClass('active')
				.end()
				.filter("[href='#" + id + "']")
				.add()
				.addClass('active');
		}
	});
});

$(document).ready(function(){
	/*ПРОВЕРЯЕМ НАЖАТА ЛИ КНОПКА ОТПРАВКИ*/
	$('#btn_submit').on("click", function(){
			// собираем данные с формы
			var user_name    = $('input[name="name"]').val();
			var user_phone   = $('input[name="tel"]').val();
			var text_comment = $('input[name="comment"]').val();
			
			// отправляем данные
			$.ajax({
					url: "send.php", // куда отправляем
					type: "post", // метод передачи
					data: { // что отправляем
							"name":    user_name,
							"phone":   user_phone,
							"text_comment": text_comment
					},
					error:function(){$("#result").html("Произошла ошибка!");}, 
					/* если произойдет ошибка в элементе с id erconts выведится сообщение*/                 
					beforeSend: function() {   
							$('#btn_submit').remove();                  
							$("#result").html("Отправляем данные...");                   
					},                 
					success: function(){                     
							
							// alert('Ваше сообщение отправлено. Мы ответим вам в ближайшее время.');
							$("#result").html("Ваше сообщение отправлено. Мы ответим вам в ближайшее время.");                     
							
					}  
			});			
	});
});