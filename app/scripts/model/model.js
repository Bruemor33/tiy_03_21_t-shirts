var React = require('react');
var ReactDOM = require('react');
var Backbone = require('backbone');

//Set up model
var Shirt = Backbone.Model.extend({

});

var ShirtCollection = Backbone.Collection.extend({
  model: Shirt,
  // localHost:
});

//Exports
module.exports = {
  'Shirt': Shirt,
  'ShirtCollection': ShirtCollection
}
