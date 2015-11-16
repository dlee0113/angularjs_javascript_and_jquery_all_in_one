function textChange(){
  var inElement = document.getElementById("textIn");
  var outElements = document.getElementsByTagName("p");
  var headingElements = document.getElementsByClassName("heading");
  for(var i=0; i<outElements.length; i++){          
    var outItem = outElements[i];
    headingElements[i].innerHTML = "Updating " + (i+1) + 
                                   " to " + inElement.value;
    outItem.innerHTML = inElement.value;
  }
}