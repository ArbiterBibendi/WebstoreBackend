const express = require('express');
const db = require('../utils/db');
const router = express.Router();

router.get('/', async (req, res) => {
	const products = await db.getProducts();
	res.json({"inventory": products});
});
router.get('/:id', async (req, res) => {
	const id = req.params.id;
	try {
		const product = await db.getProduct(id);
		res.json({"inventory": product});
	} catch {
		res.json({message: "error finding product"}).status(500);
	}
});
router.post('/', async (req, res) => {
	const body = req.body;
	try {
		await db.addProduct(body);
		res.json({message: "ok"});
	} catch (e) {
		res.json({message: "error posting products"}).status(500);
	}
});
router.put('/:id', async (req, res) => {
	const body = req.body;
	body._id = req.params.id;
	try {
		const dbresponse = db.updateProduct(body);
		res.json({message: "ok"});
	} catch (e) {
		res.json({message: "error updating products"}).status(500);
	}
});
router.delete("/:id", async (req, res) => {
	const id  = req.params.id;
	try {
		const dbresponse = db.deleteProduct(id);
		res.json({message: "ok"});
	} catch (e) {
		res.json({message: "error deleting product"}).status(500);
	}
});

module.exports = router;
