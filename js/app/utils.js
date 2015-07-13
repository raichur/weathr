define([

], function (utils) {

  'use strict';

  var isNumber = function (n) {
    return typeof n == 'number';
  }

  var celsiusToFahrenheit = function (cel) {
    if (!isNumber(cel)) {
      return null;
    }
  };

  return {
    celsiusToFahrenheit: celsiusToFahrenheit
  }

});
