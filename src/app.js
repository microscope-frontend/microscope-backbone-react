'use strict';

var $         = global.jQuery = global.$ = require('jquery');
require('bootstrap');
var Backbone  = require('backbone');
Backbone.$    = $;
var Router    = require('./router.jsx');

/**
 * DOM ready
 */
$(document).ready(function () {
	new Router();
	Backbone.history.start();
});