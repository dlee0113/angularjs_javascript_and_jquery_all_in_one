$(window).load(function(){
  $("#drag1").draggable({cursor:"move", opacity:.5});
  $("#drag1").on("dragstop", function(){
    $(this).effect("bounce", 1000); });
  $("#drag2").draggable({helper:"clone"});
  $("#drag2").on("dragstop", function(e, ui){
    $("#drag2").animate(ui.offset); });
  $("#drag3").draggable();
  $("#drag3").on("drag", function(e){ 
    $(this).children("p").html(e.pageX+", "+e.pageY); });
  $("#drag3").on("dragstop", function(e){ 
    $(this).children("p").html(""); });
});