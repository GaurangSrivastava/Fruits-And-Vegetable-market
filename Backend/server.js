const express = require("express");
const helmet = require("helmet");
const xss = require("xss-clean");
const mongoSanitize = require("express-mongo-sanitize");
const dotenv = require("dotenv");
const cors = require("cors");
const dbConnect = require("./src/config/DB.js");
const apiRouter = require("./src/routes/index.js");
const app = express();
const PORT = process.env.PORT||5000;
const stripe=require("stripe")(process.env.STRIPE_SECRET_KEY);

dotenv.config();
dbConnect();
app.use(helmet());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));

app.use(xss());
app.use(mongoSanitize());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

app.use(
  cors({
    origin: [process.env.FRONTEND_URL_1, process.env.FRONTEND_URL_2],
    credentials: true,
    methods: ["GET", "PUT", "POST", "DELETE"],
  })
);
app.post("/api/payment", async (req, res) => {
  const { amount, token } = req.body;

  try {
    // Create a PaymentMethod using the token
    const paymentMethod = await stripe.paymentMethods.create({
      type: "card",
      card: {
        token: token,
      },
    });

    // Use the PaymentMethod to create a PaymentIntent
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "inr", // Change to your currency if necessary
      payment_method_types: ["card"],
      payment_method: paymentMethod.id, // Use the PaymentMethod ID
      confirm: true,
    });

    res.json({ success: true });
  } catch (error) {
    console.error("Stripe error:", error.message);
    res.json({ success: false, error: error.message });
  }
});


app.use("/api", apiRouter);


app.listen(PORT, () => console.log(`server running on port ${PORT}`));

