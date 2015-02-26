app.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("trabajos.listado");
  //
  // Now set up the states
  $stateProvider
    .state('menuTrabajos', {
      url: "trabajos",
      templateUrl: "views/menuTrabajos.html",
      controller: "menuTrabajos"
    })
    .state('menuTrabajos.listado', {
      url: ".listado",
      templateUrl: "views/trabajos.html",
      controller: "controllerTrabajos"
    })
    .state('menuClientes', {
      url: "clientes",
      templateUrl: "views/menuClientes.html",
      controller: "menuClientes"
    })
    .state('menuClientes.listado', {
      url: ".listado",
        templateUrl: "views/clientes.html",
        controller: "controllerClientes"
    })
});