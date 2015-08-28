var RKCalculator = require("../services/rkCalculator");

jasmine.getEnv().defaultTimeoutInterval = 10000;

describe("rkCalculator", function () {
  it("should not be undefined", function () {
 		expect(RKCalculator).not.toBe(undefined); 
	});

	it("should return appropriate rahukaalam for Monday", function() {
		expect(RKCalculator.calculateTime({sunrise: "06:00", sunset: "18:00"}, function(){
			return 1;
		})).toBe("07:30-09:00");

		expect(RKCalculator.calculateTime({sunrise: "06:00", sunset: "18:00"}, function(){
			return 2;
		})).toBe("15:00-16:30")
	});
});