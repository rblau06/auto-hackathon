const request = require('request');

const username = '85df44f4d7fb477aa959a2b33aa08869',
    password = 'AfCBCEa8550246Cda59cA46a6418195f',
    url = 'https://' + username + ':' + password + '@hackathon.abgapiservices.com/';

request({url}, function (error, response, body) {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body); // Print the HTML for the Google homepage.
});