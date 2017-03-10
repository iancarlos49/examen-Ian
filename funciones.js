var BacoB = angular.module("BacoB",[]);
BacoB.controller("Mensaje",function($scope){
$scope.mensaje = "mensaje"	
	$scope.cantidad = 5;
	$scope.cantidad2 = 6;
	$scope.total = 11;
	$scope.total = $scope.cantidad = $scope.cantidad2

	operaciones = angular.module("operaciones",[]);
	operaciones.controller("suma",function (argument) {
		// body...
	})

