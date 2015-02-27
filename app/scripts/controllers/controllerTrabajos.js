var app = angular.module('App-Imprenta');

app.controller('controllerTrabajos', function($scope){

	var trabajoNuevo = {
						"tipoTrabajo": "",
						"idCliente": "",
						"fechaSolicitud": "",
						"fechaEntrega": "",
						"fechaEstimada": "",
						"cai": "",
						"fechaUpdate": "",
						"estado": "",
						};

	$scope.trabajos = {};

});