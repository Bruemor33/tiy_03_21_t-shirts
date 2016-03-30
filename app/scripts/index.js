var $ = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');
var _ = require('underscore');
var Backbone = require('backbone');
require('backbone-react-component');

var shirtTotal = [];
var retrievedTotal = [];

$('#shirt1').click(function(e){
  e.preventDefault();
  var title = $('.title1').html();
  var quantity = $('.quantity1').val();
  var size = $('.select1 option:selected').html();
  var time = (new Date().getHours() * 60) + new Date().getMinutes();
  var selectionInfo = {title: title, quantity: quantity, size: size, time: time};
  shirtTotal.push(selectionInfo);
  localStorage.setItem('order', JSON.stringify(shirtTotal));
});

$('#shirt2').click(function(e){
  e.preventDefault();
  var title = $('.title2').html();
  var quantity = $('.quantity2').val();
  var size = $('.select2 option:selected').html();
  var time = (new Date().getHours() * 60) + new Date().getMinutes();
  var selectionInfo = {title: title, quantity: quantity, size: size, time: time};
  shirtTotal.push(selectionInfo);
  localStorage.setItem('order', JSON.stringify(shirtTotal));
});

$('#shirt3').click(function(e){
  e.preventDefault();
  var title = $('.title3').html();
  var quantity = $('.quantity3').val();
  var size = $('.select3 option:selected').html();
  var time = (new Date().getHours() * 60) + new Date().getMinutes();
  var selectionInfo = {title: title, quantity: quantity, size: size, time: time};
  shirtTotal.push(selectionInfo);
  localStorage.setItem('order', JSON.stringify(shirtTotal));
});

$('#shirt4').click(function(e){
  e.preventDefault();
  var title = $('.title4').html();
  var quantity = $('.quantity4').val();
  var size = $('.select4 option:selected').html();
  var time = (new Date().getHours() * 60) + new Date().getMinutes();
  var selectionInfo = {title: title, quantity: quantity, size: size, time: time};
  shirtTotal.push(selectionInfo);
  localStorage.setItem('order', JSON.stringify(shirtTotal));
});

$('#shirt5').click(function(e){
  e.preventDefault();
  var title = $('.title5').html();
  var quantity = $('.quantity5').val();
  var size = $('.select5 option:selected').html();
  var time = (new Date().getHours() * 60) + new Date().getMinutes();
  var selectionInfo = {title: title, quantity: quantity, size: size, time: time};
  shirtTotal.push(selectionInfo);
  localStorage.setItem('order', JSON.stringify(shirtTotal));
});

$('#shirt6').click(function(e){
  e.preventDefault();
  var title = $('.title6').html();
  var quantity = $('.quantity6').val();
  var size = $('.select6 option:selected').html();
  var time = (new Date().getHours() * 60) + new Date().getMinutes();
  var selectionInfo = {title: title, quantity: quantity, size: size, time: time};
  shirtTotal.push(selectionInfo);
  localStorage.setItem('order', JSON.stringify(shirtTotal));
});

console.log(shirtTotal);
console.log(localStorage.getItem('OrderInfo'));

var getShirts = JSON.parse(localStorage.getItem('order'));
var currentTime = (new Date().getHours() * 60) + new Date().getMinutes();
var cart = getShirts.map(function(item, index){
  var addedTime = item.time;
  var shirtTime = Math.floor((currentTime - addedTime)) + 1;
  $('#table-row').append('<tr><th>' + index + '</th><td>' + item.title + '</td><td>' + item.quantity + '</td><td>' + item.size + '</td></tr>')
})
