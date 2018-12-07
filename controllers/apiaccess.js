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
            Players: []
        };

        console.log(Players);

        for (a = 1; a <= seatCount; a++ ) {
            // let fullName = riders.Players.push("First Name: " + [data[a].first_name + "Last Name: " + data[a].last_name]);
            let firstName = [data[a].first_name];
            let lastName = [data[a].last_name];
            // riders.Players.push(firstName, lastName);
            riders.Players.push("First Name: " + firstName);
            riders.Players.push("Last Name: " + lastName);
        }

        let json = JSON.stringify(riders);
        // Write output to JSON File
        let wstream = fs.createWriteStream('./assets/avisriders.json', 'utf8');
        // for (a = 1; a <= seatCount; a++ ) {
        //     wstream.write(json + '\n');
        // }

        // console.log(riders);

        // riders.forEach(function(element) {
        //     wstream.write(json + '\n');
        // });
        // wstream.end();

    }).auth('85df44f4d7fb477aa959a2b33aa08869', 'AfCBCEa8550246Cda59cA46a6418195f', false);