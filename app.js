var RKCalculator = require('./services/rkCalculator');
var GeoLocator = require('./services/geoLocator');
var SunTimeCalculator = require('suncalc');
var moment = require('moment');


(function calculateRahu(location) {
	GeoLocator.geocode(location, function(err, res) {

		console.log(res);
		var result = SunTimeCalculator.getTimes(new Date(), res[0].latitude, res[0].longitude);
		var sunrise = result.sunrise.getHours() + ":" + result.sunrise.getMinutes();
		var sunset = result.sunset.getHours() + ":" + result.sunset.getMinutes();

		var rahuTime = RKCalculator.calculateTime({sunrise: sunrise, sunset: sunset}, function(){
        var date = moment();
        date.utc();
        return date.day();
      });
		console.log(rahuTime);

	});
})("Philadelphia, PA");