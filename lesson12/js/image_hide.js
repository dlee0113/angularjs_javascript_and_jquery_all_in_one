$(window).load(function(){
  $("#handle").click(toggleImage);
});
function toggleImage(){
  if ($("#handle").html() == '+'){
    $("#photo").show(1000, function(){$("#footer").show();});
    $("#handle").html('-');
  } else {
    $("#footer").hide();
    $("#photo").hide(1000);
    $("#handle").html('+');
  }
}