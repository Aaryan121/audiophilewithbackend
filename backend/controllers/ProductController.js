const getProduct = (req, res) => {
  res.status(200).json({
    message: "get product",
  });
};
const setProduct = (req, res) => {
  res.status(200).json({
    message: "set product",
  });
};
const putProduct = (req, res) => {
  res.status(200).json({
    message: `update product ${req.params.id}`,
  });
};
const deleteProduct = (req, res) => {
  res.status(200).json({ message: `delete product ${req.params.id}` });
};

module.exports = {
  getProduct,
  setProduct,
  putProduct,
  deleteProduct,
};
