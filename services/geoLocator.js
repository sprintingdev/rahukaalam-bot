var GeoLocator = function() {
	var geocoderProvider = 'google';
	var httpAdapter = 'http';

	this.geocoder = require('node-geocoder')(geocoderProvider, httpAdapter);
}

GeoLocator.prototype.geocode = function(locationString, callback) {
	this.geocoder.geocode(locationString, function(err, res) {
    if(err) {
    	callback(err);
    } else {
    	callback(null, res);
    }
	});
};

module.exports = new GeoLocator();