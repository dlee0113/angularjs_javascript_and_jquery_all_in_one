$(document).ready(function(){
  $("#drag1, #drag2, #drag3").draggable(
    { helper:"clone", cursor:"move", opacity:.7, zIndex:99 });
  $("#drop1").droppable(
      { accept:"img", tolerance:"fit"});
  $("#drop1").on("dropover", function(e,ui){ 
    $(this).effect("pulsate"); });
  $("#drop1").on("drop", function(e,ui){ 
    $(this).html($("<img></img>").attr("src", 
        ui.draggable.attr("src")));
    $(this).effect("bounce");
  });
  $("#drop2").droppable(
      { accept:"img", tolerance:"intersect", 
        hoverClass:"drop-hover"});
  $("#drop2").on("drop", function(e,ui){
    var item = $("<div></div>");
    item.append($("<img></img>").attr("src", 
        ui.draggable.attr("src")));
    item.append($("<span></span>").html(
        ui.draggable.attr("src")));
    $(this).append(item);
  });
});