var React = require('react');
var ReactDOM = require('react');
var Backbone = require('backbone');
Backbone.LocalStorage = require('backbone.localstorage');

//Set up model
var CartItem = Backbone.Model.extend({

});

var CartItemCollection = Backbone.Collection.extend({
  model: CartItem,
  // localHost:
});

//Exports
module.exports = {
  'CartItem': CartItem,
  'CartItemCollection': CartItemCollection
}
