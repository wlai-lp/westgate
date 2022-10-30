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
  text: 'and easy to do anywhere, even with xxx Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
}
sgMail
  .send(msg)
  .then(() => {
    console.log('Email sent')
  })
  .catch((error) => {
    console.error(error)
  })