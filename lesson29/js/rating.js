angular.module('myApp', [])
.controller('myController', ['$scope', function($scope) {
  $scope.stars = [1,2,3,4,5];
  $scope.items = [
      { 
        description: "Mysty Mountains", 
        img: "/images/misty_mountains.jpg",
        rating: 3},
      { 
        description: "Wheel", 
        img: "/images/wheel.jpg",
        rating: 4},
      { 
        description: "Pool", 
        img: "/images/pool.jpg",
        rating: 4}
    ];  
  $scope.adjustRating = function(item, value){
    item.rating = value;
  };  
}]);