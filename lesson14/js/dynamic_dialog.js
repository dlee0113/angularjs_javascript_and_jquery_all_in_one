function update(){
  $("#overlay, #dialog").hide();
  $("#title p").html($("#titleT").val());
  $("#content").html($("#contentT").val());
  $("#leftNav span").remove();
  $("input:checkbox").each(function(){
    if($(this).prop("checked")){
      $("#leftNav").append($("<span></span>")
          .html($(this).val()));
    }
  });
}
$(document).ready(function(){
  $("#overlay, #dialog").hide();
  $("#edit").click(function(){ 
    $("#overlay, #dialog").show(); });
  $("#updateB").click(update);
});