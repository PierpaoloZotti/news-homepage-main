$(".hamburger").bind("click", function(){
    $(".line1").toggleClass("animation1");
    $(".line2").toggleClass("animation2");
    $(".line3").toggleClass("animation3");
    $(".menu_mobile").toggleClass("show_menu");
})