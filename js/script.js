
$(function(){
  $(".header_sp").click(function(){
    $(".menu_sp").fadeIn();
  });

  $("#menu_close_btn").click(function(){
    $(".menu_sp").fadeOut();
  });
});
