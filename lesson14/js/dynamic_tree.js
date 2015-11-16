function toggleItem(){
  $(this).parent().children("div").toggle();
  $(this).toggleClass("collapse");
  return false; 
}
function addItem(parentItem, item){
  var newItem = $('<div class="tree"></div>').hide();
  newItem.append($("<span></span>").click(toggleItem));
  newItem.append($("<label></label>").html(item.label));
  newItem.append($('<div class="content"></div>')
      .append(item.content).hide());
  parentItem.append(newItem);
  return newItem;
}
function randInt(max) { 
  return Math.floor((Math.random()*max)); }
function getRandomItem(){
  var itemTypes=["image", "input", "textarea"];
  var images=["volcano.jpg", "liberty.jpg", "falls2.jpg", 
              "wheel.jpg", "sunset.jpg"];
  var inputs=["text","checkbox", "radio"];
  switch(itemTypes[randInt(3)]){
    case "image":
      var img = images[randInt(5)];
      return { label:img, 
               content:$('<img src="/images/' + img + '" />')};
    case "input":
      var type = inputs[randInt(3)];
      return { label:type, 
               content:$('<input type="'+type+'">'+type+
                         '</input>')};
    case "textarea":
      return { label:"textarea", 
               content:$('<textarea>textarea</textarea>')};
  }
}
function addLevels(parent, levels){
  var element = addItem(parent, getRandomItem());
  if( levels > 0 ){
    for(var x=0; x<5; x++){ addLevels( element, levels-1 ) }; }
  return element;
}
$(document).ready(function(){
  var root = addLevels($("#treeContainer"), 4);
  root.show();
});