app.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("trabajos.listado");
  //
  // Now set up the states
  $stateProvider
    .state('trabajos', {
      url: "trabajos",
      templateUrl: "views/trabajos.html",
      controller: "menuTrabajos"
    })
    .state('trabajos.detail', {
      url: ".detail",
      views: {  "viewA": {
                          templateUrl: "views/trabajo-listado.html",
                          controller: "controllerTrabajos"
                         },
                "viewB": {
                          templateUrl: "views/trabajo-detail.html",
                          controller: "controllerTrabajos"
                         }
             }
    })
    .state('trabajos.new', {
      url: ".new",
      views: {
                "viewA": {
                          templateUrl: "views/trabajo-new.html",
                          controller: "controllerTrabajos"
                          },
                "viewB": {
                          templateUrl: "views/trabajo-tools.html",
                          controller: "controllerTrabajos"
                         }
              }
    })
    .state('clientes', {
      url: "clientes",
      templateUrl: "views/clientes.html",
      controller: "menuClientes"
    })
    .state('clientes.detail', {
      url: ".detail",
      views: {  "viewA": {
                          templateUrl: "views/cliente-listado.html",
                          controller: "controllerClientes"
                         },
                "viewB": {
                          templateUrl: "views/cliente-detail.html",
                          controller: "controllerClientes"
                         }
             }
    })
    .state('clientes.new', {
      url: ".new",
      views: {
                "viewA": {
                          templateUrl: "views/cliente-new.html",
                          controller: "controllerClientes"
                          },
                "viewB": {
                          templateUrl: "views/cliente-tools.html",
                          controller: "controllerClientes"
                         }
              }
    })
    
});