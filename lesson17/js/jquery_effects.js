$(document).ready(function(){
  $("#img1").click(function(e) {
    $(this).effect("shake", 
        { direction:"down", distance:20, times:5}, 3000);
  });        
  $("#img2").click(function(e) {
    $(this).effect("scale", 
      { direction:"both", origin:["middle", "right"], 
        percent:40, scale:"box", easing:"easeInBounce"}, 3000);
  }); 
  $("#img3").click(function(e) {
    $(this).effect("slide", 
      { direction:"down", distance:200}, 3000, function(){
          $(this).effect("slide", 
              {direction:"right", distance:200}, 3000);
    });
  }); 
  $("#img4").click(function(e) {
    $(this).effect("explode", {pieces:16}, 3000);
  });
});