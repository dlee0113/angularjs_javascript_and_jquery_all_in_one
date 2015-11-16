function onloadHandler(){
  var available = document.getElementById("Available");
  Available.addEventListener('click', simbleClick, false);
  var allWeek = document.getElementById("AllWeek");
  AllWeek.addEventListener('click', eventClick, false);
  var weekDays = document.getElementById("WeekDays");
  WeekDays.addEventListener('click', eventClick, false);
}
function simbleClick(e){
  var cb = document.getElementById("check"+e.target.id);
  cb.click();
}
function eventClick(e){
    var event = document.createEvent("MouseEvents");
    event.initMouseEvent("click", true, true, window,
                          0, 0, 0, 0, 0, false, false, 
                          false, false, 0, null);
    var cb = document.getElementById("check"+e.target.id); 
    cb.dispatchEvent(event);
}