/** @jsx React.DOM */

var Backbone  = require('backbone');
var React     = require('react');
var Home      = require('./components/home.jsx');
var About     = require('./components/about.jsx');

// application router
var Router = Backbone.Router.extend({

	routes: {
		""        : "index",
		"welcome" : "welcome"
	},

	index: function () {
		React.render(<Home />, document.getElementById('main'));
	},

	welcome: function () {
		React.render(<About />, document.getElementById('main'));
	}
});

module.exports = Router;