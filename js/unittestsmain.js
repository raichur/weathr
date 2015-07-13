require.config({

  paths: {
    'jquery': 'vendor/jquery',
    'underscore': 'vendor/underscore',
    'backbone': 'vendor/backbone',
    'qunit': 'vendor/qunit'
  },

  shim: {
    'underscore': {
      exports: '_'
    },
    'backbone': {
      deps: [
        'underscore',
        'jquery'
      ],
      exports: 'Backbone'
    },
    'qunit': {
      exports: 'qunit',
      init: function () {
        qunit.config.autoload = false;
        qunit.config.autostart = false;
      }
    }
  }
});


require([
  'qunit',
  'tests/utilstest'
], function (qunit, utilstest) {
  'use strict';

  utilstest.run();
  qunit.load();
  qunit.start();

})
