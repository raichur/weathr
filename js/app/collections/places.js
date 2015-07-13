define([
  'backbone',
], function (Backbone, PlaceModel) {

  'use strict';

  var PlaceCollection = Backbone.Collection.extend({
    localStorage: new Backbone.localStorage("Places"),
    model: PlaceModel
  });

  return PlacesCollection;

});
