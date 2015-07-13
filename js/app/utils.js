define([

], function (utils) {

  'use strict';

  var isNumber = function (n) {
    return typeof n == 'number';
  }

  var celsiusToFahrenheit = function (cell) {
    if (!isNumber(cell)) {
      return null;
    }

    var fahr = (cell * 9 / 5) + 32;
    return fahr;

  };

  return {
    celsiusToFahrenheit: celsiusToFahrenheit
  }

});
