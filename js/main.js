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
  'backbone'
], function (Backbone) {
  'use strict';
  console.log(Backbone);
});
