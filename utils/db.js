const mongoose = require("mongoose");
const testData = require("../database/test_data.json");

const inventorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  count: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
});
const Product = mongoose.model("Product", inventorySchema);


const main = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1/test");
    resetDb();
  } catch (e) {
    console.error(e);
  }
};
const resetDb = async () => {
  console.log("Deleting all...");
  await Product.deleteMany({});
  for (let i = 0; i < testData.length; i++) {
    console.log(`Saving: ${testData[i].name}`);
    await new Product(testData[i]).save();
  }
  const products = await Product.find({});
  console.log(products);
};

const getProducts = async () => {
  try {
    const products = await Product.find({}) || {};
    return products;
  } catch (e) {
    console.error(e);
    throw e;
    return {};
  }
}
const addProducts = async (products) => {
  try {
    const result = await Product.insertMany(products, {rawResult: true});
    return result;
  } catch (e) {
    console.error(e);
    throw e;
  }
}
const addProduct = async (product) => {
  try {
    const document = new Product(product);
    const result = await document.save();
    return result;
  } catch (e) {
    console.error(e)
    throw e;
  }
}

main();

module.exports.getProducts = getProducts;
module.exports.addProducts = addProducts;
module.exports.addProduct = addProduct;