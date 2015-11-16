function setArticle(){
  $("#content").load("data/"+$(this).attr("article")+".html");
}
$(document).ready(function(){
  $(".navItem").click(setArticle);
});