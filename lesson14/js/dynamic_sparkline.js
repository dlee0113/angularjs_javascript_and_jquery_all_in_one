function randInt(max) { 
  return Math.floor((Math.random()*max)+1); }
function adjValues(){
  $("div").each(function(){
    var lineValues = $(this).data("valueArr");
    lineValues.shift();
    lineValues.push(randInt(100));
    $(this).children("span").html(lineValues[0]);
    renderSpark($(this).children("canvas").get(0), lineValues);
  });
  setTimeout(adjValues, 1000);
}
function renderSpark(c, lineValues){
  c.width = c.width;
  var xAdj = c.width/lineValues.length;
  var ctx = c.getContext("2d");
  ctx.fillStyle = "#000000";
  ctx.strokeStyle = "#00ffff";
  ctx.lineWidth = 3;
  var x = 1;
  ctx.moveTo(x,(c.height));
  for (var idx in lineValues){
    var value = parseInt(lineValues[idx]);
    ctx.lineTo(x+xAdj, (c.height - value));
    x += xAdj;
  }
  ctx.stroke();
}
function getRandomArray(){
  var arr = new Array();
  for(var x=0; x<20; x++){ arr.push(randInt(100)); }
  return arr;
}
$(document).ready(function(){
  $("div").each(function(){ 
    $(this).data("valueArr", getRandomArray()); });
  adjValues();
});