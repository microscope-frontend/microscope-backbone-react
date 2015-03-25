/** @jsx React.DOM */

var React = require('react');
var WelcomeForm = require('./welcomeForm.jsx');

var About = React.createClass({
	render: function() {
    	return (
    		<div>
    			<h1>About</h1>
				<WelcomeForm />
    		</div>
    	);
  	}
});

module.exports = About;