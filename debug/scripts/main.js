(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/** @jsx React.DOM */
/*jshint indent: 2, node: true, nomen: true, browser: true*/
/*global React */

var React = require('react');
var Reverter = require('./reverter');

React.render(
  React.createElement(Reverter, null),
  document.getElementById('reverter')
);

},{"./reverter":3,"react":"react"}],2:[function(require,module,exports){
/** @jsx React.DOM */
/*jshint indent: 2, node: true, nomen: true, browser: true*/
/*global React */

var revert = require('../services/revert.js')

module.exports = React.createClass({displayName: "exports",
  getInitialState: function () {
    return {
      message : 'Always a pleasure scaffolding your apps.'
    };
  },
  reverse: function () {
    this.setState({
      message : revert(this.state.message)
    });
  },
  render: function () {
    return (
        React.createElement("div", null, 
          React.createElement("p", {ref: "p", className: "lead"}, this.state.message), 
          React.createElement("p", null, 
            React.createElement("button", {
              type: "button", 
              className: "btn btn-success", 
              ref: "button", 
              onClick: this.reverse}, 
              React.createElement("span", {className: "glyphicon glyphicon-refresh"}), 
                "Click me!"
            )
          )
        )
      );
  }
});

},{"../services/revert.js":4}],3:[function(require,module,exports){
module.exports = require('./components/reverter');

},{"./components/reverter":2}],4:[function(require,module,exports){
module.exports = function revert (text) {
  return text.split('').reverse().join('');
}

},{}]},{},[1]);
