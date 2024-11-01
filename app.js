const express = require('express');
const app = express()
const port = 3000

app.get('/', (req, res) => {
	res.send('Hello, World!')
})
app.get('/monday', (req, res) => {
	res.send("WTFBOOOOM")
})
app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
})
