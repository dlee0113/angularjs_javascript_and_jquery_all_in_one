function failure(){ alert("You May Not Pass!"); }
function success(){ alert("You May Pass!"); }
function always(){ alert("Questions Answered."); }
function askYourQuestions(){
  $.get("/request", 
   $("#requestForm").serialize()).done(success).fail(failure).always(always);
  return false;
}
$(document).ready(function(){        
  $("#requestButton").click(askYourQuestions);
});