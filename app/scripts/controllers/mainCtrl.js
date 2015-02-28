(function() {
  'use strict';

  angular
    .module('Imprenta',['ui.router'])
    .controller('mainCtrl', ['$scope','baseDeDatos', mainCtrl]);

    function mainCtrl($scope, db){
      	
      	/*Actualiza datos cuando hay cambios en la DB 
      	En los cambios de la DB poner $rootScope.$broadcast('db-change');*/
  		updateDB();

  		$scope.$on('db-change', updateDB);

    	function updateDB() {
      		
      		db.clientes.find({}, function(err, docs){
        		$scope.clientes = docs;
        		$scope.$apply();
      		})

      		db.trabajos.find({}, function(err, docs){
        		$scope.trabajos = docs;
        		$scope.$apply();
      		})

      		console.log('updated');
    	}

    }

})();