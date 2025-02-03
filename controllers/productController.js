const Product = require("../models/Product");
const getAllProducts = async (req, res, next) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    next(err);
  }
};

// ------------------------------
const getProductById = async (req, res, next) => {
  try {
    const Product = await Product.findById(req.params.id);
    if (!Product) {
      return res.status(404).json({ message: "product not found" });
    }
    res.status(200).json(Product);
  } catch (err) {
    next(err);
  }
};
module.exports = { getAllProducts, getProductById };
