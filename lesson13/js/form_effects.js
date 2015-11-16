function changeCheckbox(){
  var checkbox = $("#"+$(this).attr("for"));
  if(checkbox.prop("checked")){  
    $(this).children("img").animate({opacity:.5, height:40, 
      "border-width":"1px"}, 500);}
  else { 
    $(this).children("img").animate({opacity:1, height:60, 
      "border-width":"2px"}, 500); }      
}
function changeRadio(){
  $(this).animate({opacity:.1}, 400, function(){          
    $("input:radio").next("label").removeClass("rb_checked");
    $(this).addClass("rb_checked");
    $(this).animate({opacity:1}, 800);
  });
}
$(document).ready(function(){
  $("form").hide();
  $("p").click(function(){$("form").toggle(1000); 
  return false;});        
  $("input:submit").mousedown(function(){
    $("form").toggle(1000); return false;});                        
  $("textarea").focus(function(){ 
    $(this).animate({width:350, height:100}, 1000);});
  $("textarea").blur(function(){ 
    $(this).animate({width:200, height:50}, 1000);});
  $(".rb").click(changeRadio);
  $("input:checkbox").prop("checked",false);
  $(".cb").click(changeCheckbox);
  $("input:text").keyup(function(){
      $(this).next("label").html($(this).val());});        
  $("#submit").mouseover(function(){
    $(this).animate({"background-color":"#0000FF", 
      "width":"140px"}, 400, "linear");});
  $("#submit").mouseout(function(){
    $(this).animate({"background-color":"#3377FF", 
      "width":"60px"}, 400, "linear");});
  $("#submit").focus(function(){
    $(this).animate({"background-color":"#0000FF", 
      "border-width":"5px"}, 400, "linear");});
  $("optgroup").mouseover(function(){
    $(this).stop(true).animate({"font-size":"18px"}, 200); 
    return false;});
  $("optgroup").mouseout(function(){
    $(this).stop(true).animate({"font-size":"15px"}, 200); 
    return false;});        
});