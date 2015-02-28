(function(){
  'use strict';

  angular
    .module('Imprenta')
    .controller('clienteDetailCtrl',['$scope','baseDeDatos', clienteDetailCtrl]);

    function clienteDetailCtrl($scope, db){

      
      db.clientes.findOne({cuitCuil: $scope.cuitCuil}, function (err, doc) {
            if(doc === null){
              alert("No se encotro detalles del cliente seleccionado")
            }
            else
            {
              $scope.clienteDetail = doc
            }
      })
    }

})();