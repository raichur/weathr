define([
  'backbone',
  'backbone.localStorage'
], function (Backbone) {

  'use strict';

  var AppModel = Backbone.Model.extend({
    localStorage: new Backbone.LocalStorage("AppSettings"),
    defaults: {
      'backgroundColor': '#3d3d3d',
      'celsius': true,
      'welcomeMessage': 'Welcome to Weathr'
    }
  });

  return AppModel;

});
