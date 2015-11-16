function setTrip(data){
  $("#idx").html(data.idx);
  $("#title").html(data.title);
  $("#photo").attr("src", "/images/"+data.image);
  $("#date").html(data.date);
  $("label:first").html(data.days);
  $("label:last").html(data.location);
  $(".star:gt("+(parseInt(data.rating)-1)+")").attr("src", "/images/empty.png");
  $(".star:lt("+(parseInt(data.rating))+")").attr("src", "/images/star.png");
}
function getTrip(idx){
  $.get("/getTrip", {idx: idx}, setTrip);
}
function setList(data){
  var items = [];
  $.each(data, function(key, val) {
    var item = $("<span></span>").html(val.title);
    item.click(function(){getTrip(val.idx)});
    $("#leftNav").append(item);
  });      
}
function sendRating(){
  var idx = $("#idx").html();
  var rating = $(".star").index($(this))+1;
  $.post("/setRating", {idx: idx, rating: rating}, setTrip);
}
$(document).ready(function(){
  $.get("/getList", setList).done(function(){
     $("span:first").click(); return false; });
  $(".star").click(sendRating);
});