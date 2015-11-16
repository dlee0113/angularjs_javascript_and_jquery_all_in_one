angular.module('myApp', [])
.directive('zoomit', function() {
  return {
    link: function (scope, elem, attr){
      var dragging = false;
      var tolerance = 10;
      var lastX = 0;
      elem.on('mousedown', function(event){
        lastX = event.screenX;
        event.preventDefault();
        dragging = true;
      });
      elem.on('mouseup', function(){
        dragging = false;
      });
      elem.on('mouseleave', function(){
        dragging = false;
      });
      elem.on('mousemove', function(event){
        if(dragging){
          var adjustment = null;
          if ( event.screenX > lastX+tolerance &&
              elem.width() < 300){
            adjustment = 1.1;
          } else if ( event.screenX < lastX-tolerance &&
              elem.width() > 100){
            adjustment = .9;
          }          
          if(adjustment){          
            //requires full jQuery library
            elem.width(elem.width()*adjustment);
            elem.height(elem.height()*adjustment);
            lastX = event.screenX;
          }
        }
      });
    }
  };
})
.directive('fadeit', function() {
  return {
    link: function (scope, elem, attr){
      var dragging = false;
      var tolerance = 10;
      var lastY = 0;
      elem.on('mousedown', function(event){
        lastY = event.screenY;
        event.preventDefault();
        dragging = true;
      });
      elem.on('mouseup', function(){
        dragging = false;
      });
      elem.on('mouseleave', function(){
        dragging = false;
      });
      elem.on('mousemove', function(event){
        if(dragging){
          var adjustment = null;
          var currentOpacity = parseFloat(elem.css("opacity"));
          if ( event.screenY > lastY+tolerance &&
              currentOpacity < 1){
            adjustment = 1.1;
          } else if ( event.screenY < lastY-tolerance &&
              currentOpacity > 0.5){
            adjustment = .9;
          }
          if(adjustment){          
            //requires full jQuery library
            elem.css("opacity", currentOpacity*adjustment);
            lastY = event.screenY;
          }
        }
      });
    }
  };
});