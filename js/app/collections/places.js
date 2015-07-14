define([
  'backbone',
  'app/models/place',
  'backbone.localStorage'
], function (Backbone, PlaceModel) {

  'use strict';

  var PlaceCollection = Backbone.Collection.extend({
    localStorage: new Backbone.LocalStorage("Places"),
    model: PlaceModel
  });

  return PlaceCollection;

});
