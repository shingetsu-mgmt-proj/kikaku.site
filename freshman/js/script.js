
var page_posi = $(window).scrollTop();
var msg = "hahaha";

$(function() {

  $(".header_2_menu_button").click(function(){
    if ($(".hamburger_menu").hasClass("menu_active")) {
      $(".hamburger_menu").fadeOut();
      $(".hamburger_menu").removeClass("menu_active");
    } else {
      $(".hamburger_menu").fadeIn();
      $(".hamburger_menu").addClass("menu_active");
    }
  });
 
});
    


var header = $("header");    
var header_2 = $(".header_2")
//スクロールが100に達したらボタン表示

if (window.matchMedia( "(max-width: 1000px)" ).matches) {
  /* ウィンドウサイズが 670px以下の場合のコードをここに */
  


  } else {
  /* ウィンドウサイズが 670px以上の場合のコードをここに */
    
    $("body").scroll(function () {
      if ($(this).scrollTop() > 50) {
          header.slideUp();
          header_2.slideDown();
      } else {
          header.slideDown();
          header_2.slideUp();
      }
    });

  }

  $.scrollify({
    section:".box",
    interstitialSection: "footer"
  });
  


