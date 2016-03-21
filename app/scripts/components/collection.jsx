var $ = require('jquery');
var _ = require('underscore');
var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
require('backbone-react-component');

//Local Imports
var ShirtModel = require('../model/model.js').ShirtModel;
var ShirtCollection = require('../model/model.js').ShirtCollection;
var shirtData = require('../shirts.js');

console.log(shirtData);

//Components
// var ShirtDisplay = React.creatClass({
//   mixins: [Backbone.React.Component.mixin],
//
// });

//Exports
module.exports = {
  'ShirtDisplay': ShirtDisplay
}
