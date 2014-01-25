/**
 * This file is used by server.
 * 
 */
var harp = require('harp');

harp.server(__dirname, {
	port: process.env.PORT || 5000 
});
