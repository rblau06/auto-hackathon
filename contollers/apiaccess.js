const request = require('request');
const fs = require('fs');

        request.get('https://hackathon.abgapiservices.com/nabhackathon?where=co_rental_loc_mnemonic="BOS"',
            function rentalInfo (error, response, body) {
                // console.log('error:', error); // Print the error if one occurred
                // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
                // console.log('body:', body); // Print the HTML for the Google homepage.'
                if (error) {
                    console.log(error);
                    return;
                }

                let data = JSON.parse(body);
                let rentalRecord = 20;
                console.log(data[rentalRecord].today);
                console.log(data[rentalRecord].co_rental_loc_mnemonic);
                console.log(data[rentalRecord].seat_belt_sensor);
                let seatCount = data[rentalRecord].seat_belt_sensor;
                let riders = {
                    table: []
                };
                for (a = 1; a <= seatCount; a++ ) {
                    riders.table.push([data[a].first_name, data[a].last_name]);
                }
                let json = JSON.stringify(riders);
                // Write output to JSON File
                fs.writeFile('avisriders.json', json, 'utf8', callback);

                fs.readFile('avisriders.json', 'utf8', function readFileCallback(err, data){
                    if (err){
                        console.log(err);
                    } else {
                        obj = JSON.parse(data); //now it an object
                        obj.table.push([data[a].first_name, data[a].last_name]); //add some data
                        json = JSON.stringify(obj); //convert it back to json
                        fs.writeFile('avisriders.json', json, 'utf8', callback); // write it back
                        }});
                // console.log(json);

            }).auth('85df44f4d7fb477aa959a2b33aa08869', 'AfCBCEa8550246Cda59cA46a6418195f', false);