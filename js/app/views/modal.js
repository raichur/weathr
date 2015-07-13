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
      var title = this.options.title || '';
      var appendTo = this.options.appendTo || 'body';
      var html = Templates['modal']({title: title});
      this.$el.html(html);
      this.$modalEl = this.$('.modal');
      this.$bodyEl = this.$('.modal-body');
      this.$titleEl = this.$('.modal-title');
      $(appendTo).append(this.el);
    },

    render: function () {
      this.$modelEl.modal({
        show: false,
        keyboard: false
      });
      return this;
    },

    show: function () {
      var that = this;
      this.$modalEl.modal('show');
      this.$modalEl.on('hidden', function () {
        that.onModalHidden();
      });
    },

    onModalHidden: function (e) {
      this.$modalEl.off('hidden');
      this.remove();
    }

  });

  return ModalView;

});
