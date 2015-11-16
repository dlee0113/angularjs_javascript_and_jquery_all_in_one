$(document).ready(function(){
  $("#showMenu, #showMenu2, #toggleMenu").hide();
  $("#show").click(function(e) { 
      $("#showMenu").show("fold", {size:22}, 2000); });
  $("#show2").click(function(e) { 
      $("#showMenu2").show("scale", 
          {origin:["top","left"]}, 2000); });
  $("#showMenu").click(function(e) { 
      $("#showMenu").hide("fold", {size:22}, 2000); });
  $("#showMenu2").click(function(e) { 
      $("#showMenu2").hide("explode", {pieces:9}, 2000); });
  $("#toggle, #toggleMenu").click(function(e) { 
      $("#toggleMenu").toggle("blind", 
          {direction:"up", easing:"easeOutBounce"}, 1000); });
});