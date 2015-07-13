define([
  'jquery',
  'underscore',
  'backbone',
  'app/collections/places',
  'app/templates'
], function ($, _, Backbone, PlacesCollection, Templates) {

  'use strict';

  var DashView = Backbone.View.extend ({

    html: [
      '<h3>Dashboard page</h3>',
      '<div id="places-list">Loading</div>',
      '<div id="dash-buttons"></div>'
    ].join(''),

    initialize: function () {
      this.$el.html(this.html);
      this.$placesList = this.$('#places-list');
      this.$dashButtons = this.$('#dash-buttons');

      this.collection = new PlacesCollection([]);
      this.listenTo(this.collection, 'change', this.render);
      this.collection.fetch();

      window.debug = {
        places: this.collection
      }
    },

    render: function () {
      if (this.collection.length) {

        var placesHTML = [];

        this.collection.each(function (element, index, list) {
          placesHTML.push(Templates['place'](element.toJSON()));
        });
        this.$placesList.html(placesHTML.join(''));

      } else {
        this.$placesList.html('Sorry, there are no places to display');
      }
      return this;
    },

  });

  return DashView;

});
