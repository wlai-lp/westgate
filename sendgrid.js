let resetTime = false;
let lastResetDate = "";

function remap(result) {

    let bluetree = "";
    // result.bluetree.forEach((e) => { console.log(e.arrivalDate + " : " + e.availCount); })
    result.bluetree.forEach((e) => { bluetree = bluetree + e.arrivalDate + " : " + e.availCount + " | " })
    return bluetree;

}
async function notify(result) {

    // if we have any avail then send right away
    if(result.lakes.length + result.towns.length + result.villa.length > 0){
        sendMessage("WESTGATE BOOKIT NOW!!!")
    }

    let today = new Date().toLocaleDateString();
    // reset every day
    if (today !== lastResetDate) {
        resetTime = true;
        lastResetDate = today;
    }

    // if after 8 then send out the 1st notification of the date
    // just so we know it's still working
    if (resetTime && new Date().getHours() > 7) {
        console.log("send out 1st notification of the day");
        sendMessage(remap(result));
        resetTime = false;
    }

    // now we check of individual result, if bluetree has < 11 treshholw
    // sendMessage('test notification');
}

function sendMessage(message) {
    require('dotenv').config();

    const SENDGRID_TO_NUMBER = process.env.SENDGRID_TO_NUMBER;
    const SENDGRID_API = process.env.SENDGRID_API;
    const SENDGRID_EMAIL = process.env.SENDGRID_EMAIL;

    const sgMail = require('@sendgrid/mail')
    // sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    sgMail.setApiKey(SENDGRID_API)
    const msg = {
        to: SENDGRID_TO_NUMBER, // Change to your recipient
        from: SENDGRID_EMAIL, // Change to your verified sender
        subject: 'Sendgrid',
        text: message,
    }
    sgMail
        .send(msg)
        .then(() => {
            console.log('Email sent')
        })
        .catch((error) => {
            console.error(error)
        })
}

exports.notify = notify;