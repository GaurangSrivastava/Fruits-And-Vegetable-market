const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  profilepic: {
    type: String,
    default: "none",
  },
  cart: [
    {
      item: {
        type: String,
        required: true,
      },
      qty: {
        type: Number,
        required: true,
      },
    },
  ],
});

const Customer = mongoose.model("Customer", customerSchema);

module.exports = Customer;
