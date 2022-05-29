const express = require("express");
const router = express.Router();
const {
  getProduct,
  setProduct,
  putProduct,
  deleteProduct,
} = require("../controllers/ProductController");

router.route("/").get(getProduct).post(setProduct);
router.route("/:id").put(putProduct).delete(deleteProduct);

module.exports = router;
