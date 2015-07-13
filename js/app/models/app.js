define([
  'backbone'
], function (Backbone) {

  'use strict';

  var AppModel = Backbone.Model.extend({
    defaults: {
      'backgroundColor': '#1d1d1d',
      'celsius': true,
      'welcomeMessage': 'Welcome to Weathr'
    }
  });
  
  return AppModel;

});
