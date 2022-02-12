$(function(){

var header = $("#header"),
    introH = $("#intro").innerHeight(),
    scrollOffSet = $(window).scrollTop();

    // fexed Header
    CheckScroll(scrollOffSet);

    $(window).on("scroll", function() {
        scrollOffSet = $(this).scrollTop();

        CheckScroll(scrollOffSet);

    });

    function CheckScroll(scrollOffSet) {       
        if (scrollOffSet >= introH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }

    // Smooth scroll

    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        var blockId = $(this).data("scroll"),
            blockOffSet = $(blockId).offset().top;

        $("html, body").animate({
            scrollTop: blockOffSet
        },500);
        $("#nav").removeClass("active");     
        $("#nav_toggle").removeClass("active");     
    });

    // Menu nav toggle

    $("#nav_toggle").on("click", function(event){
        event.preventDefault;
        
        $(this).toggleClass("active");
        $("#nav").toggleClass("active");
    });

    // Collapse (accordion)

    $("[data-collapse]").on("click", function(event) {
        event.preventDefault;

         blockId = $(this).data("collapse");
         $(this).toggleClass("active");

         $(blockId).slideToggle();
        
    });

    // Slider

    $("[data-slider]").slick({
        infinite: true,
        fade: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        
    });



});
