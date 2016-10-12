var request = require('request');

function requestJson (url, callback) {
    request('url', function(err, response) {
        if (err) {
            callback(err);
        }
        else {
            try {
                var actualResponse = callback(JSON.parse(response.body));
                function callback (null, actualResponce) {
                    
                }
            }
            catch (err) {
                callback(err);
            }

        }
    })
    
}