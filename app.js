const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const productRoutes = require("./routes/productRoutes");
const authRoutes = require("./routes/authRoute");
const newsletterRoutes = require("./routes/newsletterRoutes");
const app = express();

app.use(cors());

app.use(express.json());
app.use(morgan("dev"));
app.use("/api/products", productRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/sub", newsletterRoutes);
app.use((err, req, res, next) => {
  console.error(err.stack);
  res
    .status(err.status || 500)
    .json({ message: err.message || "internal server error" });
});
module.exports = app;
// believeemeka06
// LnOaYhR9FlqnvUpX
// mongodb+srv://believeemeka06:LnOaYhR9FlqnvUpX@cluster0.p3uyn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
