var app = angular.module('App-Imprenta');

app.controller('menuClientes', ['$scope','servicesClientes', function($scope, Clientes){

	updateClientesList();

	$scope.$on('clientes-db-change', updateClientesList)

  	function updateClientesList() {
    	console.log('updated')
    	Clientes.find({}, function(err, docs){
      		$scope.clientes = docs;
      		$scope.$apply();
    	})
  	} 
}]);