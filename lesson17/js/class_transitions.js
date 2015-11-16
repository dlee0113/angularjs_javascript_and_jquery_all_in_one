$(document).ready(function(){
  $("#btn1").click(function(e) { 
    $(this).addClass( "round", 2000, "easeInElastic"); });
  $("#btn2").click(function(e) { 
    $(this).switchClass( "active", "inactive", 2000, 
                         "easeInOutElastic"); });
  $("#btn3").click(function(e) {
    $(this).toggleClass( "round", 2000, "easeOutQuart"); });
  $("#btn4").click(function(e) { 
    $(this).removeClass( "round", 2000, "easeInCirc"); });
});