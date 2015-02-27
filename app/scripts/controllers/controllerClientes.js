var app = angular.module('App-Imprenta');

app.controller('controllerClientes', ['$scope','servicesClientes','$state',
  
  	function($scope, Clientes, $state) {
    	
    	$scope.save = function (cliente) {
      		
      		Clientes.insertCliente(cliente);
			$scope.clientes = {};  

    	}
		
		var clienteNuevo = {
					    "nombre":"",
					    "apellido":"",
					    "dniCuit":"",
						"genero":"",
						"direccion":"",
						"ciudad":"",
						"fechaActividad":"",
						"telefono":"",
						"celular":"",
						"email":"",
						"edad":"",
						"tipoCliente":"",
						"fechaUpdate":"",
						"estado":""
				   		};
	}
]);