
var app=angular.module('firstDemo',[]);

app.controller('MainCtrl',[
'$scope',
function($scope){

 $scope.tests = [
		 {title:'AngularJs', stars:5},
		 {title:'MongoDB',stars:3},
		 {title:'NodeJs',stars:5},
		 {title:'ExpressJS',stars:4}	      	
		];

$scope.addTech= function()
  {
   $scope.tests.push({title:$scope.title,stars:$scope.stars});
   $scope.title='';
   $scope.stars=0;	
  };
}

]);