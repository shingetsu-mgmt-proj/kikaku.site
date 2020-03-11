
$(function(){
  $(document).ready( function(){
    // ページ読み込み時に実行したい処理
    $('.slider').slick({
      autoplay:true,
      autoplaySpeed:5000,
    });

    if($(".wrapper").hasClass("for_index")) {
      $(".wrapper").hide();

      var rotation = function (){
        $("#loading").rotate({
          angle:0,
          animateTo:360,
          callback: rotation
        });
      }
      rotation();

      setTimeout(function(){
        $(".black_wall").fadeOut();
        $("#loading").fadeOut();
        $(".wrapper").show();
      },1000);

    };

  });

  $(".header_sp").click(function(){
    $(".menu_sp").fadeIn();
  });

  $("#menu_close_btn").click(function(){
    $(".menu_sp").fadeOut();
  });

  $(".faq_list").click(function(){
    var $answer = $(this).find(".faq_answer");
    if($answer.hasClass("faq_open")){
      $answer.removeClass("faq_open");
      $answer.slideUp();
      $(this).find("span").text("+");
    } else {
      $answer.addClass("faq_open");
      $answer.slideDown();
      $(this).find("span").text("-");
    }
  });

  $(".news_column").click(function(){
    var $answer = $(this).find(".news_content");
    if($answer.hasClass("news_open")){
      $answer.removeClass("news_open");
      $answer.slideUp();
      $(this).find("span").text("+");
    } else {
      $answer.addClass("news_open");
      $answer.slideDown();
      $(this).find("span").text("-");
    }
  });



});
