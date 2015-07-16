define([
  'jquery',
  'underscore',
  'backbone',
  'app/views/modal'
], function ($, _, Backbone, ModalView) {

  'use strict';

  var AddPlaceView = ModalView.extend({

    html: [
      '<form role="form">',
        '<div class="form-group">',
          '<label for="countryCodeInput">Country Code</label>',
	'<br/>',
	  '<input type="text" class="form-control" id="countryCodeInput" placeholder="Enter Country Code" />',
        '</div>',
        '<div class="form-group">',
          '<label for="nameInput">Place Name</label>',
          	'<br/>',
	  '<input type="text" class="form-control" id="nameInput" placeholder="Enter Place Name" />',
        '</div>',
        '<div id="btn-add" class="btn">Submit</div>',
      '</form>'
    ].join(''),

    events: {
      'click #btn-add': 'addNewPlace'
    },

    initialize: function () {
      ModalView.prototype.initialize.apply(this, arguments);
      this.$bodyEl.html(this.html);
    },

    addNewPlace: function () {
      var place = {
        countryCode: this.$('#countryCodeInput').val(),
        name: this.$('#nameInput').val()
      };

      this.collection.create(place);
    }

  });

  return AddPlaceView;

});
