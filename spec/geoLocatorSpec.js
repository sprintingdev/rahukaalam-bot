var GeoLocator = require("../services/geoLocator");

jasmine.getEnv().defaultTimeoutInterval = 10000;

describe("geoLocator", function () {
  it("should not be undefined", function () {
 		expect(GeoLocator).not.toBe(undefined); 
	});

	it("should be able to geocode Philadelphia", function(done) {
		GeoLocator.geocode("Philadelphia, PA", function(err, res) {
			if(err) {
				done(err);
			} else {
				expect(res[0].latitude).toBe(39.9525839);
				expect(res[0].longitude).toBe(-75.1652215);
				done();
			}
		});
	});
});