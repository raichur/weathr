define([
  'app/utils'
], function (utils) {

  'use strict';

  var run = function () {
    test('Test celsius to fahrenheit calculation', function () {
      strictEqual(utils.celsiusToFahrenheit(32), 89.6, 'Test a number');
      strictEqual(utils.celsiusToFahrenheit('hot'), null, 'Test a string');
      strictEqual(utils.celsiusToFahrenheit(), null, 'Test undefined');
    });
  };

  return {run: run}

});
