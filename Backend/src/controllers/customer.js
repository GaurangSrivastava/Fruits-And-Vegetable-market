const bcrypt = require("bcrypt");
const Customer = require("../models/customer");
const jwt = require("jsonwebtoken");

const registerCustomer = async (req, res) => {
  const { username, password, name, email, address } = req.body;

  try {
    let customer = await Customer.findOne({ username });

    if (customer) {
      return res.status(200).json({ message: "username already in use" });
    }

    customer = await Customer.findOne({ email });

    if (customer) {
      return res.status(200).json({ message: "email already in use" });
    }

    // Hash the password using bcrypt
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new customer using the Customer model
    const newCustomer = new Customer({
      username,
      password: hashedPassword,
      name,
      email,
      address,
    });

    // Save the new customer to the database
    const savedCustomer = await newCustomer.save();

    res.status(201).json({
      message: "Customer registered successfully",
      customer: savedCustomer,
    });
  } catch (error) {
    res.status(500).json({
      message: "An error occurred while registering the customer",
      error: error.message,
    });
  }
};

const loginCustomer = async (req, res) => {
  const { username, password } = req.body;

  try {
    const customer = await Customer.findOne({ username });

    if (!customer) {
      return res.status(200).json({ message: "Authentication failed" });
    }

    const passwordMatch = await bcrypt.compare(password, customer.password);

    if (!passwordMatch) {
      return res.status(200).json({ message: "Authentication failed" });
    }

    const token = jwt.sign({ customerId: customer._id }, "your-secret-key", {
      expiresIn: "1h",
    });

    const cred = {
      userId: customer._id,
      username,
    };
    res.status(200).json({ cred });
  } catch (error) {
    res.status(500).json({
      message: "An error occurred during authentication",
      error: error.message,
    });
  }
};

const addToCart = async (req, res) => {
  try {
    const { userId, item, qty } = req.body;

    const customer = await Customer.findOne({ _id: userId });

    if (!customer) {
      return res.status(200).json({ message: "Customer not found" });
    }

    const cartItemIndex = customer.cart.findIndex(
      (cartItem) => cartItem.item.toString() === item
    );

    if (cartItemIndex !== -1) {
      return res.status(200).json({ message: "Cart item already present" });
    }

    customer.cart.push({ item, qty });
    await customer.save();

    return res
      .status(200)
      .json({ message: "Item added to cart", cart: customer.cart });
  } catch (error) {
    res.status(500).json({
      message: "An error occurred during authentication",
      error: error.message,
    });
  }
};

const updateQuantity = async (req, res) => {
  try {
    const { userId, item, qty } = req.body;
    const customer = await Customer.findOne({ _id: userId });

    if (!customer) {
      return res.status(200).json({ message: "Customer not found" });
    }

    const cartItemIndex = customer.cart.findIndex(
      (cartItem) => cartItem.item.toString() === item
    );

    if (cartItemIndex === -1) {
      return res.status(200).json({ message: "Cart item not found" });
    }

    customer.cart[cartItemIndex].qty = qty;
    await customer.save();

    return res
      .status(200)
      .json({ message: "Cart item quantity updated", cart: customer.cart });
  } catch (error) {
    res.status(500).json({
      message: "An error occurred during authentication",
      error: error.message,
    });
  }
};

const deleteFromCart = async (req, res) => {
  try {
    const { userId, item } = req.body;
    const customer = await Customer.findOne({ _id: userId });

    if (!customer) {
      return res.status(200).json({ message: "Customer not found" });
    }

    const cartItemIndex = customer.cart.findIndex(
      (cartItem) => cartItem.item.toString() === item
    );

    if (cartItemIndex === -1) {
      return res.status(200).json({ message: "Cart item not found" });
    }

    customer.cart.splice(cartItemIndex, 1);
    await customer.save();

    return res
      .status(200)
      .json({ message: "Cart item removed", cart: customer.cart });
  } catch (error) {
    res.status(500).json({
      message: "An error occurred during authentication",
      error: error.message,
    });
  }
};

const clearCart = async (req, res) => {
  try {
    const { userId } = req.body;
    const customer = await Customer.findOne({ _id: userId });

    if (!customer) {
      return res.status(200).json({ message: "Customer not found" });
    }

    customer.cart = [];
    await customer.save();

    return res
      .status(200)
      .json({ message: "Cart is cleared", cart: customer.cart });
  } catch (error) {
    res.status(500).json({
      message: "An error occurred during authentication",
      error: error.message,
    });
  }
};

const getAllCartItems = async (req, res) => {
  try {
    const { userId } = req.body;
    const customer = await Customer.findOne({ _id: userId });

    if (!customer) {
      return res.status(200).json({ message: "Customer not found" });
    }
    const cartItems = customer.cart;

    return res.status(200).json({ cartItems });
  } catch (error) {
    res.status(500).json({
      message: "An error occurred during authentication",
      error: error.message,
    });
  }
};

const getUserDetails = async (req, res) => {
  try {
    const { userId } = req.body;
    // console.log(userId);
    const customer = await Customer.findById(userId);

    if (!customer) {
      return res.status(200).json({ message: "user Not Found" });
    }

    res.status(200).json({
      name: customer.name,
      username: customer.username,
      email: customer.email,
      address: customer.address,
      profilepic: customer.profilepic,
    });
    //return res.status(200).json(customer);
  } catch (error) {
    res.status(500).json({
      message: "An error occurred during fetching of data",
      error: error.message,
    });
  }
};

const updateUserDetails = async (req, res) => {
  try {
    const { userId, username, name, email, address, profilepic } = req.body;

    const customer = await Customer.findById(userId);

    if (!customer) {
      return res.status(200).json({ message: "user Not Found" });
    }

    const existingUserWithUsername = await Customer.findOne({ username });

    if (
      existingUserWithUsername &&
      existingUserWithUsername._id.toString() !== userId
    ) {
      return res.status(200).json({ message: "Username is already in use" });
    }

    const existingUserWithEmail = await Customer.findOne({ email });

    if (
      existingUserWithEmail &&
      existingUserWithEmail._id.toString() !== userId
    ) {
      return res.status(200).json({ message: "Email is already in use" });
    }

    customer.username = username;
    customer.name = name;
    customer.email = email;
    customer.address = address;
    customer.profilepic = profilepic;

    await customer.save();

    res.status(200).json({ message: "user details updated" });
  } catch (error) {
    res.status(500).json({
      message: "An error occurred during fetching of data",
      error: error.message,
    });
  }
};

module.exports = {
  registerCustomer,
  loginCustomer,
  addToCart,
  updateQuantity,
  deleteFromCart,
  getAllCartItems,
  clearCart,
  getUserDetails,
  updateUserDetails,
};
