$(window).load(function(){
  $("img").mouseover(function(){
      $(this).animate({width:"175px", opacity:1}, 1000);
    });
  $("img").mouseout(function(){
      $(this).animate({width:"100px", opacity:.3}, 1000);
    });
});