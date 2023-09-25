const inventory = require("../models/inventory");
const Customer = require("../models/customer");
const addProduct = async (req, res) => {
  try {
    const { name, image, price, type } = req.body;

    const product = new inventory({
      name,
      image,
      price,
      type,
    });

    await product.save();

    res.status(200).json({ message: "product added successfully", product });
  } catch (error) {
    return res.status(500).json({ error: error });
  }
};

const getAllProducts = async (req, res) => {
  try {
    const products = await inventory.find();

    res.status(200).json(products);
  } catch (err) {
    return res.status(500).json({ error: err });
  }
};

const getItemDetail = async (req, res) => {
  try {
    const { itemId } = req.body;
    //console.log(Ite)
    const product = await inventory.findById(itemId);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json({ item: product });
  } catch (err) {
    return res.status(500).json({ error: err });
  }
};

const isItInCart = async (req, res) => {
  try {
    const { userId, itemId } = req.body;

    const customer = await Customer.findById(userId);

    if (!customer) {
      return res.status(200).json({ message: "customer not found!" });
    }
    //console.log(customer.cart);
    const cartItem = customer.cart.find(
      (item) => item.item.toString() === itemId
    );
    //console.log(cartItem);
    if (cartItem) {
      return res.status(200).json({ exists: true });
    } else {
      return res.status(200).json({ exists: false });
    }
  } catch (error) {
    return res.status(500).json({ error: error });
  }
};

module.exports = { addProduct, getAllProducts, getItemDetail, isItInCart };
