var startX = startY = 60;
var topIndex, maxIndex;
$(window).load(function(){
  topIndex = $(".photo").length-1;
  maxIndex = topIndex;
  $("#right").click(function(e){move(e, "right");});
  $("#left").click(function(e){move(e, "left");});
  $("#bigger").click(function(e){resize(e, "bigger");});
  $("#smaller").click(function(e){resize(e, "smaller");});
  $("#stack").click(stack);
  $("#tile").click(tile);
  $("#flip").click(flip);
  stack();
});
function resize(e, direction){
  var img = $("img:eq(" + topIndex + ")");
  if (direction == "bigger"){ img.width(img.width()+20); }
  else { img.width(img.width()-20); }
}
function move(e, direction){
  var img = $("img:eq(" + topIndex + ")");
  var pos = img.offset();
  if (direction == "right"){ pos.left += 10;}
  else {pos.left -= 10;}
  img.offset(pos);
  startX = pos.left;
  startY = pos.top;
}
function stack(){
  var x = startX,  y = startY;
  $(".photo").each(function(indx){
    $(this).offset({ top:y, left:x });
    x += 20;
    y += 20;
  });
}
function tile(){
  var x = startX, y = currTop = startY;
  var maxH = 0;
  $(".photo").each(function(indx){
    maxH = Math.max(maxH, $(this).outerHeight());
    $(this).offset({ top:y, left:x });
    x += $(this).outerWidth();
    if (x > 400){
      y = currTop + maxH;
      x = startX;
      maxH = 0;      
    }
  });
}
function flip(){
  topIndex++;
  if (topIndex > $(".photo").length-1){ topIndex=0; }
  $(".photo").each(function(indx){
    if (indx <= topIndex){ z = maxIndex - (topIndex - indx); }
    else { var z = indx - topIndex - 1; }
    $(this).css("z-index", z);
  });
}