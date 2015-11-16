var tArr = ["Mens", "Womens", "Youth", "Childs"];
var sArr = ["XL", "M", "S", "XS"];
var kArr = ["pants", "shirt", "shoes", "socks", "sweater", "belt"];
function compare(a, b, column, numeric, order){
  var aValue = a.cells[column].innerHTML;
  var bValue = b.cells[column].innerHTML;
  if (numeric) { aValue = parseFloat(aValue );
                 bValue = parseFloat(bValue ); }
  if (aValue < bValue) return order;
  if (aValue > bValue) return -order;
  return 0;
}
function sortColumn(header, column){
  var rows = $("tbody tr");
  rows.sort(function(a, b){ 
      return compare(a, b, column, header.data("numeric"), 
                     header.data("order"));
    });
  $(rows).each(function(){ $("tbody").append($(this)); });
  header.data("order", -header.data("order"));
  $("span").removeClass("ascending descending");
  $("td").removeClass("sortColumn");
  if(header.data("order") > 0) { 
    header.children("span").addClass("ascending"); }
  else { 
    header.children("span").addClass("descending"); }
  $("tbody tr td:nth-child("+ (column + 1) +")")
    .addClass("sortColumn");
}
function filterColumn(input, column){
  $("tbody tr").show().each(function(){
    var header = $("th:eq("+ column +")");
    var filterVal = input.val();
    var rowVal = this.cells[column].innerHTML;
    if(header.data("numeric") ){
      if(parseFloat( filterVal ) >= parseFloat( rowVal )) { 
        $(this).hide(); }}           
    else {
      if(rowVal.indexOf(filterVal) < 0) { $(this).hide(); }}          
  });
}
function randInt(max) { 
  return Math.floor((Math.random()*max)+1); }
function buildData(){
  for(var x=1;x<26;x++){
      var row =$("<tr></tr>");
      row.append($("<td></td>").html(x));
      row.append($("<td></td>").html(
        tArr[randInt(3)] + " " + sArr[randInt(3)] +
        " " + kArr[randInt(5)]));
      row.append($("<td></td>").html(randInt(20)));
      row.append($("<td></td>")
          .html(((Math.random()*80)+5).toFixed(2)));
      $("tbody").append(row);}
}
$(document).ready(function(){
  buildData();
  $("th").each(function(i) {
      var header = $(this);
      header.data({numeric:header.hasClass("numeric"), order:-1});
      header.children("span").click(function(){ 
        sortColumn(header, i); });
      var filter = $('<input type="text" />');
      filter.keyup(function(){ 
        filterColumn(filter, i); });
      header.append(filter);
    });
});