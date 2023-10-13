



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

            $(document).ready(function(){
              // Add smooth scrolling to all links
              $("a").on('click', function(event) {

                if (this.hash !== "") {
                  // Prevent default anchor click behavior
                  event.preventDefault();

                  var hash = this.hash;

                  $('html, body').animate({
                    scrollTop: $(hash).offset().top
                  }, 800, function(){

                    // Add hash (#) to URL when done scrolling (default click behavior)
                    window.location.hash = hash;
                  });
                }
              });
            });


              $('.selector').animatedHeadline({
                  animationType: 'push'
              });

              AOS.init();

             // CSS selector
             new Ukiyo(".ukiyo")

})


const text = document.querySelector('.circle span');
        text.innerHTML = text.innerText.split("").map(
            (char, i) =>
            `<span style="transform:rotate(${i * 15}deg)">${char}</span>`
            ).join("")

         function scroll(element){   
        var ele = document.getElementById(element);   
        window.scrollTo(ele.offsetLeft,ele.offsetTop); } 