
$(function(){
  $(document).ready( function(){
    // ページ読み込み時に実行したい処理

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
        $('.slider').slick('setPosition');
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
      $(this).find(".op_cl").text("+");
    } else {
      $answer.addClass("faq_open");
      $answer.slideDown();
      $(this).find(".op_cl").text("-");
    }
  });

  $(".apply_campus").click(function(){
    var $apply_process = $(this).find(".apply_process");
    if($apply_process.hasClass("apply_open")){
      $apply_process.removeClass("apply_open");
      $apply_process.slideUp();
      $(this).find(".op_cl").text("+");
    } else {
      $apply_process.addClass("apply_open");
      $apply_process.slideDown();
      $(this).find(".op_cl").text("-");
    }
  });


  $(".news_column").click(function(){
    var $answer = $(this).find(".news_content");
    if($answer.hasClass("news_open")){
      $answer.removeClass("news_open");
      $answer.slideUp();
      $(this).find(".op_cl").text("+");
    } else {
      $answer.addClass("news_open");
      $answer.slideDown();
      $(this).find(".op_cl").text("-");
    }
  });

  $('.slider').slick('setPosition');



});

$('.slider').slick({
  autoplay:true,
  autoplaySpeed:3000,
});
