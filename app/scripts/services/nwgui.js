(function() {
  'use strict';

  angular
    .module('Imprenta')
    .factory('nwgui', nwgui);

  function nwgui(){
    var service = require('nw.gui');

    // Show dev tools with --show-dev-tools
    if (service.App.argv.indexOf('--show-dev-tools') != -1) {
      service.Window.get().showDevTools()
    }

    return service;
  }
})();