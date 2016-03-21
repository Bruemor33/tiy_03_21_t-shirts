var $ = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');
var _ = require('underscore');
var Backbone = require('backbone');
require('backbone-react-component');

var shirts = [
  {
    "title": "The Traitor",
    "description": "A shirt based off the popular meme from episode 7.",
    "price": 2500
  },
  {
    "title": "Bounty",
    "description": "Our favorite bounty hunter, Buba Fett.",
    "price": 2500
  },
  {
    "title": "Darth Female",
    "description": "Darth Vader inspired Obey shit.",
    "price": 2500
  },
  {
    "title": "Mandalore",
    "description": "Mandalorian Imagery",
    "price": 2500
  },
  {
    "title": "Star Wars",
    "description": "Origional Star Wars Cast.",
    "price": 2500
  },
  {
    "title": "Table",
    "description": "Periodic Table of Star Wars.",
    "price": 2500
  }
]

module.exports = {
  'shirts': shirts
}
