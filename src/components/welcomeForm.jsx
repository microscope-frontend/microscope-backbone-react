/** @jsx React.DOM */

var React = require('react');

// Welcome sample form component
var WelcomeForm = React.createClass({

	handleSubmit: function (event) {
		event.preventDefault();
		var firstname = this.refs.firstname.getDOMNode().value;
		var lastname = this.refs.lastname.getDOMNode().value;
		alert('welcome ' + firstname + ' ' + lastname + ' !!!');
	},

	render: function() {
    	return (
			<form onSubmit={this.handleSubmit} >
			  <div className="form-group">
			    <label>Firstname</label>
			    <input ref="firstname" type="text" className="form-control" placeholder="Your firstname" />
			  </div>
			  <div className="form-group">
			    <label >Lastname</label>
			    <input ref="lastname" type="text" className="form-control" placeholder="Your lastname" />
			  </div>
			  <button type="submit" className="btn btn-default">Submit</button>
			</form>
    	);
  	}
});

module.exports = WelcomeForm;