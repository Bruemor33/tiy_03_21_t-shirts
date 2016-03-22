var $ = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');
var _ = require('underscore');
var Backbone = require('backbone');
require('backbone-react-component');

var shirts = [
  {
    "image": "images/traitor.jpg",
    "title": "The Traitor",
    "description": "A shirt based off the popular meme from episode 7.",
    "price": 2500
  },
  {
    "image": "images/traitor.jpg",
    "title": "Bounty",
    "description": "Our favorite bounty hunter, Buba Fett.",
    "price": 2500
  },
  {
    "image": "images/traitor.jpg",
    "title": "Darth Female",
    "description": "Darth Vader inspired Obey shit.",
    "price": 2500
  },
  {
    "image": "images/traitor.jpg",
    "title": "Mandalore",
    "description": "Mandalorian Imagery",
    "price": 2500
  },
  {
    "image": "images/traitor.jpg",
    "title": "Star Wars",
    "description": "Origional Star Wars Cast.",
    "price": 2500
  },
  {
    "image": "images/traitor.jpg",
    "title": "Table",
    "description": "Periodic Table of Star Wars.",
    "price": 2500
  }
]

module.exports = {
  'shirts': shirts
}
