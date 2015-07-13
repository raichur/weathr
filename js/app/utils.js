define([

], function (utils) {

  'use strict';

  var isNumber = function (n) {
    // Tests if n is not a number and is a finite number
    return !isNaN(parseFloat(n)) && isFinite(n);
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
