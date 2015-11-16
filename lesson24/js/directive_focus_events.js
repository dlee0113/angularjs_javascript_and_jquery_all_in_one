angular.module('myApp', []).
  controller('myController', function($scope) {
    $scope.inputData = { input1: {value: "", state: ""}, 
                         input2: {value: "", state: ""} };
    $scope.focusGained = function(input){
      $scope.inputData[input]['value'] = '';
      $scope.inputData[input]['state'] = 'Focus Gained';
    };
    $scope.focusLost = function(event, input){
      var element = angular.element(event.target);
      var value = element.val();
      $scope.inputData[input]['value'] = value.toUpperCase();
      $scope.inputData[input]['state'] = "Focus Lost";
    };
  });