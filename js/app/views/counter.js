define([
  'jquery',
  'underscore',
  'backbone'
], function ($, _, Backbone) {

  'use strict';

  var CounterView = Backbone.View.extend ({

    count: 0,

    initialize: function () {

    },

    events: {
      'click h3': 'addToCounter'
    },

    render: function () {
      var html = '<h3>This view has been clicked ' + this.count + ' times</h3>';
      this.$el.html(html);
      return this;
    },

    addToCounter: function () {
      this.count++;
      this.render();
    }

  });

  return CounterView;

});
