var valueArr = [10,8,3,12,12,15,15,3,4,5];
function randInt(max) { 
  return Math.floor((Math.random()*max)-3); }
function adjValues(){
  for (var i=0; i<valueArr.length; i++) {
      var adj = valueArr[i] + 
                Math.floor((Math.random()*7)-3);
      adj = Math.max(3, adj);
      adj = Math.min(15, adj);
      valueArr[i] = adj; 
    }
  updateEqualizer();
  setTimeout(adjValues, 500);
}
function updateEqualizer(){
  $("span").css({opacity:.3});
  $("#equalizer div").each(function(i){
    $(this).children("span:gt("+ (15 - valueArr[i]) +")")
      .css({opacity:1});
    $(this).children("p:first").html(valueArr[i]);
  });
}
$(document).ready(function(){
  for(var i=0; i< 10; i++){
    $("#equalizer").append($("<div></div>"));
  }
  $("#equalizer div").each(function (idx){
    $(this).append($("<p></p>").html(idx));
    for(var i=0; i< 2; i++){ 
      $(this).append($('<span class="red"></span>')); }
    for(var i=0; i< 2; i++){ 
      $(this).append($('<span class="orange"></span>')); }
    for(var i=0; i< 3; i++){ 
      $(this).append($('<span class="yellow"></span>')); }
    for(var i=0; i< 8; i++){ 
      $(this).append($('<span class="green"></span>')); }
    adjValues();
  });        
});