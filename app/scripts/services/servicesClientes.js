var Datastore = require('nedb');
 	
app.factory('servicesClientes', function($rootScope){
 
	var db = new Datastore({ filename:'/home/workspace/projects/Manager-Work-Customers/database/clientes.db', autoload: true });

  service.db = db;
	// Insert objects into DB, firing event
  	service.insertCliente = function(doc) {
    	
    	this.db.insert(doc, function(err, saved){
      		
      		if(err || !saved){
            
            	console.log('error not inserted')
              console.log(err.message)
            
            }else{
              
              console.log('inserted')
            
              $rootScope.$broadcast('clientes-db-change'); 
            }
    });
  }

  return service;

});