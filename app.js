const express = require('express')
const template = require('express-art-template')
const router = require('./router')

const app = express()

app.engine('html', template)

app.use(express.static('./public'))

app.use(router)

app.listen(3000, () => {
    console.log('服务器已启动~~~~~~~')
})