var sliderMax = sliderWidth = sliderLeft = 0;
var minHorizontalRatio = 400/600;
function addImages(){
  var images = ["img3", "img1", "volcano", "peak", 
                "river", "wheel", "img7"];
  for (i in images){ 
    $("#imageSlide").append('<img src="/images/'+ 
                            images[i] + '.jpg" />'); }
  setTimeout(function() {
      $("#imageSlide img").each(function(){ 
        sliderWidth += $(this).width() + 26; });
      sliderWidth += 40; 
      $("#imageSlide").width(sliderWidth);
      sliderMax = $("#selector").width() - sliderWidth;
    }, 1000);
}
function slide(value){
  var oldLeft = sliderLeft; 
  sliderLeft = sliderLeft + value;
  if (sliderLeft >= 0) { sliderLeft = 0; }
  if (sliderLeft <= sliderMax) { sliderLeft = sliderMax; }
  if(oldLeft != sliderLeft) { 
    $("#imageSlide").animate({left:sliderLeft}, 300, 'linear', 
        function(){ 
          slide(value); });
  }
  return false;
}
function setPhoto(){
  var newPhoto = $(this).attr("src");
  var horizontal = (minHorizontalRatio > 
        $(this).height() / $(this).width());
  $("#photo img").stop(true).fadeTo(500, .1, "linear", 
    function (){
      $("#photo img").attr("src", newPhoto); });
  if (horizontal) { 
    $("#photo img").css({width:600,height:"auto"}) }
  else { 
    $("#photo img").css({width:"auto",height:400}) }
  $("#photo img").fadeTo(500, 1);
  return false;
}
$(document).ready(function(){
  addImages();
  $("#left").mouseenter(function(){ 
    slide(50); });
  $("#left").mouseleave(function(){ 
    $("#imageSlide").stop(true); return false; });
  $("#right").mouseenter(function(){ 
    slide(-50); });
  $("#right").mouseleave(function(){ 
    $("#imageSlide").stop(true); return false; });
  $("#imageSlide img").mouseenter(function(){ 
    $(this).stop(true).animate({height:120, opacity:1},500); 
                               return false; });
  $("#imageSlide img").mouseleave(function(){ 
    $(this).stop(true).animate({height:100, opacity:.5},500); 
                               return false; });
  $("#imageSlide img").click(setPhoto);
  $("#imageSlide img:first").click();
});