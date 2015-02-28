(function () {
  'use strict';

  angular
    
    .module('Imprenta')
    
    .config(function($stateProvider, $urlRouterProvider) {
      //
      // For any unmatched url, redirect to /state1
      $urlRouterProvider.otherwise("clientes.detail");
      //
      // Now set up the states
      $stateProvider
        .state('trabajos', {
          url: "trabajos",
          templateUrl: "views/trabajos.html",
          controller: ""
        })
        .state('trabajos.detail', {
          url: ".detail",
          views: {  "viewA": {
                              templateUrl: "views/trabajo-listado.html",
                              controller: ""
                             },
                    "viewB": {
                              templateUrl: "views/trabajo-detail.html",
                              controller: ""
                             }
                 }
        })
        .state('trabajos.new', {
          url: ".new",
          views: {
                    "viewA": {
                              templateUrl: "views/trabajo-new.html",
                              controller: ""
                              },
                    "viewB": {
                              templateUrl: "views/trabajo-tools.html",
                              controller: ""
                             }
                  }
        })
        .state('clientes', {
          url: "clientes",
          templateUrl: "views/clientes.html",
          controller: "clienteCtrl"
        })
        .state('clientes.detail', {
          url: ".detail",
          views: {  "viewA": {
                              templateUrl: "views/cliente-listado.html",
                              controller: "clienteListCtrl"
                             },
                    "viewB": {
                              templateUrl: "views/cliente-detail.html",
                              controller: "clienteDetailCtrl"
                             }
                 }
        })
        .state('clientes.new', {
          url: ".new",
          views: {
                    "viewA": {
                              templateUrl: "views/cliente-new.html",
                              controller: "clienteNewCtrl"
                              },
                    "viewB": {
                              templateUrl: "views/cliente-tools.html",
                              controller: ""
                             }
                  }
        })
    
    })

})();