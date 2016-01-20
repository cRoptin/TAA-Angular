"use strict";
angular.module('webappApp')
  .controller('AddDepartmentCtrl', function ($scope, $http) {
    addDepartment($http,$scope);
});
function addDepartment($http,$scope){
  $http.get("http://localhos:8081/addDepartment").success(function(response) {
          $scope.developpers = response;
  });
 }
