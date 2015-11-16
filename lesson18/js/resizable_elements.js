$(document).ready(function(){
  $("#resize1, #resize2, #resize3").draggable();
  $("#resize1").resizable(
      {aspectRatio:true, alsoResize:"#resize1 img" });
  $("#resize2").resizable(
      {alsoResize:"#resize2 img"});
  for(var i=0; i<100; i++){ 
    $("#list").append($("<p></p>").html("Item "+i)); }
  $("#resize3").resizable(
      {alsoResize:"#resize3 #list", handles:"n,s,e,w"});
});