const express = require("express");
const {
  registerCustomer,
  loginCustomer,
  addToCart,
  updateQuantity,
  deleteFromCart,
  getAllCartItems,
  clearCart,
  getUserDetails,
  updateUserDetails,
} = require("../../controllers/customer");
const router = express.Router();

router.post("/signup", registerCustomer);
router.post("/login", loginCustomer);
router.post("/cart/add", addToCart);
router.post("/cart/updateqty", updateQuantity);
router.post("/cart/delete", deleteFromCart);
router.post("/cart/all", getAllCartItems);
router.post("/cart/clear", clearCart);
router.post("/detail", getUserDetails);
router.post("/detail/update", updateUserDetails);
module.exports = router;
