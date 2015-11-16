$(window).load(function(){
  $("img").mouseover(function(){$(this).fadeTo(1000, 1);});
  $("img").mouseout(function(){$(this).fadeTo(1000, .3);});
});