const asyncHandler = require("express-async-handler");
const req = require("express/lib/request");

const Product = require("../models/ProductModel");

// @desc getProduct
// @route GET /api/products
// @acess public

const getProduct = asyncHandler(async (req, res) => {
  const products = await Product.find();

  res.status(200).json(products);
});

const setProduct = asyncHandler(async (req, res) => {
  if (!req.body.product && !req.body.price) {
    res.status(400);
    throw new Error("Please add both product name and price");
  }
  const product = await Product.create({
    product: req.body.product,
    price: req.body.price,
  });

  res.status(200).json(product);
});

const updateProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    res.status(400);
    throw new Error("Product not found");
  }

  const updatedProduct = await Product.findById(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedProduct);
});

const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    res.status(400);
    throw new Error("Product not found");
  }

  await product.remove();

  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getProduct,
  setProduct,
  updateProduct,
  deleteProduct,
};
