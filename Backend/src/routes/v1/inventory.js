const express = require("express");
const {
  addProduct,
  getAllProducts,
  getItemDetail,
  isItInCart,
} = require("../../controllers/inventory");
const router = express.Router();

router.post("/add", addProduct);
router.get("/getall", getAllProducts);
router.post("/detail", getItemDetail);
router.post("/isitincart", isItInCart);
module.exports = router;
