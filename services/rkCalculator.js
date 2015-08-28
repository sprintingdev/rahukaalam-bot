
var RKCalculator = function() {};

var partitionToChoose = [7, 1, 6, 4, 5, 3, 2]

var rahukaalamTimes = ['16:30-18:00', '07:30-9:00', '15:00-16:30', '12:00-13:30','13:30-15:00', '10:30-12:00', '9:00-10:30']

RKCalculator.prototype.calculateTime = function(info, dayOfTheWeekCalculator) {
	var convertTimeToMinutes = function(timeString) {
		var hours = Number(timeString.split(":")[0]);
		var minutes = Number(timeString.split(":")[1]);
		return hours * 60 + minutes;
	};

	var convertMinutesToTime = function(timeInMinutes) {
		var hour = Math.floor(timeInMinutes/60);
		var minutes = timeInMinutes % 60;
		return (hour < 10 ? "0" + hour : hour) + ":" + ((minutes == 0) ? "00" : minutes);
	}
	
	var sunrise = info.sunrise;
	var sunset = info.sunset;

	var sunriseMinutes = convertTimeToMinutes(sunrise);
	var sunsetMinutes = convertTimeToMinutes(sunset);

	var interval = Math.floor((sunsetMinutes - sunriseMinutes)/8);

	var dayOfTheWeek = dayOfTheWeekCalculator();

	var rahukaalamTime = convertMinutesToTime(sunriseMinutes + partitionToChoose[dayOfTheWeek] * interval) + "-" +
												convertMinutesToTime(sunriseMinutes + (partitionToChoose[dayOfTheWeek] + 1) * interval);

	return rahukaalamTime;
};

module.exports = new RKCalculator();