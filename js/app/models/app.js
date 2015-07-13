define([
  'backbone',
  'backbone.localStorage'
], function (Backbone) {

  'use strict';

  var AppModel = Backbone.Model.extend({
    localStorage: new Backbone.LocalStorage("AppSettings"),
    defaults: {
      'backgroundColor': '#1d1d1d',
      'celsius': true,
      'welcomeMessage': 'Welcome to Weathr'
    }
  });

  return AppModel;

});
