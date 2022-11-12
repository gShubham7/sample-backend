const express = require("express");

require("dotenv").config();
const connect = require("./config/db");
const cors = require("cors");
const PORT = process.env.PORT;
const app = express();
app.use(express.json());
app.use(cors()); /// Ye File Upar Rahengi

const UserRoute = require("./features/user/user.router");
const MenRoute = require("./features/mens/mens.router");
const WomenRoute = require("./features/womens/womens.router");
const ElectronicRoute = require("./features/electronics/electronics.router");
const CartRoute = require("./features/cart/cart.router");
app.get('/', function (req, res) {
  res.sendFile( `${process.cwd()}/public/index.html` );
});
app.use("/user", UserRoute);
app.use("/mens", MenRoute);
app.use("/womens", WomenRoute);
app.use("/electronics", ElectronicRoute);
app.use("/cart", CartRoute);

app.listen(PORT, async () => {
  await connect();
  console.log(`listen at http://localhost:${PORT}`);
});
