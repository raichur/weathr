define([
  'jquery'

], function ($) {
  'use strict';

  var initialize = function () {
    $('body').append('<div id="' + id + '"></div>')
  };

  return {
    initialize: initialize
  }
});
