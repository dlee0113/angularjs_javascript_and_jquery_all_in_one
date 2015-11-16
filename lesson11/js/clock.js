$(document).ready(function(){
  setTimeout(continueNotify, 3000);
  setInterval(displayTime, 1000);
});
function continueNotify(){
  var result = confirm("Do you wIsh to continue\nto receive notifications?");
  if (result==true) { setTimeout(continueNotify, 3000); }
}
function padNumber(num){
  if (num<10){ return "0"+num; }
  return num;
}
function displayTime(){
  var date = new Date();
  $("#clock").html(padNumber(date.getHours()) +":"+ 
               padNumber(date.getMinutes()) +":"+ 
               padNumber(date.getSeconds()));
}