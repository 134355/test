const nodemailer = require("nodemailer")
const config = require('./config')

const transporter = nodemailer.createTransport({
  host: config.host,
  port: 465,
  secure: true,
  auth: config.auth
})

function sendMail () {
  transporter.sendMail({
    from: config.auth.user, 
    to: "13435512130@163.com",
    subject: "Hello",
    text: "Hello world?",
    html: "<b>Hello world?</b>",
    attachments: [
      {
        filename: 'avatar.zip',
        path: './avatar.zip'
      }
    ]
  }, (err, res) => {
    if (err) {
      return console.log(err)
    }
    console.log(res)
  })
}
