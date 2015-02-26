app.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("trabajos.listado");
  //
  // Now set up the states
  $stateProvider
    .state('trabajos', {
      url: "trabajos",
      templateUrl: "scripts/views/trabajos.html",
      controller: "menuTrabajos"
    })
    .state('trabajos.detail', {
      url: ".detail",
      views: {  "viewA": {
                          templateUrl: "scripts/views/trabajo-listado.html",
                          controller: "controllerTrabajos"
                         },
                "viewB": {
                          templateUrl: "scripts/views/trabajo-detail.html",
                          controller: "controllerTrabajos"
                         }
             }
    })
    .state('trabajos.new', {
      url: ".new",
      views: {
                "viewA": {
                          templateUrl: "scripts/views/trabajo-new.html",
                          controller: "controllerTrabajos"
                          },
                "viewB": {
                          templateUrl: "scripts/views/trabajo-tools.html",
                          controller: "controllerTrabajos"
                         }
              }
    })
    .state('clientes', {
      url: "clientes",
      templateUrl: "scripts/views/clientes.html",
      controller: "menuClientes"
    })
    .state('clientes.detail', {
      url: ".detail",
      views: {  "viewA": {
                          templateUrl: "scripts/views/cliente-listado.html",
                          controller: "controllerClientes"
                         },
                "viewB": {
                          templateUrl: "scripts/views/cliente-detail.html",
                          controller: "controllerClientes"
                         }
             }
    })
    .state('clientes.new', {
      url: ".new",
      views: {
                "viewA": {
                          templateUrl: "scripts/views/cliente-new.html",
                          controller: "controllerClientes"
                          },
                "viewB": {
                          templateUrl: "scripts/views/cliente-tools.html",
                          controller: "controllerClientes"
                         }
              }
    })
    
});