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

//Second component that represents all the shirts
var ProductCatalog = React.createClass({
  render: function(){
    var catalogItems = this.props.productCatalog.map(function(shirt){
      return <ItemCatalog key={shirt.name} name={shirt.name} description={shirt.description} image={shirt.image}/>
    })
    return  <div>{catalotItems}</div>
  }
});

//Component for one shirt
var ItemCatalog = React.createClass({
  render: function(){
    <div class="col-sm-6 col-md-4">
      <div class="thumbnail">
        <img src={this.props.image} alt="..."/>
        <div class="caption">
          <h3>{this.props.title}</h3>
          <p>{this.props.description}</p>
          <input class="quantity" placeholder="quantity"/>
          <div class="dropdown">
            <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">Size<span class="caret"></span></button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
              <li><a href="#">Action</a></li>
              <li><a href="#">Another action</a></li>
              <li><a href="#">Something else here</a></li>
              <li role="separator" class="divider"></li>
              <li><a href="#">Separated link</a></li>
            </ul>
          </div>
          <a href="#" class="btn btn-default" role="button">Button</a>
        </div>
      </div>
    </div>
  }

});

//Exports
module.exports = {
  'ProductCatalog': ProductCatalog
}
