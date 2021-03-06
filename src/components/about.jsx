/** @jsx React.DOM */

var React = require('react');
var WelcomeForm = require('./welcomeForm.jsx');

// About page component
var About = React.createClass({
	render: function() {
    	return (
    		<div>
    			<h1>Welcome</h1>
				<WelcomeForm />
    		</div>
    	);
  	}
});

module.exports = About;