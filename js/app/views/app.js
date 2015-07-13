define([
  'jquery',
  'underscore',
  'backbone'
], function ($, _, Backbone) {

  'use strict';

  var AppView = Backbone.View.extend({
    id: 'app-view',

    html: [
      '<div class="navbar">',
        '<a class="navbar-brand" href="#">Weathr</a>'
          '<ul>',
            '<li id="navbar-dash"><a href="#"">Dashboard</a></li>',
            '<li id="nav-about"><a href="#">About</a></li>',
          '</ul>',
        '</div>',
        '<div id="content"></div>'
    ].join(''),

    initialize: function () {
      this.$el.append(this.html);
    }
  });

  return AppView;

});
