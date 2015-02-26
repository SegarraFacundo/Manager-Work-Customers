var app = angular.module('App-Imprenta');

app.controller('controllerClientes', ['$scope','servicesClientes','$state',
  
  	function($scope, Clientes, $state) {
    	
    	$scope.save = function (cliente) {
      		
      		Clientes.insertCliente(cliente);
      		
    	}

	}
]);