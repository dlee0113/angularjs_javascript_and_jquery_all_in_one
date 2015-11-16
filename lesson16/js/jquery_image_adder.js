$(document).ready(function(){
  $("#arch").data("image", "/images/arch.jpg");
  $("#volcano").data("image", "/images/volcano.jpg");
  $("#pyramid").data("image", "/images/pyramid2.jpg");
  $("#add").click(function(){
    $("div:data(image)").each(function(){
      $(this).prepend(
          $('<img></img>').attr("src", $(this).data("image")));
    });
    $("div:not(:data(image))").each(function(){
      $(this).prepend(
          $('<img></img>').attr("src", "/images/insert.png"));
    });
  });
});