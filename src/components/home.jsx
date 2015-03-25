/** @jsx React.DOM */

var React = require('react');

// Home page component
var Home = React.createClass({
	render: function() {
    	return (
			<div className="jumbotron text-center">
				<div className="container">
					<img src="/images/microscope.png" />
					<p className="lead">
						React + Backbone (CommonJS/ browserify) starter kit
					</p>
					<p>
						<a href="https://github.com/bhtz/microscope-backbone-react" className="btn btn-danger btn-lg">
							Show Github
						</a>
					</p>
				</div>
			</div>
    	);
  	}
});

module.exports = Home;