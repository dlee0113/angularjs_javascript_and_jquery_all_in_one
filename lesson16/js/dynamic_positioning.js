$(window).load(function(){
  $("#img2").position(
      {my:"left top", at:"right bottom", of:"#img1"});
  $("#img3").position(
      {my:"left top", at:"right bottom", of:"#img2"});
  $("div").mousemove(function(e) {
    $("#img4").position({ my:"left top", at:"center", of:e, 
                          collision:"flip", within:"div" });
  })
});