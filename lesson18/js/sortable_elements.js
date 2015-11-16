var images = [
  {src:"/images/lake.jpg",name:"Lake"},
  {src:"/images/cliff.jpg",name:"Cliff"},
  {src:"/images/flower2.jpg",name:"Violet"}, 
  {src:"/images/tiger.jpg",name:"Tiger"},
  {src:"/images/volcano.jpg",name:"Volcano"}, 
  {src:"/images/flower.jpg",name:"Flower"}];
function buildLists(){
  $.each(images, function(i,item){
    var img = $("<img></img>").attr("src", item.src);
    var name = $("<p></p>").html(item.name);
    $("#sorter1").append($("<div></div>").append(img, name));
    var tr = $("<tr></tr>");
    tr.append($("<td></td>").append(
        $("<img></img>").attr("src", item.src)));
    tr.append($("<td></td>").html(i));
    tr.append($("<td></td>").html(item.name));
    tr.append($("<td></td>").html(item.src));
    $("#sortTable").append(tr);
  });       
}
$(document).ready(function(){
  buildLists();
  $("#sorter1").sortable(
      {cursor:"move", connectWith:"#sorter2"});
  $("#sorter2").sortable(
      {cursor:"move", connectWith:"#sorter1"});
  $("#sorter2").on("sortreceive", function(e, ui){
    ui.sender.effect("pulsate"); 
    $(this).effect("pulsate"); });
  $("#sortTable").sortable(
      {axis:"y", cursor:"n-resize", });
  $("#sortTable").on("sortupdate", function(e, ui){ 
    ui.item.effect("pulsate"); }); 
});