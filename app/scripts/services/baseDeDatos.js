/*
Las factorys clientes y trabajos en realidad son DBs NeDB simples y sencillas.
*/

(function() {
  'use strict';

  var Datastore = require('nedb');
  var path = require('path');

  angular
    .module('Imprenta')
    .factory('baseDeDatos', baseDeDatosNeDB);

  function baseDeDatosNeDB(nwgui) {
    var params1 = {
      filename: path.join(nwgui.App.dataPath, 'clientes.db'),
      autoload: true
    };
    var params2 = {
      filename: path.join(nwgui.App.dataPath, 'trabajos.db'),
      autoload: true
    };
    var db = {}
    db.clientes = new Datastore(params1);
    db.trabajos = new Datastore(params2);
    return db;
  }
})();