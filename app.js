async function app() {

    const westgate = require("./westgate");
    try {
        const sessionid = await westgate.login();
        let results = await westgate.getResults(sessionid);
        console.log(results);
    } catch (error) {
        console.log(error);
    }
}
app();
let delay = 20000;
// setInterval(app, delay)
// app();