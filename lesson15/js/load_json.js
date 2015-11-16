function updateImages(data){
  for (i=0; i<data.length; i++){
    var imageInfo =data[i];
    var img = $('<img />').attr("src", "/images/"+imageInfo.image);
    var title = $("<p></p>").html(imageInfo.title);
    var div = $("<div></div>").append(img, title);
    $("#images").append(div);
  }
}
$(document).ready(function(){
  $.get("data/images.json", updateImages);
});