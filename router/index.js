const express = require('express')
const path = require('path')
const fs = require('fs')

const router = express.Router()

router.get('/', (req, res) => {
	res.render('index.html')
})

router.get('/dom', (req, res) => {
	const fileName = 'index.wxss'
	const filePath = path.join(__dirname, '../demo.js')
	
	res.writeHead(200,{  
		'Content-Type': 'application/octet-stream',   
		'Content-Disposition': 'attachment; filename=' + fileName, 
	});  
	fs.createReadStream(filePath).pipe(res);
})

module.exports = router