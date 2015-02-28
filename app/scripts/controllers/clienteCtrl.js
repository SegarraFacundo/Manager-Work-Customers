(function(){
  'use strict';

  angular
  	.module('Imprenta')
  	.controller('clienteCtrl', ['$scope','baseDeDatos', clienteCtrl]); 

  	function clienteCtrl($scope, baseDeDatos){

      
      
  		updateClientesList();

  		$scope.$on('clientes-db-change', updateClientesList);

    	function updateClientesList() {
      		
      	console.log('updated');
      		
      	baseDeDatos.clientes.find({}, function(err, docs){
        	$scope.clientes = docs;
        	$scope.$apply();
      	})
    	}
      
      $scope.tiposClientes = [
                              {valor:'IVA Responsable Inscripto'},
                              {valor:'Responsable Monotributo'},
                              {valor:'IVA Sujeto Exento'},
                              {valor:'Consumidor Final'}
      ]; 

      $scope.provincias = [
                              { nombre:'Buenos Aires' },
                              { nombre:'Catamarca' },
                              { nombre:'Chaco' },
                              { nombre:'Chubut' },
                              { nombre:'Córdoba' },
                              { nombre:'Corrientes' },
                              { nombre:'Entre Ríos' },
                              { nombre:'Formosa' },
                              { nombre:'Jujuy' },
                              { nombre:'La Pampa' },
                              { nombre:'La Rioja' },
                              { nombre:'Mendoza' },
                              { nombre:'Misiones' },
                              { nombre:'Neuquén' },
                              { nombre:'Río Negro' },
                              { nombre:'Salta' },
                              { nombre:'San Juan' },
                              { nombre:'San Luis' },
                              { nombre:'Santa Cruz' },
                              { nombre:'Santa Fe' },
                              { nombre:'Santiago del Estero' },
                              { nombre:'Tierra del Fuego' },
                              { nombre:'Tucumán' }                            

      ];

      $scope.localidades = [
                              { nombre:'Buenos Aires' },
                              { nombre:'Catamarca' },
                              { nombre:'Chaco' },
                              { nombre:'Chubut' },
                              { nombre:'Córdoba' },
                              { nombre:'Corrientes' },
                              { nombre:'Entre Ríos' },
                              { nombre:'Formosa' },
                              { nombre:'Jujuy' },
                              { nombre:'La Pampa' },
                              { nombre:'La Rioja' },
                              { nombre:'Mendoza' },
                              { nombre:'Misiones' },
                              { nombre:'Neuquén' },
                              { nombre:'Río Negro' },
                              { nombre:'Salta' },
                              { nombre:'San Juan' },
                              { nombre:'San Luis' },
                              { nombre:'Santa Cruz' },
                              { nombre:'Santa Fe' },
                              { nombre:'Santiago del Estero' },
                              { nombre:'Tierra del Fuego' },
                              { nombre:'Tucumán' }                            

      ];

       
      $scope.agregarCliente = function(){ 

        var doc = { 
                    denominacion: $scope.cliente.denominacion,
                    codProxAuto: $scope.cliente.codProxAuto,
                    apellido: $scope.cliente.apellido,
                    nombre: $scope.cliente.nombre,
                    cuitCuil: $scope.cliente.cuitCuil,
                    tipoCliente: $scope.cliente.tipoCliente,
                    fechaInicio: $scope.cliente.fechaInicio,
                    telefono: $scope.cliente.telefono,
                    email: $scope.cliente.email,
                    direccion: $scope.cliente.direccion,
                    provincia: $scope.cliente.provincia,
                    localidad: $scope.cliente.localidad,
                  };

        baseDeDatos.clientes.insert(doc, function (err, newDoc) {   // Callback is optional
        // newDoc is the newly inserted document, including its _id
        // newDoc has no key called notToBeSaved since its value was undefined
          if(err != null){
            alert(err)
          }
          else
          {
            baseDeDatos.clientes.find({}, function(er, docs){
              if(docs === null){
                alert("No hay cliente cargados")
              }
              else
              {
                $scope.$apply(function(){
                  $scope.clients = docs
                })
              }   
            })
          }
        })
      }
    }
    

})();