
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

  $("#select_kikaku").click(function(){
    var $kikaku = $(".apply_kikaku");
    var $mogi = $(".apply_mogi");
    $(".please_select").slideUp();
    if(!$kikaku.hasClass("active")){
      if($mogi.hasClass("active")){
        $mogi.hide();
        $mogi.removeClass("active");
        $kikaku.show();
        $kikaku.addClass("active");
        $("#select_mogi").css({
          'background-color':'white',
          'color':'#808080',
          'border':'solid #808080 1px'
        });
        $("#select_kikaku").css({
          'background-color':'#def7f9',
          'color':'#1b3988',
          'border':'solid #1b3988 1px'
        });
      } else {
        $kikaku.slideDown();
        $kikaku.addClass("active");
        $("#select_kikaku").css({
            'background-color':'#def7f9',
          'color':'#1b3988',
          'border':'solid #1b3988 1px'
        });
      }
    };
  });

  $("#select_mogi").click(function(){
    var $kikaku = $(".apply_kikaku");
    var $mogi = $(".apply_mogi");
    $(".please_select").slideUp();
    if(!$mogi.hasClass("active")){
      if($kikaku.hasClass("active")){
        $kikaku.hide();
        $kikaku.removeClass("active");
        $mogi.show();
        $mogi.addClass("active");
        $("#select_kikaku").css(
{          'background-color':'white',
          'color':'#808080',
          'border':'solid #808080 1px',
}        );
        $("#select_mogi").css(
{          'background-color':'#def7f9',
          'color':'#1b3988',
          'border':'solid #1b3988 1px',
}        );
      } else {
        $mogi.slideDown();
        $mogi.addClass("active");
        $("#select_mogi").css(
{          'background-color':'#def7f9',
          'color':'#1b3988',
          'border':'solid #1b3988 1px',
}        );
      }
    };
  });



  $("#select_kikaku").click(function(){
    var $kikaku = $(".faq_kikaku");
    var $mogi = $(".faq_mogi");
    $(".please_select").slideUp();
    if(!$kikaku.hasClass("active")){
      if($mogi.hasClass("active")){
        $mogi.hide();
        $mogi.removeClass("active");
        $kikaku.show();
        $kikaku.addClass("active");
        $("#select_mogi").css({
          'background-color':'white',
          'color':'#808080',
          'border':'solid #808080 1px'
        });
        $("#select_kikaku").css({
          'background-color':'#def7f9',
          'color':'#1b3988',
          'border':'solid #1b3988 1px'
        });
      } else {
        $kikaku.slideDown();
        $kikaku.addClass("active");
        $("#select_kikaku").css({
            'background-color':'#def7f9',
          'color':'#1b3988',
          'border':'solid #1b3988 1px'
        });
      }
    };
  });

  $("#select_mogi").click(function(){
    var $kikaku = $(".faq_kikaku");
    var $mogi = $(".faq_mogi");
    $(".please_select").slideUp();
    if(!$mogi.hasClass("active")){
      if($kikaku.hasClass("active")){
        $kikaku.hide();
        $kikaku.removeClass("active");
        $mogi.show();
        $mogi.addClass("active");
        $("#select_kikaku").css(
{          'background-color':'white',
          'color':'#808080',
          'border':'solid #808080 1px',
}        );
        $("#select_mogi").css(
{          'background-color':'#def7f9',
          'color':'#1b3988',
          'border':'solid #1b3988 1px',
}        );
      } else {
        $mogi.slideDown();
        $mogi.addClass("active");
        $("#select_mogi").css(
{          'background-color':'#def7f9',
          'color':'#1b3988',
          'border':'solid #1b3988 1px',
}        );
      }
    };
  });

  $("#jump_to_difference").click(function(){
    var position = $("#jump").offset().top;
    $('html,body').animate({
      'scrollTop':position
    },{
      queue : false
    });
  });



  $('.slider').slick('setPosition');



});

$('.slider').slick({
  autoplay:true,
  autoplaySpeed:3000,
});
