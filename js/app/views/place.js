define([
  'jquery',
  'underscore',
  'backbone',
  'app/templates',
  'app/collections/days'
], function ($, _, Backbone, Templates, DaysCollection) {

  'use strict';

  var PlaceView = Backbone.View.extend ({

    template: Templates['place'],

    collection: new DaysCollection([]),

    events: {
      'click #btn-remove': 'removePlace',
      'click #btn-expand': 'openDetail'
    },

    initialize: function () {
      var html = this.template(this.model.toJSON());
      this.$el.html(html);
      this.$bodyEl = this.$('.panel-body');
    },

    render: function () {
      var that = this;
      this.collection.url = [
        'http://api.wunderground.com/api/',
        '4551af85b076e442',
        '/forecast/q/',
        this.model.get('countryCode'),
        '/',
        this.model.get('name'),
        '.json'
      ].join('');

      this.collection.fetch({
        success: function (collection, response, options) {
          that.renderDay();
        },
        error: function (data, error) {
          console.log(error);
        }
      });

      return this;
    },

    renderDay: function () {
      var daysHTML = [];

      this.collection.each(function (element, index, list) {
        daysHTML.push(
          Templates['day'](element.toJSON())
        );
      });

      this.$bodyEl.html(daysHTML.join(''));
    },

    removePlace: function (e) {
      this.model.destroy();
    },

    openDetail: function (e) {
      this.$('.panel').toggleClass('detail');
    }

  });

  return PlaceView;

});
