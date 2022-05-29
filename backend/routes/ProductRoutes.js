const express = require("express");
const router = express.Router();
const {
  getProduct,
  setProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/ProductController");

router.route("/").get(getProduct).post(setProduct);
router.route("/:id").put(updateProduct).delete(deleteProduct);

module.exports = router;
