function bookRoom2(sessionId) {
    return new Promise(function (resolve, reject) {
        var request = require('request');
        var options = {
            'method': 'POST',
            'url': 'https://my.westgateresorts.com/your-account/1214449114/reservation/book-a-room/',
            'headers': {
                'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
                'Accept-Language': 'en-US,en;q=0.9',
                'Cache-Control': 'max-age=0',
                'Connection': 'keep-alive',
                'Content-Type': 'application/x-www-form-urlencoded',
                'Cookie': 'JSESSIONID=12BFC3AED9CC34CB59E00357E1726095;; remember-me=dHBKQmFsY3plS2F0aVRVJTJGbTBoSHpRJTNEJTNEOm5CeVpoQXJzRzJoTXElMkJ0RUNqUDBodyUzRCUzRA; JSESSIONID=46BA03A8E394F10723D91145CA0FCBF0',
                'Origin': 'https://my.westgateresorts.com',
                'Referer': 'https://my.westgateresorts.com/your-account/1214449114/reservation/book-a-room/',
                'Sec-Fetch-Dest': 'document',
                'Sec-Fetch-Mode': 'navigate',
                'Sec-Fetch-Site': 'same-origin',
                'Sec-Fetch-User': '?1',
                'Upgrade-Insecure-Requests': '1',
                'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
                'sec-ch-ua': '"Chromium";v="106", "Google Chrome";v="106", "Not;A=Brand";v="99"',
                'sec-ch-ua-mobile': '?0',
                'sec-ch-ua-platform': '"Linux"'
            },
            form: {
                'usage.comboNumber': '1'
            }
        };
        options.headers.Cookie = sessionId;
        request(options, function (error, response) {
            resolve(response.statusCode);
            if (error) throw new Error(error);
            console.log(response.body);
        });


    });
}

module.exports = { bookRoom2 };