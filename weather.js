var request = require('request');
var prompt = require('prompt');
var nextFiveDays = [];
var userLocation, meteo; 

prompt.get('location', function(err, input) { 
    if (err) {
       console.log(err);
    }
    else {
        var textLocation = input.location;
        console.log(textLocation);
        request('https://maps.googleapis.com/maps/api/geocode/json?address=' + textLocation, function (err, data) {
            if (err) {
                console.log(err);
            }
            else {
                var actualLocationData = JSON.parse(data.body);
                textLocation = actualLocationData.results[0].geometry.location;
                console.log(textLocation);
                request('https://api.darksky.net/forecast/befc1bae997d4f02750ea5db0f408b3b/' + textLocation.lat + ',' + textLocation.lng, function (err, data) {
                    if (err) {
                            console.log(err);
                    }
                    else {
                        var weatherLocation = JSON.parse(data.body);
                        for (var i = 0; i < 5; i++) {
                            nextFiveDays.push(weatherLocation.daily.data[i].summary);
                        }
                        console.log(nextFiveDays);
                    }
                })
            }
        });
    }
});