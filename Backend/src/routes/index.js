const express = require("express");
const router = express.Router();
const customerApi = require("./v1/customer.js");
const productApi = require("./v1/inventory.js");
router.use("/customer", customerApi);
router.use("/product", productApi);
module.exports = router;
