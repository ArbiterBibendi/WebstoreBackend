const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

const inventory = require('./routes/inventory.js');
const transactions = require('./routes/transactions.js');

app.use(bodyParser.json());
app.use('/inventory', inventory);
app.use('/transactions', transactions);

app.listen(port, () => {
	console.log(`listening on port ${port}`);
});
