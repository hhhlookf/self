$(function() {
  // 下载产品的hover效果      
  $('.down-con').hover(function() {
      $(this).children('.init').hide();
      $(this).children('.after-top').stop().animate({
        height: '172px',
      })
      $(this).children('.down-pic').stop().animate({
        height: '108px',
      })
  }, function() {
      $(this).children('.init').fadeIn(500);
      $(this).children('.after-top').stop().animate({
        height: '0px',
      });
      $(this).children('.down-pic').stop().animate({
        height: '0px',
      });
  })      

})