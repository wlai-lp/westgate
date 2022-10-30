require('dotenv').config();

const WESTGATE_PASSWORD = process.env.WESTGATE_PASSWORD;
const WESTGATE_USERID = process.env.WESTGATE_USERID;

async function getResults(sessionid){
    const resort = require("./resort");
    const log = require("./log");

    let results = {};
    let response = {};
    response = await resort.search(sessionid, resort.BLUETREE);
    results.bluetree = log.report(response.body, resort.BLUETREE);

    response = await resort.search(sessionid, resort.LAKES);
    results.lakes = log.report(response.body, resort.LAKES);

    response = await resort.search(sessionid, resort.TOWNS);
    results.towns = log.report(response.body, resort.TOWNS);

    response = await resort.search(sessionid, resort.VILLA);
    results.villa = log.report(response.body, resort.VILLA);
    return results;
}

async function login(){
    const bookRoom = require("./bookRoom");
    const bookRoom2 = require("./bookRoom2");

    let sessionid = await westgateLogin();
    const responseCode = await bookRoom.bookRoom(sessionid);
    console.log(responseCode);
    const responseCode2 = await bookRoom2.bookRoom2(sessionid);
    console.log(responseCode2);
    return sessionid;

}

function westgateLogin() {
    return new Promise(function (resolve, reject) {
        var sessionId = "";
        var request = require('request');
        var options = {
            'method': 'POST',
            'url': 'https://my.westgateresorts.com/login_process',
            'headers': {
                'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
                'Accept-Language': 'en-US,en;q=0.9,zh-TW;q=0.8,zh;q=0.7',
                'Cache-Control': 'max-age=0',
                'Connection': 'keep-alive',
                'Content-Type': 'application/x-www-form-urlencoded',
                'Cookie': '_upscope__region=InVzLWVhc3Qi; _upscope__shortId=IkFZU05OU0dBSEowMEZBSkRGIg==; urgentMessageSeenToday=true; SnapABugRef=https%3A%2F%2Fmy.westgateresorts.com%2Fguided-flow%20https%3A%2F%2Fmy.westgateresorts.com%2F; SnapABugHistory=1#; SnapABugUserAlias=%23; SnapABugVisit=24#1666314194; JSESSIONID=12958E9B1CC4FC6F9D230B68DBE5FC5C; remember-me=cktSRlkzbkg5VUNwZHIlMkZhemw3OVJBJTNEJTNEOkVpMzZrWnIwTkQ5SGxYMmlYUWZiV2clM0QlM0Q; JSESSIONID=12BFC3AED9CC34CB59E00357E1726095',
                'Origin': 'https://my.westgateresorts.com',
                'Referer': 'https://my.westgateresorts.com/',
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
                'user': WESTGATE_USERID,
                'password': WESTGATE_PASSWORD
            }
        };
        request(options, function (error, response) {
            // console.log(response.headers);
            // console.log(response);
            if (response.statusCode == 302) {
                var id = response.headers["set-cookie"][0].split(" ")[0];
                // console.log(sessionId);
                resolve(id);
            }
            if (error) throw new Error(error);
            console.log(response.body);
        });
        // resolve(sessionId);
    });
}

// module.exports = { westgateLogin };
exports.login = login;
exports.getResults = getResults;