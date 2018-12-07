const request = require('request');

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
                let riders = [];
                for (a = 1; a <= seatCount; a++ ) {
                    riders.push([data[a].first_name, data[a].last_name]);
                }
                console.log(riders);
                return riders;

                //writing output to JSON File
                let rentalData = {
                    table: []
                };
                rentalData.table.push({});


            }).auth('85df44f4d7fb477aa959a2b33aa08869', 'AfCBCEa8550246Cda59cA46a6418195f', false);