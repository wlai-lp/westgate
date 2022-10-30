async function app() {

    const westgate = require("./westgate");
    const sendGrid = require("./sendgrid");
    const gform = require("./gform");
    try {
        const sessionid = await westgate.login();
        let results = await westgate.getResults(sessionid);
        console.log(results);
        // sendGrid.notify(results);
        gform.logResult(results);
    } catch (error) {
        console.log(error);
    }
}
app();
let delay = 20000;
// setInterval(app, delay)
// app();