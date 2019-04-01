const nodemailer = require("nodemailer")

const transporter = nodemailer.createTransport({
  host: "smtp.163.com",
  port: 465,
  secure: true,
  auth: {
    user: '13435512130@163.com',
    pass: 'ljw1028'
  }
})

const mailOptions = {
  from: '13435512130@163.com', 
  to: "13435512130@163.com",
  subject: "Hello ✔",
  text: "Hello world?",
  html: "<b>Hello world?</b>",
  attachments: [
    {
      filename: 'avatar.zip',
      path: './avatar.zip'
    }
  ]
}

function sendMail () {
  
}


transporter.sendMail(mailOptions, (err, res) => {
  if (err) {
    return console.log(err)
  }
  console.log(res)
})
