const express = require('express');
const inventory = require('./routes/inventory.js');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use('/inventory', inventory);

app.listen(port, () => {
	console.log(`listening on port ${port}`);
});
