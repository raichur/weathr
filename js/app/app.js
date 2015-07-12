define([
  'jquery'
], function ($) {
  'use strict';

  return {
    initialize: function () {
      $('body').append('<div id="content">Content</div>')
    }
  }
});
