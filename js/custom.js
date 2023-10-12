$(document).ready(function () {

	$(window).scroll(function() {
	    if ($(this).scrollTop()) {
	        $('.scroll-top').fadeIn();
	    } else {
	        $('.scroll-top').fadeOut();
	    }
	});

	$(".scroll-top").click(function() {
	    $("html, body").animate({
	    	scrollTop: 0
	    }, 0);
	 });


$('.toggle-menu').click(function() {
	$("body").toggleClass('menu_open');
})

    $(window).scroll(function() {
        var header = $('.header');
        var scroll = $(window).scrollTop();
        var homeScroll = 100;
        if (scroll > homeScroll) {
            header.addClass('fixed');
            jQuery('#return-to-top').fadeIn(300);
        } else {
            header.removeClass('fixed');
            jQuery('#return-to-top').fadeOut(300);
        }
    });

    //on scroll hide and show header
            var lastScrollTop = 0;
            jQuery(window).scroll(function(event){
                var st = jQuery(this).scrollTop();
                if (st >= 70){
                   jQuery('.header').addClass('scrolling_down');
                 } else{
                   jQuery('.header').removeClass('scrolling_down');
                }
                 if (st >= lastScrollTop){
                   jQuery('.header, body').removeClass('scrolling_up');
                   jQuery('.header, body').addClass('scrolling_down');
                 } else{
                   jQuery('.header, body').addClass('scrolling_up');
                   jQuery('.header, body').removeClass('scrolling_down');  
                }
                lastScrollTop = st;
            });
            
            // jss
            $(window).load(function(){
            	$('.vertical-centered-box').fadeOut(1000,function(){
            		$(this).remove();
            	});
            });


            $('.owl-carousel').owlCarousel({
                loop:true,
                margin:10,
                autoplay:true,
                autoplayTimeout:2000,
                autoplayHoverPause:true,
                items:1,
                dots:false,
            })


              $('.selector').animatedHeadline({
                  animationType: 'push'
              });

              AOS.init();


})


const text = document.querySelector('.circle span');
		text.innerHTML = text.innerText.split("").map(
			(char, i) =>
			`<span style="transform:rotate(${i * 15}deg)">${char}</span>`
			).join("")