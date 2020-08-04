const http = require('http');

const weatherUrl = `http://api.weatherstack.com/current?access_key=63e08a16347e4c66141d7e8df6e916ee&query=45,-75&units=f`;

const request = http.request(weatherUrl, (response) => {
    let data = '';

    response.on('data', (chunk) => {
        data += chunk;
    });

    response.on('end', () => {
        const body = JSON.parse(data);
        console.log(body);
    });
});

request.on('error', (error) => {
    console.log('An error', error);
});

request.end();