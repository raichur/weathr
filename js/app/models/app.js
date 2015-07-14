define([
  'backbone',
  'backbone.localStorage'
], function (Backbone) {

  'use strict';

  var AppModel = Backbone.Model.extend({
    localStorage: new Backbone.LocalStorage("AppSettings"),
    defaults: {
      'backgroundColor': '#1976D2',
      'celsius': true,
      'welcomeMessage': 'Weathr'
    }
  });

  return AppModel;

});
