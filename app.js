async function app() {

    const login = require("./login");
    const bookRoom = require("./bookRoom");
    const bookRoom2 = require("./bookRoom2");
    // const bluetree = require("./bluetree");
    const resort = require("./resort");
    const log = require("./log");

    const circle = require('./circle.js');
    console.log(`The area of a circle of radius 4 is ${circle.area(4)}`);

    const sessionid = await login.westgateLogin();
    console.log("session id is " + sessionid);
    const responseCode = await bookRoom.bookRoom(sessionid);
    console.log(responseCode);
    const responseCode2 = await bookRoom2.bookRoom2(sessionid);
    console.log(responseCode2);
    let response = {};
    response = await resort.search(sessionid, resort.BLUETREE);
    log.report(response.body, resort.BLUETREE);

    response = await resort.search(sessionid, resort.LAKES);
    log.report(response.body, resort.LAKES);

    response = await resort.search(sessionid, resort.TOWNS);
    log.report(response.body, resort.TOWNS);

    response = await resort.search(sessionid, resort.VILLA);
    log.report(response.body, resort.VILLA);

    
    
}
app();
let delay = 20000;
setInterval(app, delay)
// app();