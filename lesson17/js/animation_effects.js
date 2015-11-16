var coords = [{top:140, left:470, easing:"easeInBounce"},
              {top:100, left:200, easing:"easeOutElastic"}, 
              {top:300, left:200, easing:"easeInOutCirc"}, 
              {top:20, left:300, easing:"easeInBounce"}, 
              {top:10, left:10, easing:"easeOutExpo"}, 
              {top:200, left:100, easing:"easeInSine"}]
function reposition(){
  if (coords.length){
    coord = coords.pop();
    $(this).animate(coord, 1000, coord.easing, reposition);
  } else{ 
    $("#ball").effect("explode", {pieces:100}, 2000); }
}
$(document).ready(function(){
  $("#ball").click(reposition);
});