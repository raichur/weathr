require([
  'qunit',
  'tests/utilsTest'
], function (qunit, utilsTest) {
  'use strict';

  utlisTest.run();
  qunit.load();
  qunit.start();
});


require.config({

  paths: {
    'jquery': 'vendor/jquery',
    'underscore': 'vendor/underscore',
    'backbone': 'vendor/backbone'
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
    }
  }
});

require([
  'backbone',
  'app/app'
], function (Backbone, App) {
  'use strict';

  App.initialize();
});
