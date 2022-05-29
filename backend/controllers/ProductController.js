const asyncHandler = require("express-async-handler");

const getProduct = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: "get product",
  });
});
const setProduct = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }
  res.status(200).json({
    message: "set product",
  });
});
const putProduct = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: `update product ${req.params.id}`,
  });
});
const deleteProduct = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `delete product ${req.params.id}` });
});

module.exports = {
  getProduct,
  setProduct,
  putProduct,
  deleteProduct,
};
