const express = require('express');
const db = require('../utils/db');
const router = express.Router();

router.get('/', async (req, res) => {
	const products = await db.getProducts();
	res.json({"inventory": products});
});
router.post('/', async (req, res) => {
	const body = req.body;
	try {
		await db.addProduct(body);
		res.json({message: "ok"});
	} catch (e) {
		res.json({message: "error posting products"});
	}
});

module.exports = router;
