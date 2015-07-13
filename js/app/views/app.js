define([
  'jquery',
  'underscore',
  'backbone',
  'app/views/about',
  'app/views/dash'
], function ($, _, Backbone, AboutView, DashView) {

  'use strict';

  var AppView = Backbone.View.extend({
    id: 'app-view',

    html: [
      '<div class="navbar">',
        '<a class="navbar-brand" href="#">Weathr</a>',
          '<ul class="nav">',
            '<li id="nav-dash"><a href="#dash">Dashboard</a></li>',
            '<li id="nav-about"><a href="#about">About</a></li>',
          '</ul>',
          '<p class="navbar-text"></p>',
        '</div>',
        '<div id="content"></div>'
    ].join(''),

    events: {

    },

    views: {

    },

    initialize: function () {

      this.views['about'] = new AboutView({
        id: 'page-about',
        className: 'page-view'
      });

      this.views['dash'] = new DashView({
        id: 'page-dash',
        className: 'page-view'
      });

      this.$el.append(this.html);

      this.$('#content').append(this.views['about'].render().el);
      this.$('#content').append(this.views['dash'].render().el);

    },

    render: function () {
      this.$el.css('background-color', this.model.get('backgroundColor'));
      this.$('.navbar-text').html(this.model.get('welcomeMessage'));
      return this;
    },

    setPage: function (page) {
      this.$('.nav li').removeClass('active');
      this.$('.page-view').hide();
      this.$('#nav-' + page).addClass('active');
      this.$('#page-' + page).show();
    }

  });

  return AppView;

});
