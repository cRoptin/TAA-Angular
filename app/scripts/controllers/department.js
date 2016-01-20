"use strict";
angular.module('webappApp')
  .controller('DepartmentCtrl', function ($scope, $http) {
    getDepartment($http,$scope);
});
function getDepartment($http,$scope){
  $http.get("http://localhos:8081/department").success(function(response) {
          $scope.developpers = response;
  });
 }
