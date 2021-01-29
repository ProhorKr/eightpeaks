window.onload = function(){

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

    //tabs catalog-mobile
    $('.js-tab-trigger_box-mobile').click(function(e) {
        e.preventDefault();

        var id = $(this).data('href'),
            content = $(id);
        
        $('.catalog__mobile-tab-item--active').removeClass('catalog__mobile-tab-item--active');
        $(this).addClass('catalog__mobile-tab-item--active');
        
        $('.catalog__content--show').removeClass('catalog__content--show');
        content.addClass('catalog__content--show');    
    });

    //tabs place-mobile
    $('.js-tab-trigger_place-mobile').click(function(e) {
        e.preventDefault();

        var id = $(this).data('href'),
            content = $(id);
        
        $('.about-place__mobile-tab-item--active').removeClass('about-place__mobile-tab-item--active');
        $(this).addClass('about-place__mobile-tab-item--active');
        
        $('.about-place__item--show').removeClass('about-place__item--show');
        content.addClass('about-place__item--show');    
    });

    // carousel
    if (window.innerWidth < 576){
        $("#carousel").waterwheelCarousel({
            flankingItems: 3,
            separation: 100,
            sizeMultiplier: 0.7
        });
    }
    else{
        $("#carousel").waterwheelCarousel({
            flankingItems: 3,
            separation: 350,
            sizeMultiplier: 0.7
        });
    }

    
    // Modal
    $(function(){
        $('.reward__icon').on('click', function(){
            $("#rewardModal").modal();
            let srcData = $(this).data('modal-img');
            $('#rewardModal').find('.modal__img').attr('src', srcData);
        });
        $('.reward-mobile__icon').on('click', function(){
            $("#rewardModal").modal();
            let srcData = $(this).data('modal-img');
            $('#rewardModal').find('.modal__img').attr('src', srcData);
        });
    });

    //Video

    if(window.innerWidth <= 992){
        document.getElementById('video__mobile-wrapper').insertAdjacentHTML('afterbegin', '\
            <video class="sct-2__video-mobile col-12" autoplay loop muted preload="auto">\
                <source src="images/dest/cikle6.mp4" type="video/mp4">\
                <source src="images/dest/cikle6.webm" type="video/webm">\
            </video>'
        )}

    if(window.innerWidth >= 992){
        document.getElementById('video__desktop-bg').insertAdjacentHTML('afterbegin', '\
            <video class="sct-2__video" autoplay loop muted preload="auto">\
                <source src="images/dest/Video_E_P_6.mp4" type="video/mp4">\
                <source src="images/dest/Video_E_P_6.webm" type="video/webm">\
            </video>'
        )}

    $('#btn_submit').on("click", function(){
        // собираем данные с формы
        var user_name    = $('input[name="name"]').val();
        var user_phone   = $('input[name="phone"]').val();
        var text_comment = $('input[name="comments"]').val();

        if (user_name.length < 3 && user_phone.length < 6){
            $("#result").html("Введите корректное имя и номер телефона");
        }
        else{
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
        } 
    });


    // // Vertical line browser correct
    // function browser(){
    //     var ua = navigator.userAgent;
        
    //     if (ua.search(/MSIE/) > 0) return 'Internet Explorer';
    //     if (ua.search(/Firefox/) > 0) return 'Firefox';
    //     if (ua.search(/Opera/) > 0) return 'Opera';
    //     if (ua.search(/Chrome/) > 0) return 'Chrome';
    //     if (ua.search(/Safari/) > 0) return 'Safari';
    //     if (ua.search(/Konqueror/) > 0) return 'Konqueror';
    //     if (ua.search(/Iceweasel/) > 0) return 'Debian Iceweasel';
    //     if (ua.search(/SeaMonkey/) > 0) return 'SeaMonkey';
                
    //     if (ua.search(/Gecko/) > 0) return 'Gecko';
        
    //     return 'Search Bot';
    // }
    
    // if (browser() !== 'Chrome'){
    //     let lineRight = document.querySelectorAll(".reward__vertical-line--l");
    //     lineRight.forEach( item => {
    //         item.style.right = "79px"
    //     })
    // }
    

};


 


