
// loadingのdivを取得
var loading = document.getElementById('black_wall');
// contentsのdivを取得
var contents = document.getElementById('index_contents');
var contents2 = document.getElementById('index_contents_2');

// 読み込みが完了したら
window.addEventListener('load', function () {
  // loadingのdivを非表示に
  loading.style.display = 'none';
  // contentsのdivを表示
  contents.classList.remove('hidden');
  contents2.classList.remove('hidden');

});



$(function(){
  $(document).ready( function(){
    // ページ読み込み時に実行したい処理
    var rotation = function (){
      $("#loading").rotate({
        angle:0,
        animateTo:360,
        callback: rotation
      });
    }
    rotation();


    //開いた画面の高さを取得
    var WindowHeight = $(window).height();
    var Height = WindowHeight - 70; //WindowHeightは変数で任意の名前
    $('.wrapper').css('min-height',Height+'px');



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

  $("#jump_to_faq").click(function(){
    var position = $("#faq").offset().top;
    $('html,body').animate({
      'scrollTop':position
    },{
      queue : false
    });
  });

  $("#jump_to_message").click(function(){
    var position = $("#message").offset().top;
    $('html,body').animate({
      'scrollTop':position
    },{
      queue : false
    });
  });

  $("#jump_to_gallery").click(function(){
    var position = $("#gallery").offset().top;
    $('html,body').animate({
      'scrollTop':position
    },{
      queue : false
    });
  });


  $(".menu_btn").hover(
    function(){
      $(this).animate({
        'color':'#C1272D'
      },500);
    },function(){
      $(this).animate({
        'color':'white'
      },1000);
    }
  );



  $('.slider').slick('setPosition');



});

$('.slider').slick({
  autoplay:true,
  autoplaySpeed:3000,
});
