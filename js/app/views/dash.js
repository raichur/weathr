define([
  'jquery',
  'underscore',
  'backbone',
  'app/collections/places',
  'app/views/place',
  'app/views/add_place'
], function ($, _, Backbone, PlacesCollection, PlaceView, AddPlaceView) {

  'use strict';

  var DashView = Backbone.View.extend ({

    html: [
      '<div id="dash-buttons">',
      '<button id="btn-settings" type="button" class="button">Settings</button>',
      '<button id="btn-add-new" type="button" class="button">Add New</button>',
      '</div>',
      '<div id="places-list">Loading</div>'
    ].join(''),

    views: [],

    events: {
      'click #btn-add-new': 'addNewPlace'
    },

    addNewPlace: function (e) {
      var modal = new AddPlaceView({
        title: 'Add a new place',
        id: 'modal-add-new-place',
        collection: this.collection
      });
      modal.render();
    },

    initialize: function () {
      this.$el.html(this.html);
      this.$placesList = this.$('#places-list');
      this.$dashButtons = this.$('#dash-buttons');

      this.collection = new PlacesCollection([]);
      this.listenTo(this.collection, 'change destroy', this.render);
      this.collection.fetch();

      window.debug = {
        places: this.collection
      }
    },

    render: function () {
      var that = this;
      this.cleanUp();

      if (this.collection.length) {

        this.collection.each(function (element, index, list) {
          var place = new PlaceView({
            model: element,
            id: ['place-', element.get('countryCode'), '-', element.get('name')].join('')
          });
          that.$placesList.append(place.render().el);
          that.views.push(place);
        });

      } else {
        this.$placesList.html('<div><div class="panel" style="padding-top: 30px; padding-bottom: 30px;"><h3>Sorry, there are no places to display.</h3></div></div>');
      }
      return this;
    },

    cleanUp: function () {
      for (var i = 0; i < this.views.length; i++) {
        this.views[i].remove();
      }
      this.views.length = 0;
      this.$placesList.html('');
    }

  });

  return DashView;

});
