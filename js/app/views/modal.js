define([
  'jquery',
  'underscore',
  'backbone',
  'app/templates',
], function ($, _, Backbone, Templates) {

  'use strict';

  var ModalView = Backbone.View.extend({

    template: Templates['modal'],

    events: {

    },

    id: 'modal-view',

    initialize: function () {
      var title = this.title || '';
      var appendTo = this.appendTo || 'body';
      var html = Templates['modal']({title: title});
      this.$el.html(html);
      this.$modalEl = this.$('.modal');
      this.$bodyEl = this.$('.modal-body');
      this.$titleEl = this.$('.modal-title');
      $(appendTo).append(this.el);
    },

    render: function () {
      return this;
    }

  });

  return ModalView;

});
