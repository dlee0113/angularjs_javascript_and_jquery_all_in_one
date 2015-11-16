$(document).ready(function(){
  $("#set").click(function(e){setCookie($("#cookieName").val(), 
                                        $("#cookieValue").val(), 1);});
  $("#get").click(function(e){getCookie($("#cookieName").val());});
  $("#delete").click(function(e){setCookie($("#cookieName").val(), "", -1);});
  displayCookies();
});
function setCookie(name, value, days) {
  var date = new Date();
  date.setTime(date.getTime()+(days*24*60*60*1000));
  var expires = "; expires="+date.toGMTString();
  document.cookie = name + "=" + value + expires + "; path=/";
  displayCookies();
}
function getCookie(name) {
  var cookieStr = $("#cookieName").val() + "=";
  var cArr = document.cookie.split(';');
  for(var i=0;i < cArr.length;i++) {
    var cookie = cArr[i];
    while (cookie.charAt(0)==' '){
      cookie = cookie.substring(1, cookie.length);
    }
    if (cookie.indexOf(cookieStr) == 0){ 
      $("#cookieValue").val(cookie.substring(cookieStr.length, cookie.length));
      break;
    }
  }
}
function displayCookies(){
  $("#cookieList").html("");
  var cArr = document.cookie.split(';');
  for(var i=0;i < cArr.length;i++) {
    var cookie = cArr[i];
    $("#cookieList").append($("<li></li>").html(cookie));
  }
}