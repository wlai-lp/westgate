var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  port: 587,
  auth: {
    user: 'weifan.lai@gmail.com',
    pass: 'fbmwyegbqlddozzt'
  }
});

var mailOptions = {
  from: 'weifan.lai@gmail.com',
  to: 'weifan.lai@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});