({

  paths: {
    'jquery': 'vendor/jquery',
    'underscore': 'vendor/underscore',
    'backbone': 'vendor/backbone',
    'backbone.localStorage': 'vendor/backbone.localStorage'
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
  },

  appDir: '../',
  baseUrl: "js",
  dir: "../app-build",
  modules: [
    {
      name: "main"
    }
  ]

})
