function updateTable(data){
  var parks = $(data).find("park");
  parks.each(function(){
    var tr = $("<tr></tr>");
    tr.append($("<td></td>").html($(this).children("name").text()));
    tr.append($("<td></td>").html($(this).children("location").text()));
    tr.append($("<td></td>").html($(this).children("established").text()));
    var img = $('<img />').attr("src", "/images/"+$(this).children("image").text());
    tr.append($("<td></td>").append(img));
    $("tbody").append(tr);
  });
}
$(document).ready(function(){
  $.get("data/parkdata.xml", updateTable);
});