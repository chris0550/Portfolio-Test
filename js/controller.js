var appController = angular.module('appController',[]);

appController.controller('state1controller', ['$scope', function($scope){
	$scope.items = ["A", "List", "Of", "Items"];
}]);

appController.controller('state2controller', ['$scope', function($scope){
	$scope.things = ["A", "List", "Of", "Items"];
}]);

appController.controller('slidercontroller', ['$scope', function($scope) {
    $scope.pictures=[
    				 {src:'img1.png',title:'Pic 1'},
    				 {src:'img2.jpg',title:'Pic 2'},
    				 {src:'img3.jpg',title:'Pic 3'},
    				 {src:'img4.png',title:'Pic 4'},
    				 {src:'img5.png',title:'Pic 5'}
    				]; 
}]);