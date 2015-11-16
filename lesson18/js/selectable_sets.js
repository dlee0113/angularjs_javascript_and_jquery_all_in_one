$(document).ready(function(){
  for(var i=0; i<100; i++){ 
    $("#set1").append($("<p></p>").html("Item "+i)); } 
  $("#set1").selectable({ filter:"p" });  
  $("#set1").on("selectablestart", function(e, ui){  
    $("span").html("Selecting "); });
  $("#set1").on("selectableselecting", function(e, ui){
    $("span").append(ui.selecting.innerHTML+", "); });  
  $("#set1").on("selectablestop", function(e, ui){ 
    $("span").html("Selection Complete"); });
  $("#set2").selectable();
  $("#set2").on("selectablestop", function(e, ui){ 
    var selection = $("#set2 .ui-selected");
    selection.effect("highlight");
    $("span").html("Selected "+ selection.length + 
                   " Photos"); });
});