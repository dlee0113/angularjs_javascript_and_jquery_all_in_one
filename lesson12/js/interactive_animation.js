var rightEdge = window.innerWidth;
var bottomEdge = window.innerHeight;
$(window).load(function(){        
  $("#ship").offset({top:bottomEdge/2, left:rightEdge/2});
  $("#up").click(function(){
      $("#ship").attr("src","/images/saucerUp.png");
      $("#ship").stop(true).animate({top:0}, 5000); 
    });
  $("#left").click(function(){
      $("#ship").attr("src","/images/saucerRight.png"); 
      $("#ship").stop(true).animate({left:0}, 5000); 
    });
  $("#right").click(function(){ 
      $("#ship").attr("src","/images/saucerLeft.png");
      $("#ship").stop(true).animate({left:rightEdge}, 5000); 
    });
  $("#down").click(function(){ 
      $("#ship").attr("src","/images/saucerDown.png");
      $("#ship").stop(true).animate({top:bottomEdge}, 5000);
    });
  $("#stop").click(function(){ $("#ship").stop(true) });
});