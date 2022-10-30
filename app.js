async function app() {

    const westgate = require("./westgate");
    const resort = require("./resort");
    const log = require("./log");
    try {
        const sessionid = await westgate.login();
        let results = await westgate.getResults(sessionid);
        console.log(results);
    } catch (error) {
        console.log(error);
    }
    // let response = {};
    // response = await resort.search(sessionid, resort.BLUETREE);
    // log.report(response.body, resort.BLUETREE);

    // response = await resort.search(sessionid, resort.LAKES);
    // log.report(response.body, resort.LAKES);

    // response = await resort.search(sessionid, resort.TOWNS);
    // log.report(response.body, resort.TOWNS);

    // response = await resort.search(sessionid, resort.VILLA);
    // log.report(response.body, resort.VILLA);



}
app();
let delay = 20000;
// setInterval(app, delay)
// app();