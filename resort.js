exports.BLUETREE = 14;
exports.LAKES = 3;
exports.TOWNS = 9;
exports.VILLA = 0;

// exports.area = (r) =>
exports.search = (sessionId, id) => {
    return new Promise(function (resolve, reject) {
        var request = require('request');
        var options = {
            'method': 'POST',
            'url': 'https://my.westgateresorts.com/your-account/1214449114/reservation/book-a-room/search/multi/',
            'headers': {
                'Content-Type': 'application/json; charset=UTF-8',
                'Cookie': 'JSESSIONID=12BFC3AED9CC34CB59E00357E1726095;; remember-me=dHBKQmFsY3plS2F0aVRVJTJGbTBoSHpRJTNEJTNEOm5CeVpoQXJzRzJoTXElMkJ0RUNqUDBodyUzRCUzRA; JSESSIONID=46BA03A8E394F10723D91145CA0FCBF0'
            },
            body: '{"roomType":"TWO BEDROOM","arrivalDate":"2022-11-01","departDate":"2023-01-01","days":7,"guestCount":"4","showAccessible":false,"resort":"' + id + '"}'

        };
        options.headers.Cookie = sessionId;
        request(options, function (error, response) {
            // resolve(response.statusCode);
            resolve(response);
            if (error) throw new Error(error);
            // console.log(response.body);
        });

    });
}


// export default { bluetree };